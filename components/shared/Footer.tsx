import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaPhone,FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/router";
import { MdEmail } from "react-icons/md";
export function Footer() {
  const socialMediaLinks = [
    { path: <FaFacebookF size={20} /> },
    { path: <FaLinkedinIn size={20} /> },
    { path: <FaTwitter size={20} /> },
    { path: <FaYoutube size={20} /> },
  ];

  const quickLinks = [
    { path: "/", link: "Home" },
    { path: "/blog", link: "Blog" },
    { path: "/category", link: "Category" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact Us" },
  ];

  const router = useRouter();

  return (
    <footer className="w-full h-full p-5 lg:p-20 footer-backgound">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <ul className="flex flex-col justify-center items-center space-y-4 text-white">
            { quickLinks.map((qlink,index)=>(
              <li
                key={index}
              >
                <a href={qlink.path} className="relative inline-block max-w-max font-bold uppercase tracking-wider hover:text-[#dec08c] group">{qlink.link}</a></li>
            ))}
          </ul>

          <div className="footer-brand px-5 lg:px-[30px] py-[40px] bg-[#0E0C0B] bg-center bg-repeat" style={{ backgroundImage: "url('/footer-form-bg.png')" }}>
            <a href="#" className="flex justify-center items-center mb-5">
              <Image 
                src="/logo.png"
                width="160" 
                height="50" 
                loading="lazy" 
                alt="grilli home" 
              />
            </a>

            <div className="flex flex-col justify-center items-center">
              <p className="text-[#dec08c] font-bold mb-2 text-center text-2xl lg:text-4xl">Import and Export</p>

              <a href="mailto:furnituredesign@gmail.com" className="text-center text-[#dec08c] font-semibold mb-2 hover:text-yellow-400">importandexport@gmail.com</a>

              <p className="text-xl lg:text-3xl font-bold mb-5 text-[#dec08c] hover:text-yellow-400">Contact Us</p>

              <a href="tel:+251913701838" className="text-[#dec08c] mb-2 hover:text-yellow-400 font-semibold">+251934781038</a>

              <a href="tel:+251911591959" className="text-[#dec08c] mb-2 hover:text-yellow-400 font-semibold">+251924903478</a>
            </div>

            <div className="flex justify-center gap-1 mb-8">
              <div className="w-2 h-2 bg-[#F9B176] animate-spin"></div>
              <div className="w-2 h-2 bg-[#F9B176] animate-spin"></div>
              <div className="w-2 h-2 bg-[#F9B176] animate-spin"></div>
            </div>

          </div>

          <ul className="flex flex-col justify-center items-center space-y-4 text-white">
            <li>
              <a href="#" 
              className="relative inline-block max-w-max font-bold uppercase tracking-wider hover:text-[#dec08c] group">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" 
                className="relative inline-block max-w-max font-bold uppercase tracking-wider hover:text-[#dec08c] group">
                  Instagram
                </a>
              </li>
            <li>
              <a href="#" 
              className="relative inline-block max-w-max font-bold uppercase tracking-wider hover:text-[#dec08c] group">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" 
              className="relative inline-block max-w-max font-bold uppercase tracking-wider hover:text-[#dec08c] group">
                Telegram
              </a>
            </li>
            <li>
              <a href="#" 
              className="relative inline-block max-w-max font-bold uppercase tracking-wider hover:text-[#dec08c] group">
                Whats app
              </a>
            </li>

            <li>
              <a href="#" 
              className="relative inline-block max-w-max font-bold uppercase tracking-wider hover:text-[#dec08c] group">
                Google Map
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom text-white text-xl lg:text-2xl">
          <p className="text-center">
            ©2025 Import and Export. All rights reserved.
            <a 
              href="mailto:yafetaddisu123@gmail.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#dec08c] underline ml-2 font-bold"
            >
              Yafet Addisu
            </a>
          </p>
        </div>
      </div>
    </footer>

  );
}