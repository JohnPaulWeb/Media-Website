

export interface Property {
    id: string
    title: string
    price: string
    location: string
    image: string
    bedrooms: number
    bathrooms: number
    area: number
    type: string
    status?: "active" | "active"
    createdAt: string
}

export interface Statistic {
    value: string
    label: string
}

export interface Service {
    id: string
    title: string
    description: string
}