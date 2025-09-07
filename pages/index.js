import { MainHeader } from "../components/common/MainHeader";
import AboutComponent from "../components/home/AboutComponent";
import CatalogueSection from "../components/home/CatalogueSection";
import CompanySection from "../components/home/CompanySection";
import ContactInformation from "../components/home/ContactInformation";
import {WhyChooseUs} from "../components/home/whychooseus";
import Gallery from "../components/home/Gallery";
import {TestimonialSection} from "../components/home/TestimonialSection";
import Hero from "../components/home/Hero";

import heroImage1 from '../public/hero/blog/hero (1).jpg';
import heroImage2 from '../public/hero/blog/hero (2).jpg';
import heroImage3 from '../public/hero/blog/hero (3).jpg';
import heroImage4 from '../public/hero/blog/hero (4).jpg';

export default function Home() {
  const HeroImages = [
    {
      id: 1,
      image: heroImage1,
    },
    {
      id: 2,
      image: heroImage2,
    },
    {
      id: 3,
      image: heroImage3,
    },
    {
      id: 4,
      image: heroImage4,
    },
  ];
  return (
    <div className="">
      <MainHeader title="Import And Export: Home" />
      <div className="bg-[#dedee0]">
        <Hero
          title="Connecting Markets, Empowering Trade"
          description={`At the heart of global commerce, we specialize in reliable import and export services that move 
          goods and build partnerships. From sourcing quality products to managing logistics and customs, we simplify 
          international trade and help businesses thrive across borders. With a commitment to excellence and integrity, 
          we deliver more than just products — we deliver opportunities.`}
          HeroImages={HeroImages}
          style="lg:flex-row"
        />
        <AboutComponent />
        <CatalogueSection />
        <WhyChooseUs />
        <Gallery />
        <TestimonialSection />
        <ContactInformation />
      </div>
    </div>
  );
}
