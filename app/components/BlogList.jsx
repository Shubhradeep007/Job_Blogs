import React, { useEffect, useState } from 'react'
import { blogData } from '../assets/assets'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {

  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  
  const fetchBlogs = async () => {
    const response = await axios.get('/api/job-blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
    
  }

  useEffect(() => {
    fetchBlogs();
  },[])

  return (
    <div>
        <div className="flex justify-center gap-6 my-10 ">
            <button className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""} onClick={() => setMenu('All')}>All</button>
            <button onClick={() => setMenu('Fresher')} className={menu==="Fresher"?'bg-black text-white py-1 px-4 rounded-sm':""}>Fresher</button>
            <button onClick={() => setMenu('Experienced')} className={menu==="Experienced"?'bg-black text-white py-1 px-4 rounded-sm':""}>Experienced</button>
            <button onClick={() => setMenu('More Than 5 years Experienced')}className={menu==="More Than 5 years Experienced"?'bg-black text-white py-1 px-4 rounded-sm':""}>More Than 5 years Experienced</button>
        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 ">
            {blogs.filter((item) => menu==="All"?true:item.category===menu).map((item, index) => {
              return <BlogItem key={index} id={item._id} image={item.image} tittle={item.tittle} description={item.description} category={item.category}/>
            })}
        </div>
    </div>
  )
}

export default BlogList