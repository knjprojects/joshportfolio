import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className=' w-screen h-screen relative'>
        <div className='flex items-center w-full h-full bg-cover bg-center bg-blog dark:bg-blog2 transition-background duration-500'></div>
        <h1 className="text-center text-black dark:text-white">Blog</h1>
        <p>I am going too add a gallery on my project showcase page to turn it into the sliding fading up gallery like casecobra</p>
        <p>https://www.youtube.com/watch?v=SG82Aqcaaa0 at 1:57</p>
    </div>
  )
}

export default Blog