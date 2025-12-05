'use client';
import { Geist, Inter } from 'next/font/google';

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

export default function Home() {
  return (
    <main>
      <div className='relative h-[650px] w-full'>
        <nav className='flex justify-between m-5'>
          <a href="/" className={`text-[24px] ${inter.className}`}>LocaLink™</a>
          <p className={`text-[24px] ${inter.className}`}>A+100</p>
        </nav>
        <div className={`flex-col text-center h-[90%] translate-y-[25%] ${geistSemibold.className}`}>
          <p className={`text-[128px] ${geistSemibold.className}`}>LocaLink</p>
          <p className={`text-[24px] text-[#757575] ${geist.className}`}>Find local product easily without having to</p>
          <p className={`text-[24px] text-[#757575] pb-15 ${geist.className}`}>search high and low.</p>
          <button className={`bg-black py-4 px-6 rounded-full text-[24px] text-white cursor-pointer ${geist.className}`}>
            Download now!
          </button>
        </div>
      </div>

      <div className={`text-[128px] text-center mt-[10%] ${geistSemibold.className}`}>
        <h1>Main Features</h1>
      </div>

      <div className='ml-[4%] mt-[5%] mockup-phone w-[368px] h-[720px]'>
        <div className='mockup-phone-camera'></div>
        <div className='mockup-phone-display'>
          <img src="https://raw.githubusercontent.com/bert093/Image-Repository/refs/heads/main/onboardingsceren1.webp" alt="Features 1"/>
        </div>
      </div>

      <div className='ml-[5%] mockup-phone w-[368px] h-[720px]'>
        <div className='mockup-phone-camera'></div>
        <div className='mockup-phone-display'>
          <img src="https://raw.githubusercontent.com/bert093/Image-Repository/refs/heads/main/onboardingscreen2.webp" alt="Features 1"/>
        </div>
      </div>

      <div className='ml-[5%] mockup-phone w-[368px] h-[720px]'>
        <div className='mockup-phone-camera'></div>
        <div className='mockup-phone-display'>
          <img src="https://raw.githubusercontent.com/bert093/Image-Repository/refs/heads/main/onboardingscreen3.webp" alt="Features 1"/>
        </div>
      </div>

      {/* News */}
      <div className={`mt-[15%] text-[40px] ${geist.className}`}>
        <p className='ml-10'>News</p>
        <hr className='border-black border w-[90%] mt-10'/>
        <div className={`flex justify-between ml-[3%] w-[86%] text-[24px] mt-20 mb-24 ${geist.className}`}>
          <p>Auth</p>
          <p>2025.12.2</p>
          <p>Fix login issue on google</p>
        </div>
        <hr className='border-black border w-[90%]'/>
        <div className={`flex justify-between ml-[3%] mt-20 w-[86%] text-[24px] ${geist.className}`}>
          <p>test</p>
          <p className='ml-93'>2025.11.2</p>
          <p className='ml-94'>Fix Onboarding and Sign in page always open if app start</p>
        </div>
      </div>

      {/* FOOTER */}
      <hr className='border-black border w-full mt-100'/>
      <div className='flex justify-between m-10'>
        <h1 className={`text-[280px] ${geistSemibold.className}`}>LK.</h1>
        <div className={`flex flex-col gap-4 translate-y-[25%] ${geist.className}`}>
          <a href="/pagesanimation">DEV + TESTING</a>
        </div>
        <div className={`flex flex-col gap-4 translate-y-[25%] ${geist.className}`}>
          <a href="/" className='text-[#999595] cursor-pointer'>INDEX</a>
          <a href="/aboutus">ABOUT US</a>
          <p className='cursor-pointer'>PRIVACY</p>
        </div>
        <div className={`flex flex-col gap-4 translate-y-[25%] ${geist.className}`}>
          <a href="https://www.youtube.com/@localinkid" target='_blank'>YOUTUBE</a>
          <a href="https://x.com/LocaLinkID?s=09" target='_blank'>TWITTER</a>
          <a href="https://www.facebook.com/profile.php?id=61584705024466&sk=about" target='_blank'>FACEBOOK</a>
          <a href="https://www.instagram.com/localink2025/" target='_blank'>INSTAGRAM</a>
          <a href="https://linktr.ee/LocaLinkID" target='_blank'>LINKTREE</a>
          <a href="#" target='_blank'>EMAIL</a>
        </div>
      </div>
    </main>
  );
}
