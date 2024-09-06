import Image from 'next/image'
import React from 'react'
// import { blogData } from '../assets/assets'
import Link from 'next/link'

const BlogItem = ({image, tittle, description, category, id}) => {
  return (
    <div className='max-w-[330px] sm:mx-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]  '>
      <Link href={`/blogs/${id}`}>
      <Image src={image}  width={400} height={400} className='border-b border-black'/>  {/* Image src misiing */}
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-small'> {category} </p> {/* Here have to display blog catagory */} 
      <div className="p-5">
<<<<<<< HEAD
        <h5 className='mb-2 text-lg font-medium tracking-tight text-grey-900'>{tittle}</h5> {/* Here have to add blog tittle */}
          <p className='mb-3 text-sm tracking-tight text-grey-700 '>{description}</p>{/* Here have to add blog Description */}
          <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center '>
            Read More <Image className='ml-2'  width={12}/> {/* add arrow icon  */}
=======
        <h5 className='mb-2 text-lg font-medium tracking-tight text-grey-900'>{blogData[0].tittle}</h5> {/* Here have to add blog tittle */}
          <p className='mb-3 text-sm tracking-tight text-grey-700 '>{blogData[0].description}</p>{/* Here have to add blog Description */}
          <div className='inline-flex items-center py-2 font-semibold text-center '>
            Read More More <Image className='ml-2'  width={12}/> {/* add arrow icon  */}
>>>>>>> cc5ee292923787bf27e49ed5bf48ee44c22b0687
            
          </Link>
      </div>
    </div>
  )
}

export default BlogItem
