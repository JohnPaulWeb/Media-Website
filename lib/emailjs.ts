
import { init } from '@emailjs/browser';


export const EMAILJS_SERVICE_ID = "service"
export const EMAILJS_TEMPLATE_ID = "template"


export const EMAILJS_PUBLIC_KEY = ""

export const initEmailJS = () => {
    init(EMAILJS_PUBLIC_KEY);
}