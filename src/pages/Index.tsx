import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuCategories from "@/components/MenuCategories";
import FullMenu from "@/components/FullMenu";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent relative">
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <MenuCategories />
      <FullMenu />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
