"use client"

import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/emailjs"


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
        }
    }
    return (
        <section>
            
        </section>
    )
}