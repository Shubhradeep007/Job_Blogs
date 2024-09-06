import Image from 'next/image'
import React from 'react'
import assets from '../assets/assets'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center" >
        <Image src={assets.logo} width={'180'} className='w-[130px] sw:w[auto]'/> {/* Image LOGO SRC Pending src={}  */} 
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started<Image src={assets.arrow}/>   </button> {/* Image LOGO SRC Pending src={}  */}
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest IT Job Updates</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quisquam quo nisi cupiditate et ea nam dolorem rerum architecto vero. Eum odio architecto sit debitis quia, amet laborum voluptatibus? Eveniet.</p>
        <form action="" className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black border border-black shadow-[-7px_7px_0px_#000000]'>
            <input type="email" placeholder='Enter your email' className='pl-4 outline-none' />
            <button type="submit" className='border-l border-black py-4 px-4 sm:px-8 active:bg-grey-600 active:text-white  '>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Header