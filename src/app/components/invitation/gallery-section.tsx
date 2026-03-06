"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

// Tus imágenes de la carpeta public/images
const images = [
  { src: "/images/egres.jpg", alt: "Egresados celebrando" },
  { src: "/images/egres1.jpg", alt: "Lugar del evento" },
  { src: "/images/egres2.jpg", alt: "Detalles de graduación" },
  { src: "/images/egres3.jpg", alt: "Amigos en la fiesta" },
]

// Variantes para que entren una tras otra
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso entre fotos
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
}

export function GallerySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  
  
}