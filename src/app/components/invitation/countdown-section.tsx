"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const TARGET_DATE = new Date("2026-03-08T12:00:00")

interface TimeLeft {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

function getTimeLeft(): TimeLeft {
  const now = new Date()
  const diff = TARGET_DATE.getTime() - now.getTime()

  if (diff <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
  }

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  }
}

function CountdownUnit({ value, label, isMounted }: { value: number; label: string; isMounted: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="font-serif text-5xl leading-none text-foreground md:text-7xl">
        {/* Mostramos 00 hasta que el cliente esté montado para evitar el error de hidratación */}
        {isMounted ? String(value).padStart(2, "0") : "00"}
      </span>
      <span className="font-sans text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  )
}

function Separator() {
  return <div className="mx-4 h-12 w-px bg-border md:mx-6 md:h-16" />
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())
  const [isMounted, setIsMounted] = useState(false) // Nuevo estado para controlar la hidratación
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    setIsMounted(true) // Marcamos como montado al cargar en el navegador
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="flex flex-col items-center gap-10 px-6 py-24 md:py-32">
      <motion.p
        className="font-sans text-xs tracking-[0.4em] text-muted-foreground uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Cuenta regresiva
      </motion.p>

      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <CountdownUnit value={timeLeft.dias} label="Dias" isMounted={isMounted} />
        <Separator />
        <CountdownUnit value={timeLeft.horas} label="Horas" isMounted={isMounted} />
        <Separator />
        <CountdownUnit value={timeLeft.minutos} label="Min" isMounted={isMounted} />
        <Separator />
        <CountdownUnit value={timeLeft.segundos} label="Seg" isMounted={isMounted} />
      </motion.div>

      <motion.div
        className="h-12 w-px bg-border"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </section>
  )
}