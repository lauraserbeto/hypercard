import { Navbar } from "@/components/sections/navbar"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { CardShowcaseSection } from "@/components/sections/card-showcase"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { AppMobileSection } from "@/components/sections/app-mobile"
import { FAQSection } from "@/components/sections/faq"
import { PremiumFooter } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CardShowcaseSection />
      <TestimonialsSection />
      <AppMobileSection />
      <FAQSection />
      <PremiumFooter />
    </main>
  )
}
