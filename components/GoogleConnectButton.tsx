"use client";

import { signIn, signOut, useSession } from "next-auth/react";

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
            Connected as {session.user?.email}
        </span>
        <button
            onClick={() => signOut()}
            className="px-3 py-1 bg-red-500 text-white rounded"
        >
            Disconnect
        </button>
        </div>
    );
}