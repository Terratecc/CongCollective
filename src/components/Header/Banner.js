

const Banner = () => {
    return (
        <div className="px-4 py-1.5 w-full bg-gradient-to-r from-pink-400 to-sky-400 dark:from-pink-500 dark:to-sky-500">
            <a href="https://leaderbird.xyz/projects" className="text-white text-base font-medium flex items-center justify-center space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="3" y1="21" x2="21" y2="21"></line>
                    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
                    <line x1="5" y1="21" x2="5" y2="10.85"></line>
                    <line x1="19" y1="21" x2="19" y2="10.85"></line>
                    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                </svg>
                <span>Find the latest community projects <span className="underline underline-offset-2">here</span></span>
            </a>
        </div>
    )
}

export default Banner