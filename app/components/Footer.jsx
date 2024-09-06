import Image from 'next/image'
import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo} alt='' width={50} />
        <p className='text-sm text-white '>All right reserved. Copyright @IZZON</p>
        <div className='flex'>
            <Image src={assets.facebook} width={40}/> {/* Social Media Icon */}
            <Image src={assets.twitter} width={40}/> {/* Social Media Icon */}
            <Image src={assets.googleplus} width={40}/> {/* Social Media Icon */}
        </div>
    </div>
  )
}

export default Footer