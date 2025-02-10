"use client"


import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"




const cities = [
    { name: "Manila", x: "25:", y: "75%"},
    { name: "Luzon", x: "25:", y: "75%"},
    { name: "Visayas", x: "25:", y: "75%"},
    { name: "Mindanao", x: "25:", y: "75%"},
]

export default function GlobalNetwork() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (inView) {
            setIsVisible(true)
        }

    }, [inView])
    return(
        <section ref={ref} className="relative py-32 overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[url('')]">

            </div>
        </section>
    )
}