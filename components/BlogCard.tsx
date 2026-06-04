import React from 'react'
import Image from 'next/image'
type Blog = {
    title:string,image:string,description:string,link:string, date:string
}

const BlogCard = (blog:Blog) => {
  return (
    <div className="w-300 h-200 bg-slate-300">
        <div className="flex flex-col bg-white dark:bg-gray-800">
            <Image src={blog.image} alt= "blogimage" height={120} width={300} />
            <p>{blog.date}</p>
            <div className='flex flex-row '>
                <h1 className='flex flex-1'>{blog.title}</h1> <h2 className='flex flex-2'>{blog.link}</h2>
                <h3 className='p-4'>{blog.description}</h3>
            </div>
        </div>
    </div>
  )
}

export default BlogCard