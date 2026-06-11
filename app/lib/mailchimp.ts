// Mailchimp subscribe via JSONP (the classic /subscribe/post endpoint does not
// allow cross-origin fetch/CORS, so we use the post-json + JSONP callback).
// Audience: cellardoornexus (us18).

const MC_BASE = "https://cellardoornexus.us18.list-manage.com/subscribe/post-json"
const MC_PARAMS = "u=f099b1e5dc7efb9ddf74c1848&id=e3ff9c85fa&f_id=00aea8e6f0&tags=3025326"

type MailchimpResponse = { result: "success" | "error"; msg: string }

let jsonpCounter = 0

export function subscribeToMailchimp(email: string): Promise<MailchimpResponse> {
    return new Promise((resolve, reject) => {
        const cbName = `__mcjsonp_${++jsonpCounter}_${Date.now()}`
        const script = document.createElement("script")

        const cleanup = () => {
            try {
                delete (window as unknown as Record<string, unknown>)[cbName]
            } catch {
                (window as unknown as Record<string, unknown>)[cbName] = undefined
            }
            script.remove()
        }

        ;(window as unknown as Record<string, (data: MailchimpResponse) => void>)[cbName] = (data) => {
            cleanup()
            resolve(data)
        }

        script.onerror = () => {
            cleanup()
            reject(new Error("Network error contacting Mailchimp"))
        }

        script.src = `${MC_BASE}?${MC_PARAMS}&EMAIL=${encodeURIComponent(email)}&c=${cbName}`
        document.body.appendChild(script)
    })
}

// Treats "already subscribed" as a success for UX purposes.
export function isMailchimpSuccess(data: MailchimpResponse): boolean {
    return data.result === "success" || /already subscribed/i.test(data.msg)
}

export function cleanMailchimpMsg(msg: string): string {
    return msg.replace(/<[^>]*>/g, "").trim() || "Something went wrong. Please try again."
}
