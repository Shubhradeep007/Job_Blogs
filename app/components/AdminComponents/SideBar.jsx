import assets from '@/app/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100 '>
      <div className="px-2 sm:pl-14 py-3 border border-black ">
        <Image src={assets.logo} width={120} />
      </div>

      <div className="w-28 sm:w-80 h-[100vh] reletive py-12 border border-black">
       
          <Link href={'/admin/add-blogs'} className="flex item-center border border-black gap-3 font-medium px-3 py-2 bg-white">
            <Image src={assets.add} width={28} /> <p>Add Blogs</p>
          </Link>

          <Link href={'/admin/blog-list'} className="mt-5 flex item-center border border-black gap-3 font-medium px-3 py-2 bg-white">
            <Image src={assets.blog} width={28} /> <p>Blog List</p>
          </Link>

          <Link href={'/admin/subcription'} className="mt-5 flex item-center border border-black gap-3 font-medium px-3 py-2 bg-white">
            <Image src={assets.email} width={28} /> <p>Subscription</p>
          </Link>
        
      </div>
    </div>
  )
}

export default SideBar