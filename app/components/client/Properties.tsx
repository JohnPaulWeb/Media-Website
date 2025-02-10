"use client"

import { Property } from "@/app/types"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"


const properties: Property[] = [
    {
        id: '1',
        title: 'Ayanokoji',
        price: '400',
        location: 'Japan, ',
        image: '/kot.jpg',
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
    },

    {   
        id: '2',
        title: 'Ayanokoji',
        price: '1200',
        location: 'Japan',
        image: '/yano.jpg',
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
    },

    {
        id: '3',
        title: 'Ayanokoji',
        price: '5000',
        location: 'Japan',
        image: '/kojic.jpg',
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property, index) => (
                        <div key={property.id} className={cn("bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300", 
                            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}
                         style={{ transitionDelay: `${index * 100}ms` }}
                        >

                            <div className="relative h-48">
                                <Image src={property.image} alt={property.title} layout="fill" objectFit="cover" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                                <p className="text-gray-600 mb-4">{property.location}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#3D0C11] font-bold">
                                        {property.price}
                                    </span>
                                    <Button variant="outline" size="sm">View More</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cn(
                    "text-center mt-12 transition-all duration-700 delay-500", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>

                    <Link href="/properties">
                      <Button size="lg" className="bg-[#3D0C11] hover:bg-[#2D090D] text-white">View More?</Button>
                    </Link>

                </div>
            </div>
        </section>
    )
} 