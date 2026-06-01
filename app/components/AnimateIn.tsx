"use client"
import { useEffect, useRef, useState, ReactNode } from "react"
import React from "react"

interface Props {
    children: ReactNode
    delay?: number
    from?: "up" | "left" | "right" | "fade"
    distance?: number
    className?: string
    style?: React.CSSProperties
}

export default function AnimateIn({
    children,
    delay = 0,
    from = "up",
    distance = 30,
    className,
    style,
}: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    obs.disconnect()
                }
            },
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    const translateMap = {
        up:    `translateY(${distance}px)`,
        left:  `translateX(-${distance}px)`,
        right: `translateX(${distance}px)`,
        fade:  "none",
    }

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translate(0,0)" : translateMap[from],
                transition: `opacity 0.72s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.72s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
                ...style,
            }}
        >
            {children}
        </div>
    )
}
