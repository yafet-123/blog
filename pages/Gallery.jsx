import React from "react";
import { MainHeader } from "../components/common/MainHeader";
import Hero from "../components/gallery/Hero.tsx";
import ImageGrid from "../components/gallery/ImageGrid.jsx";

import heroImage1 from '../public/hero/gallery/gallery (1).jpg';
import heroImage2 from '../public/hero/gallery/gallery (2).jpg';
import heroImage3 from '../public/hero/gallery/gallery (3).jpg';
import heroImage4 from '../public/hero/gallery/gallery (4).jpg';

const ImageGallery = () => {
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
    <React.Fragment>
      <MainHeader title="Import And Export: Our Gallery" />
      <div className="bg-[#dedee0]">
        <Hero
          title="Our Global Trade Gallery"
          description={`Welcome to our Gallery – a visual showcase of the quality, care, and scale behind our import and 
          export operations. From sourcing the finest goods to delivering globally, each image reflects our commitment 
          to excellence and international partnerships.`}
          style="lg:flex-row"
          HeroImages={HeroImages}
        />
        <ImageGrid />
      </div>
    </React.Fragment>
  );
};

export default ImageGallery;
