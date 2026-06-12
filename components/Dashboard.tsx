"use client"

import GitHubRepos from "./GithubRepos"
import UserProfile from "./UserProfile"
import { exportPages } from "next/dist/export/worker"

const Dashboard=() =>{
    return (
        <div className="w-screen min-h-screen bg-black text-white flex flex-col inset-0">

        {/* TOP BAR */}
        <div className="w-full flex justify-between items-center p-4 border-b border-white/10">
            <h1 className="text-xl font-bold">Josh OS</h1>
            <UserProfile />
        </div>

        {/* MAIN GRID */}
        <div className="flex flex-1 gap-4 p-4">

            {/* LEFT: DATA SOURCES */}
            <div className="w-1/3 flex flex-col gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h2 className="font-semibold mb-2">GitHub Anayzer</h2>
                <GitHubRepos />
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h2 className="font-semibold mb-2">Cloud Uploads</h2>
                <p className="text-sm opacity-70">Upload system placeholder</p>
            </div>
            </div>

            {/* CENTER: AI / SEARCH */}
            <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10">
            <h2 className="font-semibold mb-2">AI Assistant</h2>
            <input
                placeholder="Ask something..."
                className="w-full p-3 rounded-lg bg-black border border-white/10"
            />
            </div>

            {/* RIGHT: QUICK ACTIONS */}
            <div className="w-1/4 p-4 rounded-xl bg-white/5 border border-white/10">
            <h2 className="font-semibold mb-2">Actions</h2>

            <button className="w-full p-2 rounded bg-purple-600 hover:bg-purple-500">
                Upload File
            </button>

            <button className="w-full mt-2 p-2 rounded bg-white/10">
                Refresh Data
            </button>
            </div>

        </div>
        </div>
    )
}
export default Dashboard