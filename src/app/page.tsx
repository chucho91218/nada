import WelcomeScreen from "./components/invitation/welcome-screen";
import { HeroSection } from "./components/invitation/hero-section"
import { CountdownSection } from "./components/invitation/countdown-section"
import { LogisticsSection } from "./components/invitation/logistics-section"
import { InvitationFooter } from "./components/invitation/invitation-footer"

export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      {/* El WelcomeScreen maneja el audio y el bloqueo de pantalla inicial */}
      <WelcomeScreen />
     
      {/* Contenido de la invitación */}
      <HeroSection />

      <div className="bg-background">
        <CountdownSection />

        <div className="mx-auto h-px w-16 bg-gold/30" />
        
        {/* Aquí es donde pusimos el botón de WhatsApp y Maps */}
        <LogisticsSection />

        <InvitationFooter />
      </div>
    </main>
  )
}