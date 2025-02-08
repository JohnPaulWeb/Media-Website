"use client"

import { Property } from "@/app/types"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"


const properties: Property[] = [
    {
        id: '1',
        title: 'Ayanokoji',
        price: '',
        location: '',
        image: '',
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
    },
    {   
        id: '2',
        title: 'Ayanokoji',
        price: '',
        location: '',
        image: '',
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
    },
    {
        id: '3',
        title: 'Ayanokoji',
        price: '',
        location: '',
        image: '',
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
    },
]

export default function Properties() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return(
        <section ref={ref} className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className={cn(
                    "text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 delay-100", inView ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-4"
                )}>

                    Discover your Project Overview

                </h2>

                <div className="grid grid-cols-1 ">

                </div>
            </div>
        </section>
    )
}