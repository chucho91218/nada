"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react" // Necesitás instalar lucide-react o usar un SVG

export function InvitationFooter() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-20px" })

  return (
    <footer ref={ref} className="flex flex-col items-center gap-6 px-6 py-20 pb-24">
      {/* Línea divisoria minimalista */}
      <motion.div
        className="h-12 w-px bg-gold/20"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8 }}
      />

   

    
    </footer>
  )
}