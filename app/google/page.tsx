import GoogleConnectButton from "@/components/GoogleConnectButton";

export default function Page() {
    //the cde in the first div heps t keep the page cntent nn-hidden by the navbar and transitin
    return (

        <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <p className="text-green-500 text-2xl">Drive</p>
        <GoogleConnectButton/>
        </div>
    )
}