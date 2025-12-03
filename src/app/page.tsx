import { Android } from '@/components/ui/android';
import { Geist, Inter } from 'next/font/google';
import Image from 'next/image';

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
      <div className='relative h-[650px] w-full overflow-hidden'>
        <nav className='flex justify-between m-5'>
          <h1 className={`text-[24px] ${inter.className}`}>LokaLink™</h1>
          <p className={`text-[24px] ${inter.className}`}>A+100</p>
        </nav>
        <div className={`flex-col text-center justify-center h-[90%] translate-y-[25%] ${geistSemibold.className}`}>
          <p className={`text-[128px] ${geistSemibold.className}`}>LokaLink</p>
          <p className={`text-[24px] text-[#757575] ${geist.className}`}>Find local product easily without having to</p>
          <p className={`text-[24px] text-[#757575] pb-15 ${geist.className}`}>search high and low.</p>
          <button className={`bg-black py-2 px-4 rounded-full text-[24px] text-white cursor-pointer ${geist.className}`}>
            Download now!
          </button>
        </div>
      </div>

      <div className='relative'>
        <Android className='w-[400px] h-[700px]' src=''/>
      </div>
      {/* News */}
      <div className={`text-[40px] ${geist.className}`}>
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

      <div>
        <h1>Who we are!</h1>
      </div>

    </main>
  );
}
