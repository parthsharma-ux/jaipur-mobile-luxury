import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedPhones from '@/components/FeaturedPhones';
import TrustSection from '@/components/TrustSection';
import StoreLocation from '@/components/StoreLocation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Globalworld Mobile - Jaipur's Most Trusted Mobile Store | iPhone & Android";
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <WhyChooseUs />
      <FeaturedPhones />
      <TrustSection />
      <StoreLocation />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
