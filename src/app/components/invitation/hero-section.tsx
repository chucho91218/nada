"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-svh w-full overflow-hidden flex items-center justify-center">
      {/* 1. Fondo con zoom suave al entrar */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/imageee.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Overlay oscuro para que se lea el texto */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* 2. Texto con revelación escalonada */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.p
          className="mb-4 font-sans text-xs tracking-[0.5em] uppercase opacity-80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Te invitamos a celebrar
        </motion.p>

        <motion.h1
          className="font-serif text-6xl md:text-8xl tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          UN GRAN ASADO
          <span className="block mt-2 text-gold"></span>
        </motion.h1>

        <motion.div
          className="mt-8 h-12 w-px bg-white/30 mx-auto"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>
    </section>
  )
}