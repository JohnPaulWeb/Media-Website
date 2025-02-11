"use client"


import { libreFranklin, poppins } from "@/app/fonts/fonts"
import { Button } from "@/components/ui/button"
import Image from "next/image"
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
            <div className="absolute inset-0 bg-[url('/yano.jpg')] bg-cover bg-center opacity-20" />

            <div className={`${libreFranklin.className} bg-white/5 backdrop-blur-md rounded-[50px] p-12 md:p-16 text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

                    <h2 className={`${poppins.className} text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight transition-all duration-1000 delay-200 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            The Classroom of the Elite
                        </h2>

                        <p className={`text-white/90 text-lg max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        Ayanokoji Kiyotaka from The classroom of the elite is False Genius
                        </p>

                        
                        {/* practice ito  */}
                        <div className={`transition-all duration-1000 delay-600 ${
                            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                                <Button variant="secondary" size="lg" className={`${poppins.className} bg-white hover:bg-white/90 text-black px-8 py-6 text-lg font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                                   Learn More
                                </Button>
                        </div>
            </div>

            <div className="mt-16 relative h-[400px]">
                <div className={`transition-opacity duration-1000 delay-800 ${isVisible ? "opacity-100" : "opacity-0"}`}>


                    {/* Image ito */}
                    <Image src="/kiyo.jpg" alt="World" layout="fill" objectFit="contain" className="opacity-30" />


                </div>
                {cities.map((city, index) => (
                    <div key={city.name} className={`absolute transition-all duration-1000 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                    
                      style={{ left: city.x, top: city.y, transitionDelay: `${1000 + index * 200}ms`}}
                    >

                        <div className="relative">
                            <div className="w-3 h-3 bg-white rounded-full animate-ping absolute"></div>
                            <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
                        </div>

                        <p className={`${poppins.className} text-white text-sm mt-2 whitespace-nowrap transition-all duration-300 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                            
                              style={{ transitionDelay: `${1200 + index * 200}ms`}}
                            >
                                {city.name}

                        </p>
                        
                    </div>
                ))}
            </div>
        </section>
    )
}