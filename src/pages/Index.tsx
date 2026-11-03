
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SurveySection from "@/components/SurveySection";
import VideoSection from "@/components/VideoSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useState } from "react";
import Loader from "../components/ui/Loader";
import "../components/ui/Loader.css";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <Loader onFinish={() => setShowContent(true)} />}
      <div className={`min-h-screen bg-black transition-opacity duration-500 ${!showContent ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Header isVisible={showContent} />
        <HeroSection />
        <SurveySection />
        <VideoSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
