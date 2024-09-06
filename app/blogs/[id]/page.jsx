"use client"
import assets, { blogData } from '@/app/assets/assets'
import Footer from '@/app/components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const Page = ({ params }) => {

  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get('/api/job-blog', {
      params: {
        id: params.id
      }
    })

    setData(response.data);
        // for (let i = 0; i < blogData.length; i++) {
    //   if (Number(params.id) === blogData[i].id) {
    //     setData(blogData[i]);
    //     console.log(blogData[i]);
    //     break;

    //   }
    // } for local run
  }

  useEffect(() => {
    fetchBlogData();
  }, [])

  return (data ? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center" >
        <Link href='/'>
          <Image src={assets.logo} width={'180'} className='w-[130px] sw:w[auto]' /> {/* Image LOGO SRC Pending src={}  */}
        </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started<Image src={assets.arrow} />   </button> {/* Image LOGO SRC Pending src={}  */}
      </div>

      <div className="text-center my-24 ">
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.tittle}</h1>
        <Image src={data.authorImage} className='mx-auto mt-6 border border-white rounded-sull ' width={60} height={60} alt="" />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto ' >{data.author}</p>
      </div>
    </div>


    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 ">
      <Image className=' border-4 border-white' src={data.image} width={1280} height={720} alt='' />
      <h1 className='my-8 text-[26px] font-semibold '> Introduction:  </h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold '>Step 1: Refelting</h3>
      <p className='my-3'>Before you can mange your life style</p>
      <p className='my-3'>Before you can mange your life style</p>

      <h3 className='my-5 text-[18px] font-semibold '>Step 2: Refelting</h3>
      <p className='my-3'>Before you can mange your life style</p>
      <p className='my-3'>Before you can mange your life style</p>

      <h3 className='my-5 text-[18px] font-semibold '>Step 3: Refelting</h3>
      <p className='my-3'>Before you can mange your life style</p>
      <p className='my-3'>Before you can mange your life style</p>

      <div className="my-24">
        <p className='text-black font font-semibold my-4' > Share this artical on social media  </p>
        <div className='flex'>
          <Image src={assets.facebook} width={50} alt='' />
          <Image src={assets.twitter} width={50} alt='' />
          <Image src={assets.googleplus} width={50} alt='' />
        </div>
      </div>
    </div>
    <Footer />
  </> : <></>
  )
}

export default Page