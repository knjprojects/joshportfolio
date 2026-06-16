"use client";

import { useState } from "react";

   const Roadmap=()=> {
    const [goal, setGoal] = useState("");
    const [roadmap, setRoadmap] = useState("");

    async function generateRoadmap() {
        const res = await fetch("/api/learning-path", {
        method: "POST",
        body: JSON.stringify({ goal }),
        });

        const data = await res.json();

        setRoadmap(data.result);
    }

    return (
        <div>
        <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Learn Flutter"
        />

        <button onClick={generateRoadmap}>
            Generate
        </button>

        <pre>{roadmap}</pre>
        </div>
    );
}
export default Roadmap