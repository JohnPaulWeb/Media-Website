import { JetBrains_Mono, Libre_Franklin, Poppins } from "next/font/google";

export const libreFranklin = Libre_Franklin({
    subsets: ['latin'],
    variable: '--font-libre-franklin',
})

export const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono',
})

export const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
})