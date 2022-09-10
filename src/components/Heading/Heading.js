import React, { HTMLAttributes, ReactNode } from "react";



const Heading = ({
    children,
    desc = "",
    className = "",
    isCenter = false,
    hasNextPrev = false,
    ...args
}) => {
    return (
        <div class="text-center">
            <p class="mt-1 text-4xl font-extrabold text-slate-900 dark:text-slate-50 sm:text-5xl sm:tracking-tight lg:text-6xl">Nesting Leaderboard</p>
            <p class="max-w-xl mt-5 mx-auto text-xl text-slate-500 dark:text-slate-400">See which Moonbirds have been nested the longest. Updated daily.</p>
        </div>
    );
};

export default Heading;
