"use client"

import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/emailjs"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Input } from "@/components/ui/input"


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const formRef = useRef<HTMLFormElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault
        setIsSubmitting(true)
        setErrorMessage('')

        try {
            const result = await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current!,
                EMAILJS_PUBLIC_KEY
            )

            console.log('EmailJS result:', result.text)
            setIsSuccess(true)
            setFormData({ name: '', email: '', phone: '', message: '' })
        } catch (error) {
            console.log('EmailJS result', result.text)
            setIsSuccess(true)
            if (error instanceof Error) {
                setErrorMessage(error.message)
            } else {
                setErrorMessage('An unknown error occurred')
            }
        }

        setIsSubmitting(false)
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 5000)
    }
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-100">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 bg-[#3D0C11] p-12 text-white">
                        <h2>Get in Here</h2>
                        <p className="mb-6">We are here to helpy you when you need your help</p>
                        <div className="space-7-4">
                            <p className="flex items-center">
                                <Send size={20} className="mr-2" />
                                yasuozed@gmail.com
                            </p>
                            <p className="flex items-center">
                                <Send size={20} className="mr-2" />
                                09132053539
                            </p>
                            <p className="flex items-center">
                                <Send size={20} className="mr-2" />
                             NightCore 
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-12">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name"
                             className="w-full px-4 py-3 rounded-md border-gray-400 focus:border-[#3D0C11] focus:ring-[#3D0C11]" required />

                        </div>
                    </form>
                    </div>
                 </motion.div>
            </div>
        </section>
    )
}