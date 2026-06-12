import React from 'react'
import YoutubeSearch from '@/components/YoutubeSearch'
type Props = {}
import Dashboard from '@/components/Dashboard'
const Page = (props: Props) => {
  return (
    <div className='w-full bg-slate-300 '>
      <YoutubeSearch/>
    </div>
  )
}

export default Page