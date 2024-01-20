"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [open,setOpen] = useState(false)

  return (
    <div className=' overflow-x-hidden relative w-screen h-screen'>
      {open && (
        <div className=' top-[72px] md:hidden flex h-full z-40  left-0 bg-nav-menu bg-no-repeat bg-right-bottom bg-contain w-full bg-custom-300 fixed '>
          <div className='font-karla pt-10 justify-start h-full  space-y-7 items-center text-white w-full flex flex-col'>
            <Link onClick={()=>{setOpen(false)}} href={"/"}>
              HOW WE WOR
            </Link>
            <Link onClick={()=>{setOpen(false)}} href={"/"}>
              BLOG
            </Link>
            <Link onClick={()=>{setOpen(false)}} href={"/"}>
              ACCOUNT
            </Link>
            <button onClick={()=>{setOpen(false)}} className=' w-10/12 hover:bg-white hover:text-black text-white py-1 px-3 border-2 border-white'>
              VIEW PLANS
            </button>
          </div>
        </div>
      )}

      <div className=' bg-white px-6  md:px-10 lg:px-20   xl:px-40 py-5 w-full flex flex-row justify-between items-center'>
        <div>
          <Image
          src={"/images/logo.svg"}
          width={128}
          height={18}
          alt='logo'/>
        </div>
        <button onClick={()=>{setOpen(!open)}} className=' md:hidden flex'>
          <Image
          src= { !open ? "/images/icon-hamburger.svg" : "/images/icon-close.svg"}
          width={32}
          height={32}
          alt='menu'/>
        </button>
        <div className=' md:flex hidden z-30 font-karla justify-center items-center text-custom-400 space-x-5 flex-row'>
          <Link href={"/"}>
            HOW WE WOR
          </Link>
          <Link href={"/"}>
            BLOG
          </Link>
          <Link href={"/"}>
            ACCOUNT
          </Link>
          <button className=' hover:bg-black hover:text-white text-black py-1 px-3 border-2 border-black'>
            VIEW PLANS
          </button>
        </div>
        <Image 
        src={"/images/bg-pattern-intro-right-desktop.svg"}
        width={436}
        height={593}
        className=' md:flex hidden absolute top-[76px]  z-20 right-0 lg:w-[436px] lg:h-[593px] md:w-[356px] md:h-[513px] '
        alt='pattern-top-right'/>
        <Image 
        src={"/images/image-intro-desktop.jpg"}
        width={540}
        height={650}
        className='md:flex hidden  absolute xl:top-40 lg:top-60 md:top-64 z-10 md:right-20 lg:right-40 xl:h-[650px] xl:w-[540px] lg:h-[500px] lg:w-[390px] md:w-[350px] md:h-[460px]'
        alt='pattern-top-right'/>
        <Image 
        src={"/images/bg-pattern-intro-left-desktop.svg"}
        width={195}
        height={504}
        className='md:flex hidden  absolute md:top-[550px] lg:top-[490px] z-20 left-0 lg:w-[195px] lg:h-[504px] md:w-[145px] md:h-[454px]'
        alt='pattern-top-left'/>
      </div>  
      
      <div className=' w-full flex flex-col  justify-center bg-custom-100 md:h-[600px]'>
        <div>
          <Image
          src={"/images/image-intro-mobile.jpg"}
          width={375}
          height={451}
          className=' w-full md:hidden flex'
          alt='mobile'/>
        </div>
        <div className=' relative space-y-7 md:py-0 py-20 flex justify-center items-center flex-col w-full md:w-1/2'>
          <div className=' md:hidden flex'>
            <Image
            src={"/images/bg-pattern-intro-left-mobile.svg"}
            width={168}
            height={165}
            className='absolute top-0 left-0 '
            alt='left-mobile'/>
          </div>
          <div className=' md:hidden flex'>
            <Image
            src={"/images/bg-pattern-intro-right-mobile.svg"}
            width={124}
            height={330}
            className='absolute -bottom-44 right-0 '
            alt='right-mobile'/>
          </div>
          <div className=' hidden md:flex w-2/3 justify-start items-start'>
            <hr  className="w-48 h-[1px] bg-white border-0 rounded" />
          </div>
          <div className='  z-10 w-2/3 md:text-start text-center text-custom-500 text-5xl'>
            Humanizing your insurance.
          </div>
          <div className=' w-2/3 md:text-start text-center text-white font-karla'> 
            Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected
          </div>
          <div className=' w-2/3 flex justify-center items-center md:justify-start md:items-start'>
            <button className='  z-10 text-white py-1 px-3 border-2 border-white font-karla hover:bg-white hover:text-black'>
              VIEW PLANS
            </button>
          </div>
        </div>
        
      </div>
      <div className=' flex md:justify-start md:items-start justify-center items-center space-y-10 md:px-10 lg:px-20 xl:px-40 pt-40 md:pt-80 flex-col'>
        <div className=' flex w-2/3 md:justify-start md:items-start justify-center items-center'>
          <hr  className="w-48 h-[1px] bg-gray-700 border-0 rounded" />
        </div>
        <div className=' md:text-start text-center text-5xl'>
          We're different
        </div>
        <div className=' pt-10 space-y-5 md:space-y-0 space-x-0 md:space-x-5 flex flex-col md:flex-row'>
          <div className=' flex md:justify-start md:items-start justify-center items-center space-y-6 w-full md:w-1/3 flex-col'>
            <div>
              <Image
              src={"/images/icon-snappy-process.svg"}
              width={86}
              height={86}
              alt='snappy'/>
            </div>
            <div className=' text-2xl'>
              Snappy Process
            </div>
            <div className='md:px-0 px-5 text-center md:text-start text-custom-400 font-karla'>
              Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.
            </div>
          </div>
          <div className=' flex md:justify-start md:items-start justify-center items-center space-y-6 w-full md:w-1/3 flex-col'>
            <div>
              <Image
              src={"/images/icon-affordable-prices.svg"}
              width={86}
              height={86}
              alt='affordable'/>
            </div>
            <div className=' text-2xl'>
              Affordable Prices
            </div>
            <div className='md:px-0 px-5 text-center md:text-start text-custom-400 font-karla'>
              We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.
            </div>
          </div>
          <div className=' flex md:justify-start md:items-start justify-center items-center space-y-6 w-full md:w-1/3 flex-col'>
            <div>
              <Image
              src={"/images/icon-people-first.svg"}
              width={86}
              height={86}
              alt='snappy'/>
            </div>
            <div className=' text-2xl'>
              People First
            </div>
            <div className='md:px-0 px-5 text-center md:text-start text-custom-400 font-karla'>
              Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.
            </div>
          </div>
        </div>
      </div>
      <div className=' py-40 px-5 md:px-10 lg:px-16 xl:px-40'>
        <div className=' space-y-5 md:space-y-0 bg-how-we-work-mobile p-14 flex md:bg-how-we-work-desktop bg-no-repeat bg-right bg-custom-100 flex-col md:flex-row'>
          <div className=' md:text-start text-center text-4xl md:text-5xl w-full md:w-1/2 text-white '> 
            Find out more about how we work
          </div>
          <div className=' w-full md:w-1/2 justify-center items-center flex md:justify-end md:items-center'>
            <button className=' text-white py-1 px-3 border-2 border-white font-karla hover:bg-white hover:text-black'>
              How We Work
            </button>
          </div>
        </div>
      </div>
      <div className=' bg-custom-500 md:px-10 lg:px-20 xl:px-40 pb-20 bg-footer-desktop bg-no-repeat bg-left-top'>
        <div className=' space-y-10 md:space-y-0 pb-5 pt-10 flex flex-col md:flex-row justify-start md:justify-between'>
          <div className=' md:justify-normal md:items-start justify-center items-center flex'>
            <Image
            src={"/images/logo.svg"}
            width={128}
            height={18}
            alt='logo'/>
          </div>
          <div className=' md:justify-normal md:items-start justify-center items-center flex flex-row space-x-3'>
            <Link href={"/"}>
              <Image
              src={"/images/icon-facebook.svg"}
              width={24}
              height={24}
              alt='facebook'/>
            </Link>
            <Link href={"/"}>
              <Image
              src={"/images/icon-twitter.svg"}
              width={24}
              height={24}
              alt='twitter'/>
            </Link>
            <Link href={"/"}>
              <Image
              src={"/images/icon-pinterest.svg"}
              width={24}
              height={24}
              alt='pinterest'/>
            </Link>
            <Link href={"/"}>
              <Image
              src={"/images/icon-instagram.svg"}
              width={24}
              height={24}
              alt='instagram'/>
            </Link>
          </div>
        </div>
        <hr />
        <div className=' pt-10 space-y-10 md:space-y-0 flex flex-col md:flex-row'>
          <div className='font-karla flex flex-col w-full md:w-1/4 justify-center items-center md:justify-normal md:items-start'>
            <div className=' font-bold text-custom-400 '>
              OUR COMPANY 
            </div>
            <div className=' pt-10 flex flex-col space-y-3'>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                HOW WE WORK
              </Link>
              <Link className='  text-center md:text-start hover:underline font-bold' href={"/"}>
                WHY INSURE?
              </Link>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                VIEW PLANS
              </Link> 
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                REVIEWS
              </Link>
            </div>
          </div>
          <div className='font-karla flex flex-col w-full md:w-1/4 justify-center items-center md:justify-normal md:items-start'>
            <div className=' font-bold text-custom-400 '>
              HELP ME
            </div>
            <div className=' pt-10 flex flex-col space-y-3'>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                FAQ
              </Link>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                TERMS OF US
              </Link>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                PRIVACY POLICY
              </Link>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                COOKIES
              </Link>
            </div>
          </div>
          <div className='font-karla flex flex-col w-full md:w-1/4 justify-center items-center md:justify-normal md:items-start'>
            <div className=' font-bold text-custom-400 '>
              CONTACT
            </div>
            <div className=' pt-10 flex flex-col space-y-3'>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                SALES
              </Link>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                SUPPORT
              </Link>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                LIVE CHAT
              </Link>
            </div>
          </div>
          <div className='font-karla flex flex-col w-full md:w-1/4 justify-center items-center md:justify-normal md:items-start'>
            <div className=' font-bold text-custom-400 '>
              OTHERS
            </div>
            <div className=' pt-10 flex flex-col space-y-3'>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                CAREERS
              </Link>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                PRESS
              </Link>
              <Link className=' text-center md:text-start hover:underline font-bold' href={"/"}>
                LICENSES
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )}
    