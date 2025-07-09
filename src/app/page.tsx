import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import AboutSection from '@/components/AboutSection/AboutSection';
import GallerySection from '@/components/GallerySection/GallerySection';
import CtaSection from '@/components/CtaSection/CtaSection';
import { Footer } from '@/components/Footer/Footer';

export default function HomePage() {
      return (
            <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-stone-900 to-neutral-800">
                  <Header />
                  <main className="mt-4 sm:mt-0">
                        <Hero />
                        <ServicesSection />
                        <AboutSection />
                        <GallerySection />
                        <CtaSection />
                  </main>
                  <Footer />
            </div>
      );
}