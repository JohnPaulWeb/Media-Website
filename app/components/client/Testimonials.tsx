import { useEffect, useState } from "react"

const testimonials = [
    {
        quote: "Life can be ",
        author: 'Ayanokoji'
    },

    {
        quote: "Its your choice whether to stay or not",
        author: 'Rakuzan'
    }
]



export default function Testimonials() {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (

       <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                What is your Choice? 
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    
                      style={{ transitionDelay: }}
                    >

                    </div>
                ))}
            </div>
        </div>
       </section>
    )
}