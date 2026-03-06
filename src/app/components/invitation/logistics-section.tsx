"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin, Clock } from "lucide-react"

interface EventBlockProps {
  icon: React.ReactNode
  title: string
  date: string
  time: string
  location: string
  delay?: number
}

function EventBlock({ icon, title, date, time, location, delay = 0 }: EventBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const handleConfirmar = async () => {
    const mensaje = "Confirmo perri 🥩"
    const grupoLink = "https://chat.whatsapp.com/Ip1cQp0ixyjKlyHPGixYXN"
    
    try {
      // Copia el mensaje al portapapeles
      await navigator.clipboard.writeText(mensaje)
      alert("¡Mensaje 'Confirmo perri' copiado! Pegalo en el grupo ahora.")
    } catch (err) {
      console.error("Error al copiar", err)
    } finally {
      // Abre el grupo de WhatsApp de todas formas
      window.open(grupoLink, "_blank")
    }
  }

  const handleComoLlegar = () => {
    // Genera link de Google Maps con la dirección
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
    window.open(mapsUrl, "_blank")
  }

  return (
    <motion.div
      ref={ref}
      className="flex flex-1 flex-col items-center gap-6 border border-border p-8 md:p-10"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center text-foreground">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-serif text-2xl tracking-[0.1em] text-foreground">
        {title}
      </h3>

      {/* Details */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase">{date}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase">{location}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button 
          onClick={handleConfirmar}
          className="group relative border border-foreground px-6 py-3 font-sans text-[10px] tracking-[0.3em] text-foreground uppercase transition-colors hover:bg-foreground hover:text-primary-foreground active:scale-[0.98]"
        >
          <span>Confirmar</span>
        </button>
        <button 
          onClick={handleComoLlegar}
          className="group relative border border-foreground px-6 py-3 font-sans text-[10px] tracking-[0.3em] text-foreground uppercase transition-colors hover:bg-foreground hover:text-primary-foreground active:scale-[0.98]"
        >
          <span>{"Como llegar?"}</span>
        </button>
      </div>
    </motion.div>
  )
}

export function LogisticsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <motion.p
        className="mb-16 text-center font-sans text-xs tracking-[0.4em] text-muted-foreground uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        La celebración
      </motion.p>

      <div className="mx-auto flex max-w-4xl flex-col gap-6 md:flex-row md:gap-0">
        <EventBlock
          icon={<GraduationCap className="h-8 w-8" strokeWidth={1} />}
          title="Almuerzo"
          date="Domingo 8 de marzo"
          time="12:00 hs"
          location="Chucho's House"
          delay={0}
        />
      </div>
    </section>
  )
}