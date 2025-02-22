"use client"


import AdminLayout from "@/app/components/layouts/AdminLayout"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"
import { useState } from "react"



interface Property {
    id: string
    title: string 
    location: string
    price: number
    image: string
    bedrooms: number
    bathrooms: number
    area: number
    coordinates: [number, number]
}

const properties: Property[] = [
    {
        id: '1',
        title: "",
        location: "",
        price: 2000,
        image: '',
        bedrooms: 5,
        bathrooms: 6,
        coordinates: [21.434, -7.06],
    },
    {
        id: '2',
        title: "",
        location: "",
        price: 2000,
        image: '',
        bedrooms: 5,
        bathrooms: 6,
        coordinates: [21.434, -7.06], 
    },

    {
        id: '3',
        title: "",
        location: "",
        price: 2000,
        image: '',
        bedrooms: 5,
        bathrooms: 6,
        coordinates: [21.434, -7.06], 
    },


]

export default function PropertyListingMap() {


    const [selectedProperty, setSelectedProperty] = useState<string | null>(null)

    return (
       <AdminLayout>
        <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-1">Kiyotaka Ayanokoji</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Study</span>
                <span>Research</span>
                <span>/</span>
                <span className="text-gray-900">Listing List Map</span>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
            <div className="p-4">
                <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-7-1/2 text-gray-400" size={20} />

                    <Input type="text" placeholder="Please Input your Location" className="pl-10" />
                    </div>
                </div>
        </div>
       </AdminLayout>
    )
}