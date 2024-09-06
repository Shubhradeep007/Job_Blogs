'use client'
import assets from '@/app/assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

    const[image, setImage] = useState(false);
    const[data, setData] = useState({
        tittle: "",
        description: "",
        category:"Fresher",
        author:"Shubhradeep Bose",
        authorImage:"/Authorimage.jpg"
    })

    const onChangeHandeler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
        console.log(data);
        
    }
    const onSubmitHandeler = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('tittle',data.tittle);
        formData.append('description',data.description);
        formData.append('category',data.category);
        formData.append('author',data.author);
        formData.append('authorImage',data.authorImage);
        formData.append('image',image);
        
        const response = await axios.post('/api/job-blog', formData);
        if(response.data.success){
            toast.success(response.data.msg)
            setImage(false)
            setData(
                {
                    tittle: "",
                    description: "",
                    category:"Fresher",
                    author:"Shubhradeep Bose",
                    authorImage:"/Authorimage.jpg"
                });
        }else{
            toast.error("Error")
        }
    }
    
  return (
    <>
        <form onSubmit={onSubmitHandeler}  className='pt-5 px-5 sm:pt-12 sm:pl-16 '>
            <p className='text-xl'>Upload Thumbnail</p>
            
            <label htmlFor="image">
                <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} />
                <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
            </label>
            
            <p className="text-xl mt-4 ">Blog Title: </p>
            <input name='tittle' onChange={onChangeHandeler} value={data.tittle} className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' type="text" placeholder='Type Here' required />
            
            <p className="text-xl mt-4 ">Blog Description: </p>
            <textarea name='description' onChange={onChangeHandeler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' type="text" placeholder='Write content here' required />

            <p className='text-xl mt-4'>Blog Category: </p>
            <select name="category"  onChange={onChangeHandeler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-grey-500'>
                <option value="Fresher">Fresher</option>
                <option value="Experienced">Experienced</option>
                <option value="More Than 5 years Experienced">More Than 5 years Experienced'</option>
            </select>
            <br />
            <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
        </form>
    </>
  )
}

export default page
