'use client';
import { Geist, Inter } from 'next/font/google';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const geistLight = Geist({
  subsets: ['latin'],
  display: 'swap',
  weight: '300' // light
});

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  weight: '400' // normal
});

const geistSemibold = Geist({
  subsets: ['latin'],
  display: 'swap',
  weight: '600', // Semibold
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

const myCustomEase = gsap.parseEase("cubic-bezier(0.68, -0.6, 0.32, 1.6)"); 
const myCustomEnd = gsap.parseEase("cubic-bezier(0.65, 0, 0.35, 1");

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { opacity:1, duration: 1.5 } });
    tl.to("#homeanimate", { y: "+=90vh" })
    .to("#homeanimate", { y: "0"});
  });
  return (
    <main>
      <div id='homeanimate' className='bg-black h-full text-[300px] text-black'>
        Home
      </div>
      <div className={`text-8xl ${geist.className}`}>
        <p>Oh Hello, there. This page is for testing and experimental only. I'm trying to use gsap to animate this website. Looks cool right?</p>
      </div>
    </main>
  );
}