import { Geist, Inter } from 'next/font/google';
import Image from 'next/image';
import Syahril from '../img/ourteam/Syahril.webp';
import Syahrul from '../img/ourteam/Syahrul.webp';
import Afriza from '../img/ourteam/Afriza.webp';
import Nelly from '../img/ourteam/Nelly.webp';

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
  return (
    <main>
      <div>
        <nav className={`flex justify-between m-5 text-[24px] ${inter.className}`}>
          <a href="/">LocaLink©</a>
          <p>A+100</p>
        </nav>
        <div className={`flex justify-center text-[128px] ${geistSemibold.className}`}>
          <p>Our Team</p>
        </div>
        <div className='grid grid-cols-2 mt-20 justify-items-center gap-10'>

          {/* 01 */}
          <div className='flex flex-col'>
            <Image
              src={Syahril}
              width='400'
              height='400'
              alt='Syahril Image'
            />
            <p className={`text-[28px] ${geist.className}`}>Syahril</p>
            <p className={`text-[20px] ${geistLight.className}`}>Web, Desktop, & Mobile Dev + Designer.</p>
            <p className={`text-[18px] text-gray-600 ${geist.className}`}>"If not you, who else?"</p>
          </div>

          {/* 02 */}
          <div className='flex flex-col'>
            <Image
              src={Syahrul}
              width='400'
              height='400'
              alt='Syahrul Image'
            />
            <p className={`text-[28px] ${geist.className}`}>Syahrul</p>
            <p className={`text-[20px] ${geistLight.className}`}>Designer type shit</p>
            <p className={`text-[18px] text-gray-600 ${geist.className}`}>"no?"</p>
          </div>

          {/* 03 */}
          <div className='flex flex-col'>
            {/* <p>Syahril</p> */}
            <Image
              src={Afriza}
              width='400'
              height='400'
              alt='Afriza Image'
            />
            <p className={`text-[28px] ${geist.className}`}>Afriza</p>
            <p className={`text-[20px] ${geistLight.className}`}>Software Engineer</p>
            <p className={`text-[18px] text-gray-600 ${geist.className}`}>"testing"</p>
          </div>

          {/* 04 */}
          <div className='flex flex-col'>
            <Image
              src={Nelly}
              width='400'
              height='400'
              alt='Nelly Image'
            />
            <p className={`text-[28px] ${geist.className}`}>Nelly</p>
            <p className={`text-[20px] ${geistLight.className}`}>test</p>
            <p className={`text-[18px] text-gray-600 ${geist.className}`}>"test"</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <hr className='border-black border w-full mt-100'/>
      <div className='flex justify-between m-10'>
        <h1 className={`text-[280px] ${geistSemibold.className}`}>LK.</h1>
        <div className={`flex flex-col gap-4 translate-y-[25%] ${geist.className}`}>
          <a href="/" className='cursor-pointer'>INDEX</a>
          <a href="/aboutus" className='text-[#999595] cursor-pointer'>ABOUT US</a>
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
