import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ContactUsPage from "../../public/home_page/contact (1).jpg";
import ContactUsPage1 from "../../public/home_page/contact (2).jpg";
import ContactUsPage2 from "../../public/home_page/contact (3).jpg";

export default function ContactInformation() {
  const router = useRouter();
  const handleContact = () => {
    router.push(`/contact`);
  }; 
  return (
    <div className="md:py-28 py-8 gap-10 px-4 flex flex-col lg:flex-row text-black md:justify-center bg-[#dedee0] px-5 lg:px-20">
      <div className="z-50 flex flex-col w-full">
        <div className="w-full h-72 md:h-[200px] relative mb-5">
          <Image
            src={ContactUsPage}
            alt="Felipe Pelaquim Image"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="hidden md:flex w-full h-72 md:h-[400px] relative md:mr-2">
            <Image
              src={ContactUsPage1}
              alt="Felipe Pelaquim Image"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-lg"
            />
          </div>
          <div className="hidden md:flex w-full h-72 md:h-[400px] relative md:ml-2">
            <Image
              src={ContactUsPage2}
              alt="Felipe Pelaquim Image"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className={`flex flex-col justify-center items-center text-center font-semibold text-black text-left 
      w-full lg:w-1/2`}>
        <h1 className="text-2xl lg:text-5xl font-bold text-[#106156]">
          Get in Touch
        </h1>
        <ul className="text-center my-5">
          <p className="md:text-2xl text-lg font-bold mb-5">{`Bring Your Space to Life with Timeless Design`}</p>
          <p className="text-lg text-base font-semibold">
            {`Reach out today and let’s create furniture that reflects your style, enhances your space, and stands the 
            test of time.`}
          </p>
        </ul>
        <ul className="flex flex-col md:flex-row items-center justify-center md:text-lg text-base text-center my-1">
          <span className="font-bold">Phone : </span>
          <Link
            target="_blank"
            className="flex flex-row items-center gap-2 hover:text-gray-300"
            href={`tel:${+251934781038}`}
          >
            <p className="ml-3">+251934781038</p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-row items-center gap-2 hover:text-gray-300"
            href={`tel:${+251970338592}`}
          >
            <p className="ml-3">+251970338592</p>
          </Link>
        </ul>

        <ul className="flex flex-col md:flex-row items-center justify-center md:text-lg text-base text-center mt-1 mb-5">
          <span className="font-bold">Email : </span>
          <Link
            target="_blank"
            className="flex flex-row items-center gap-2 hover:text-gray-300"
            href="mailto:furnituredesign@gmail.com"
          >
            <p className="ml-3">furnituredesign@gmail.com</p>
          </Link>
        </ul>

        <div className="flex items-center justify-center mb-5">
          <Link href="/contact">
            <a className="bg-[#c74c49] text-white border border-transparent rounded-xl py-3 px-5 text-center font-bold">
              Chat With Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
