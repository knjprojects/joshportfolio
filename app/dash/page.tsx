import React from 'react'
import YoutubeSearch from '@/components/YoutubeSearch'
type Props = {}
import Dashboard from '@/components/Dashboard'
import Roadmap from '@/components/Roadmap'
const Page = (props: Props) => {
  return (
<div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className='w-full bg-slate-300 h-screen'>
      <Roadmap />
      <YoutubeSearch/>
    </div>
      <section className="h-screen snap-start flex items-center justify-center bg-black text-white">
        Section 1
      </section>

      <section className="h-screen snap-start flex items-center justify-center bg-blue-500 text-white">
        Section 2
      </section>

      <section className="h-screen snap-start flex items-center justify-center bg-purple-500 text-white">
        Section 3
      </section>

    </div>
  )
}

   
 