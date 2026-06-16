"use client"
import React, { useEffect, useState } from "react"
import ProjectCard from "@/components/ProjectCard"
import { getProjects } from "@/utils/sanity/queries"
import CloudinarySanityUpload from "@/components/CloudinarySanityUpload"
import { Project } from "@/typings"
import GoogleSignInButton from "@/components/FirebaseGoogleSignInButton"
import GithubLoginButton from "@/components/GithubLogInButton"
import UserProfile from "@/components/UserProfile"
import { useSession } from "next-auth/react";
import GoogleConnectButton from "@/components/GoogleConnectButton"

const Page = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const { data: session, status } = useSession();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects()
      //console.log(data)
      setProjects(data)
    }

    fetchData()
  }, [])

  return (
    <div className="flex bg-teal-600 flex-col items-center w-full h-full justify-center">
      <div className="flex flex-col w-64 h-auto bg-transparent justify-center mt-12">
       
        <CloudinarySanityUpload />
      </div>
      <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className="w-screen min-h-screen flex items-center justify-center bg-center bg-cover"
    >
      
        <div className="space-x-4 place-items-center gap-4 grid grid-cols-2 md:grid-cols-3 pb-4"> {
        
            projects?.map((project: Project, index) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                description={project.description}
                image={project.thumbnail}
                link={project.mediaUrl}
              />
            )) 
            }
          </div>
        </div>
      
      </div>

  )
}

export default Page