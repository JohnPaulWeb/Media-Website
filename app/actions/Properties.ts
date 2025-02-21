import { revalidatePath } from "next/cache";
import Properties from "../components/client/Properties";


export async function getProperties() {
    return Properties
}

export async function addProperty(formData: FormData) {
    const property = {
        id: Date.now().toString(),
        title: formData.get("title") as string, 
        price: formData.get("price") as string, 
        location: formData.get("location") as string,
        image: formData.get("image") as string,
        bedrooms: Number.parseInt(formData.get("bedrooms") as string),
        bathrooms: Number.parseInt(formData.get("bathrooms") as string),
        area: Number.parseInt(formData.get("area") as string),
        type: formData.get("type") as string,
        status: "active",
        createdAt: new Date().toISOString().split("T")[0],
    }

    // i think there is an error on this 

    Properties.push(property)
    revalidatePath("/admin/properties")
    revalidatePath("/properties")
    return { success: true}

}


export async function updateProperty(id: string, formData: FormData) {
    // Properties = Properties.map
}