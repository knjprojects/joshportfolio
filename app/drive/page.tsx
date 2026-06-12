"use client"
import GoogleConnectButton from '@/components/GoogleConnectButton'
import { useEffect, useState } from "react"
import DeleteDriveFileButton from '@/components/DeleteDriveFileButton'
type Props = {}
import { useSession } from "next-auth/react"
import Dashboard from '@/components/Dashboard'
import YoutubeSearch from '@/components/YoutubeSearch'




const Page = (props: Props) => {
    const [files, setFiles] = useState([])

    useEffect(() => {
        const getFiles = async () => {
        const res = await fetch("/api/drive/files")
        const data = await res.json()

        setFiles(data.files || [])
        }

        getFiles()
    }, [])
    const { data: session }:any = useSession()
    return (
        <div className='p-3 min-h-screen w-full bg-linear-to-r from-green-600 to-slate-200 items-center justify-center'>
                <div>
                    {/*cde starts here */}
                <p>{session?.user?.name}</p>
                
                    {/*} <Dashboard />*/}
                {/*<YoutubeSearch />*/}
                <GoogleConnectButton/>
                    
                <div className="p-10">
                <h1 className="text-2xl mb-6">
                    My Drive Files
                </h1>
            {files.map((file: any) => (
                <div
                    key={file.id}
                    className="p-3 border rounded-xl mb-3 flex justify-between items-center"
                >
                    <p>{file.name}</p>

                    <DeleteDriveFileButton
                    fileId={file.id}
                    accessToken={session?.accessToken}
                    onDelete={(deletedId) => {
                        setFiles((currentFiles) =>
                        currentFiles.filter(
                            (file:any) => file?.id !== deletedId
                        )
        )}} />
        </div>
        ))}
    </div>
    </div>
    </div>
    )
}

export default Page