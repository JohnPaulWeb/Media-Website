"use client"

import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/emailjs"

import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle, Send, XCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


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
                        <div>
                        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"
                             className="w-full px-4 py-3 rounded-md border-gray-400 focus:border-[#3D0C11] focus:ring-[#3D0C11]" required />
                        </div>
                        <div>
                        <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number (Optional)"
                             className="w-full px-4 py-3 rounded-md border-gray-400 focus:border-[#3D0C11] focus:ring-[#3D0C11]" required />
                        </div>
                        <div>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"
                             className="w-full px-4 py-3 rounded-md border-gray-400 focus:border-[#3D0C11] focus:ring-[#3D0C11]" required />
                        </div>

                        <Button type="submit" className="w-full bg-[#c4294d] hover:bg-[#2f2f9499] text-white font-semibold py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                         disabled={isSubmitting}>
                            
                            {
                                isSubmitting ? 'Sending...' : 'Send Message'
                            }
                        </Button>
                    </form>
                    </div>
                 </motion.div>
            </div>

            <AnimatePresence>
                {showPopup && (
                    <motion.div initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-5 right-5 bg-white rounded-lg shadow-lg p-6 max-w-sm">

                        <div className="flex items-center">
                            {isSuccess ? (
                                <CheckCircle className="text-green-500 mr-3" size={24} />
                            ) : (
                                <XCircle className="text-red-500 mr-3" size={24} />
                            )}

                            <p className="text-lg font-semibold">
                                {isSuccess ?  "Message Sent" : 'Failed to Send'}
                            </p>
                        </div>

                        <p className="mt-2 text-gray-600">
                            {isSuccess
                            ? "Thank you for Message" : errorMessage || "There was an error, Please Try again"}
                        </p>

                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}