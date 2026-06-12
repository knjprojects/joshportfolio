"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const GoogleConnectButton=() =>{
    const { data: session, status } = useSession();

    const switchAccount = async () => {
        await signOut({
        redirect: false,
        });

        await signIn("google", undefined, {
        prompt: "select_account",
        });
    };

    if (status === "loading") {
        return (
        <button
            disabled
            className="px-4 py-2 rounded-lg bg-gray-600 text-white"
        >
            Loading...
        </button>
        );
    }

    if (!session) {
        return (
        <button
            onClick={() =>
            signIn("google", undefined, {
                prompt: "select_account",
            })
            }
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all"
        >
            Connect Google Drive
        </button>
        );
    }

    return (
        <div className="justify-right flex flex-row gap-3 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md space-between">
        <div className="flex items-center gap-3 ">
            <Image
            src={
                session.user?.image ||
                "https://37assets.37signals.com/svn/765-default-avatar.png"
            } 
                    width={200}
                    height={120}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex flex-col">
            <p className="text-sm font-medium text-white">
                {session.user?.name}
            </p>

            <p className="text-xs text-purple-400">
                {session.user?.email}
            </p>
            </div>
        </div>

        <div className="flex gap-2 w-12">
            <button
            onClick={switchAccount}
            className="flex-1 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all"
            >
            Switch Account
            </button>

            
        </div>
        </div>
    );
}
export default GoogleConnectButton
/*"use client";

import { signIn, signOut, useSession } from "next-auth/react";
//add emai t test users in cud cnse audience, api keys and secrets and redirect and unauthried domains in clients
export default function GoogleConnectButton() {
    const { data: session } = useSession();

    if (!session) {
        return (
        <button
            onClick={() => signIn("google")}
            className="px-4 py-2 bg-blue-600 text-white rounded"
        >
            Connect Google Drive
        </button>
        );
    }
    return (
        <div className="flex gap-3 items-center">
        <span className="text-sm">
            {session.user?.email}
        </span>
        <button
            onClick={() => signOut()}
            className="px-3 py-1 bg-red-500 text-white rounded"
        >
            Disconnect
        </button>
        </div>
    );
}*/