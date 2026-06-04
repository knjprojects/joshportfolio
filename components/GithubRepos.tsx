/*import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/Toast";
import { motion } from "framer-motion";
import { theme } from "@/lib/constants";

type Repo = {
    id: number;
    name: string;
    description: string;
    language: string;
    stars: number;
    updatedAt: string;
    url: string;
    };

    const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
    };

    const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 18 },
    },
    };

    export default function GitHubRepos() {
    const { showToast } = useToast();
    const { data: session }: any = useSession();

    const [repos, setRepos] = useState<Repo[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
        if (!session?.accessToken) return;

        const res = await fetch("/api/github/repos", {
            headers: {
            Authorization: `Bearer ${session.accessToken}`,
            },
        });

        const data = await res.json();

        if (!res.ok || data?.message === "Bad credentials") {
            showToast("GitHub authentication failed", "error");
            setRepos([]);
            return;
        }

        setError(null);
        setRepos(data as Repo[]);
        };

        fetchRepos();
    }, [session]);

    return (
        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4"
        >
        {repos?.map((repo) => (
            <motion.a
            key={repo.id}
            variants={item}
            href={repo.url}
            target="_blank"
            className={`
                ${theme.repoCard}
                ${theme.repoCardHover}
            `}
            >
            <h2 className="text-white font-semibold text-lg">
                {repo.name}
            </h2>

            <p className="text-sm text-gray-300 mt-1">
                {repo.description || "No description"}
            </p>

            <div className="mt-3 flex gap-3 text-xs text-gray-400">
                <span>{repo.language}</span>
                <span>⭐ {repo.stars}</span>
            </div>
            </motion.a>
        ))}
        </motion.div>
    );
}*/
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/Toast";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/utils/lib/constants";

type Repo = {
    id: number;
    name: string;
    description: string;
    language: string;
    stars: number;
    updatedAt: string;
    url: string;
    };

    const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
    };

    const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 18 },
    },
    };

    export default function GitHubRepos() {
    const { showToast } = useToast();
    const { data: session }: any = useSession();

    const [repos, setRepos] = useState<Repo[]>([]);
    const [openRepoId, setOpenRepoId] = useState<number | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
        if (!session?.accessToken) return;

        const res = await fetch("/api/github/repos", {
            headers: {
            Authorization: `Bearer ${session.accessToken}`,
            },
        });

        const data = await res.json();

        if (!res.ok || data?.message === "Bad credentials") {
            showToast("GitHub authentication failed", "error");
            setRepos([]);
            return;
        }

        setRepos(data as Repo[]);
        };

        fetchRepos();
    }, [session]);

    return (
        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full sm:w-[90%] md:w-[48%] lg:w-[32%]"
        >
        {repos?.map((repo) => {
            const isOpen = openRepoId === repo.id;

            return (
            <motion.div
                key={repo.id}
                variants={item}
                onClick={() =>
                setOpenRepoId(isOpen ? null : repo.id)
                }
                className={`
                relative
                ${theme.card}
                ${theme.glass}
                 ${theme.glassHover}
                ${theme.hoverLift}
                p-5
                cursor-pointer
                `}
            >
                {/* TOP ROW */}
                <div className="flex justify-between items-start">
                {/* NAME */}
                <h2 className="text-blue-500 font-semibold text-lg">
                    {repo.name}
                </h2>

                {/* RATING */}
                <div className="text-yellow-400 text-sm font-medium">
                    ⭐ {repo.stars}
                </div>
                </div>

                {/* META */}
                <p className="text-xs text-gray-400 mt-1">
                {repo.language}
                </p>

                {/* DROPDOWN DESCRIPTION */}
                <AnimatePresence>
                {isOpen && (
                    <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 overflow-hidden text-sm text-gray-300"
                    >
                    <div className="pt-2 border-t border-white/10">
                        {repo.description || "No description provided"}
                    </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.div>
            );
        })}
        </motion.div>
    );
}
/*import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/Toast";

type Repo = {
    id: number;
    name: string;
    description: string;
    language: string;
    stars: number;
    updatedAt: string;
    url: string;
};
export default function GitHubRepos() {
    const { showToast } = useToast();
    const { data: session }:any = useSession();
    const [repos, setRepos]: any = useState([])
    const [error, setError] = useState<string | null>(null);
    
   
    //search and fiter
    const [search, setSearch] = useState("");
    const [language, setLanguage] = useState("all");
    const [sort, setSort] = useState<"stars" | "updated">("stars");
    useEffect(() => {
        const fetchRepos = async () => {
        if (!session?.accessToken) return;

        const res = await fetch("/api/github/repos", {
            headers: {
            Authorization: `Bearer ${session.accessToken}`,
            },
        });

        const data = await res.json();//this stps crashing when receiving bad redentias errr, make sure and gin first!
        if (!res.ok || data?.message === "Bad credentials") {
            showToast("GitHub authentication failed", "error");
            //toast.error("GitHub auth failed");
            //
            setRepos([]);
            return;
}

            setError(null);
            setRepos(data as Repo[]);
            //setRepos(data);
            //toast.success("Reps aded");
            console.log(repos)
        };

        fetchRepos();
    }, [session]);

    return (
        <div className="grid gap-3">
            {
                repos?.map((repo: Repo) => (
            <div key={repo.id} className="p-3 border rounded">
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            </div>
        ))}
        </div>
    );
}*/