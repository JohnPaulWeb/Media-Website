import AdminLayout from "@/app/components/layouts/AdminLayout"
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
    
]

export default function PropertyListingMap() {


    const [selectedProperty, setSelectedProperty] = useState<string | null>(null)


    return (
       <AdminLayout>

       </AdminLayout>
    )
}