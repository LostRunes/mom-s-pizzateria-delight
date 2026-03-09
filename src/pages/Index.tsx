import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuCategories from "@/components/MenuCategories";
import FullMenu from "@/components/FullMenu";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Aurora from "@/components/Aurora";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent relative">
      <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
        <Aurora
          colorStops={["#ffa366", "#f55e47", "#ffe2db"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
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
