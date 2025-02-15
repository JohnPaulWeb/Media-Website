
"use client"

import Image from "next/image"
import { motion } from "framer-motion"


export default function AboutHero() {


    return (
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <Image src="/kiyo.jpg" alt="Koji" layout="fill" objectFit="cover" className="absolute inset-0" priority />

            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">About You</h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto">Elavate your ideas to action and Beyond </p>
            </motion.div>
        </section>
    )
}