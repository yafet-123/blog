import Hero from '../components/contactus/Hero';
import { MainHeader } from '../components/shared/MainHeader';
import ContactForm from '../components/contactus/ContactForm';
import { ContactUsLinks } from '../components/contactus/ContactUsLinks';
import { ContactUsSeciton } from '../components/contactus/ContactUsSection';
import Map from '../components/contactus/Map';

import heroImage1 from '../public/hero/contact/contact (1).jpg';
import heroImage2 from '../public/hero/contact/contact (2).jpg';
import heroImage3 from '../public/hero/contact/contact (3).jpg';

import { StaticImageData } from 'next/image';

export default function ContactUs() {
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
  ];
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title="Import And Export: Contact Us" />
      <div className="bg-[#dedee0]">
        <Hero
          title="Let’s Move Your Business Forward"
          description={`Whether you're an established business expanding into new markets or a startup navigating the 
          complexities of global trade, we're here to help. Our dedicated team provides personalized support, timely 
          communication, and expert guidance to ensure your shipments, sourcing, and logistics run smoothly. From 
          customs regulations to supply chain coordination, we’re with you every step of the way. 
          Reach out today and let’s build a reliable partnership that grows with your business.`}
          style="lg:flex-row-reverse"
          HeroImages={HeroImages}
        />
        <ContactUsLinks />
        <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-around items-center py-10 px-5">
          <ContactForm />
          <Map />
        </div>
      </div>
    </div>
  );
}
