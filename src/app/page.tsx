import WelcomeScreen from "./components/invitation/welcome-screen";
import { HeroSection } from "./components/invitation/hero-section"
import { CountdownSection } from "./components/invitation/countdown-section"
import { LogisticsSection } from "./components/invitation/logistics-section"

import { GallerySection } from "./components/invitation/gallery-section"
import { InvitationFooter } from "./components/invitation/invitation-footer"


export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      <WelcomeScreen />
     
      <HeroSection />

      <div className="bg-background">
        <CountdownSection />

        <div className="mx-auto h-px w-16 bg-gold/30" />
        <LogisticsSection />

     
        <InvitationFooter />
      </div>

    </main>
  )
}