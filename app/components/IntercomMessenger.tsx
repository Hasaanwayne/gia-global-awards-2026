"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Intercom Messenger — loads Fin / FinAgent on the site with an on-brand
 * custom launcher (black + lime, Barlow Condensed) instead of the default
 * round Intercom bubble.
 *
 * INTERCOM_APP_ID is the Intercom Workspace ID (Settings → Installation).
 *
 * NOTE: The chat panel itself is a cross-origin iframe and can't be styled
 * from here — set its colours in Intercom → Settings → Messenger → Styling:
 *   Background colour : #000000
 *   Action colour     : #DFFF13
 */
const INTERCOM_APP_ID = "ctce6jyb";

declare global {
    interface Window {
        Intercom?: (...args: unknown[]) => void;
        intercomSettings?: Record<string, unknown>;
    }
}

const LIME = "#DFFF13";
const INK = "#050505";

export default function IntercomMessenger() {
    const [open, setOpen] = useState(false);
    const [unread, setUnread] = useState(0);
    const [hovered, setHovered] = useState(false);

    // Attach Intercom event handlers once the widget (or its queue stub) exists.
    useEffect(() => {
        let tries = 0;
        const id = window.setInterval(() => {
            if (window.Intercom) {
                window.Intercom("onShow", () => setOpen(true));
                window.Intercom("onHide", () => setOpen(false));
                window.Intercom("onUnreadCountChange", (count: number) =>
                    setUnread(typeof count === "number" ? count : 0)
                );
                window.clearInterval(id);
            } else if (++tries > 40) {
                window.clearInterval(id);
            }
        }, 250);
        return () => window.clearInterval(id);
    }, []);

    const toggle = () => {
        if (!window.Intercom) return;
        window.Intercom(open ? "hide" : "show");
    };

    return (
        <>
            {/* Boot Intercom once the page is interactive; hide the default launcher. */}
            <Script id="intercom-settings" strategy="afterInteractive">
                {`window.intercomSettings = { app_id: "${INTERCOM_APP_ID}", hide_default_launcher: true };`}
            </Script>
            <Script id="intercom-loader" strategy="afterInteractive">
                {`(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`}
            </Script>

            {/* On-brand custom launcher. Hidden while the Messenger panel is open. */}
            <button
                type="button"
                aria-label="Ask Fin — open chat"
                onClick={toggle}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    position: "fixed",
                    right: 24,
                    bottom: 24,
                    zIndex: 2147483000,
                    display: open ? "none" : "inline-flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "13px 20px",
                    background: LIME,
                    color: INK,
                    border: "none",
                    borderRadius: 9999,
                    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                    fontWeight: 800,
                    fontSize: 17,
                    lineHeight: 1,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    boxShadow: hovered
                        ? "0 8px 32px rgba(223,255,19,0.45), 0 2px 8px rgba(223,255,19,0.2)"
                        : "0 4px 20px rgba(223,255,19,0.25)",
                    transform: hovered ? "translateY(-2px) scale(1.03)" : "none",
                    transition:
                        "transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
                }}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M12 3C6.99 3 3 6.58 3 11c0 2.06.87 3.94 2.3 5.37-.16 1.2-.6 2.3-1.3 3.2 1.36-.18 2.62-.62 3.7-1.3 1.3.6 2.77.93 4.3.93 5.01 0 9-3.58 9-8s-3.99-8-9-8Z"
                        fill={INK}
                    />
                </svg>
                Ask Fin
                {unread > 0 && (
                    <span
                        aria-label={`${unread} unread`}
                        style={{
                            minWidth: 20,
                            height: 20,
                            padding: "0 6px",
                            borderRadius: 9999,
                            background: INK,
                            color: LIME,
                            fontFamily: "system-ui, sans-serif",
                            fontSize: 12,
                            fontWeight: 700,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {unread > 9 ? "9+" : unread}
                    </span>
                )}
            </button>
        </>
    );
}
