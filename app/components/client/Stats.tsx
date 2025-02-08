"use client"

import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

import { Statistic } from '../../types'
import Image from "next/image"



const stats: Statistic[] = [

    { value: '120+', label: 'Human Life' },
    { value: '48+', label: 'Human Works' },
    { value: '29+', label: 'Human Culture' },
    { value: '100+', label: 'Human Life' },
    
]





export default function Stats() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section ref={ref} className="py-24 bg-white">
            <div className="container mx-auto px-4">
                 <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/2 space-y-6">
                    <h2 className={cn(
                        "text-3xl md:text-4xl font-bold text-[#3D0C11] leading-tight transition-all duration-700 delay-100", inView ?
                         "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}>Your Journey with others</h2>


                    <p className={cn(
                        "text-gray-600 leading-relaxed transition-all duration-700 delay-200", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}>

Kiyotaka Ayanokōji (綾あやの小こう路じ 清きよ隆たか, Ayanokōji Kiyotaka) is the main protagonist of the You-Zitsu series. He is currently a second-year student of Advanced Nurturing High School.
                        
                    </p>
                    </div>

                    <div className="lg:w-1/2 space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <div key={index} className={cn(
                                "bg-[#FBF9F4] p-6 rounded-2xl transform hover-scale-105 transition-all duration-300",
                                 index === 1 ? "bg-[#3D0C11] text-white" : "", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                            >

                                <div className="text-3xl font-bold mb-2">
                                    {stat.value}
                                </div>
                                <div className={`text-sm ${index === 1 ? "text-white/90" : "text-gray-600"}`}>{stat.label}</div>

                            </div>
                        ))}
                    </div>

                    <div className={cn(
                        "relative h-80 rounded-2xl overflow-hidden transition-all duration-700 delay-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}>

                        <Image src="/Itoshi Rin.jpg" fill className="object-cover transition-transform duration-700 hover:scale-110" />

                    </div>
                    </div>
                 </div>
            </div>
        </section>
    )
}