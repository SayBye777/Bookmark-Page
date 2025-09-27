import BrowserSection from "./components/BrowserSection";
import FaqSection from "./components/FaqSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";
import SubscribeSection from "./components/SubscribeSection";
import TabSection from "./components/TabSection";

export default function Home() {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row justify-between items-center my-10 lg:w-4/5 mx-auto">
        <HeroContent/>
        <HeroImage/>
      </section>
      <div className="flex flex-col gap-10 lg:w-4/5 mx-auto">
        <FeaturesSection/>
        <TabSection/>
        <BrowserSection/>
        <FaqSection/>       
        
      </div>
      <SubscribeSection/>
      <Footer/>
    </>
  );
}
