import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";



export default function Footer() {
    return (
        <footer className="bg-[#1A0507] text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4"> 
                            Ayanokoji Kiyotaka
                        </h3>
                        <p className="text-white/70 mb-4">
                            What do you want, Please Specify your request,
                        </p>

                        <div className="flex space-x-4">
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                              <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                              <Twitter className="h-5 w-5" />
                            </Link>

                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                              <Instagram className="h-5 w-5" />
                            </Link>

                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                              <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl font-bold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Property</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Agents</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}