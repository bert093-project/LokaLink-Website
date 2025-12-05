'use client';
import { Geist, Inter } from 'next/font/google';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const geistLight = Geist({
  subsets: ['latin'],
  display: 'swap',
  weight: '300'
});

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

const geistSemibold = Geist({
  subsets: ['latin'],
  display: 'swap',
  weight: '600'
});

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
