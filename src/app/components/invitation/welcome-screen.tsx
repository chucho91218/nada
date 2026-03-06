'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function WelcomeScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fdfcf9]" // Fondo crema de tu web
        >
          <div className="flex flex-col items-center space-y-8">
            
            {/* Logo con animación de entrada suave */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-24 h-24 md:w-32 md:h-32 relative"
            >
              
            </motion.div>

            {/* Texto minimalista */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center space-y-2"
            >
              <p className="tracking-[0.4em] text-[10px] uppercase text-gray-400 font-light">
                Estás invitado a un gran asadazo.
              </p>
            </motion.div>

            {/* Botón Estilo Editorial */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              whileHover={{ letterSpacing: "0.3em" }}
              onClick={() => setIsOpen(true)}
              className="mt-8 px-12 py-3 border border-gray-200 text-gray-500 text-[11px] uppercase tracking-[0.2em] transition-all duration-500 ease-in-out hover:bg-gray-50"
            >
              Ingresar
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}