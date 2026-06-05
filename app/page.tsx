import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero'
import { AppPreviewSection } from '@/components/app-preview'
import { DownloadCard } from '@/components/download-card'
import { FeaturesSection } from '@/components/features'
import { ContactStrip } from '@/components/contact-strip'
import { Footer } from '@/components/footer'
import { FloatingButton } from '@/components/floating-button'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <HeroSection />
      <AppPreviewSection />
      <DownloadCard />
      <FeaturesSection />
      <ContactStrip />
      <Footer />
      <FloatingButton />
    </main>
  )
}
