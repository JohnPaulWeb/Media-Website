

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const TeamMembers = [
    {
        name: "Kiyotaka Ayanokoji",
        role: "CEO & Founder",
        image: "/kot.jpg",
    },
    {
        name: "Kiyotaka Ayanokoji",
        role: "CEO & Founder",
        image: "/kot.jpg",
    },
    {
        name: "Kiyotaka Ayanokoji",
        role: "CEO & Founder",
        image: "/kot.jpg",
    },
]

export default function TeamSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-12">
                    Meet ur Shine
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TeamMembers.map((member, index) => (
                        <motion.div key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}>

                            <Card className="overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative h-80">
                                        <Image src={member.image || "/kot.jpg"} alt={member.name} layout="fill" objectFit="cover" />
                                    </div>

                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-semibold mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-600">{member.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}