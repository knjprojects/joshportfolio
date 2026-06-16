"use client"
import UserProfile from '@/components/UserProfile'
import React from 'react'
import { useSession } from "next-auth/react";
import GitHubRepos from '@/components/GithubRepos';
type Props = {}

const page = (props: Props) => {
  
  const { data: session, status } = useSession();
  return (
      <div className='flex flex-col items-center bg-gray-800 '>
      {/*<UserProfile />*/}
      <div className='m-4 flex space-between'> <GitHubRepos /></div>
     
    </div>
  )
}

export default page