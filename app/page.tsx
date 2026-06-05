import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero'
import { AppPreviewSection } from '@/components/app-preview'
import { DownloadCard } from '@/components/download'
import { FeaturesSection } from '@/components/features'
import { ContactStrip } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AppPreviewSection />
      <DownloadCard />
      <ContactStrip />
      <Footer />
    </main>
  )
}
