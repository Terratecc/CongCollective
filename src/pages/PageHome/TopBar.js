

const TopBar = ({ view, setView }) => {
    console.log(view, "VIEW")
    return (
        <div class="pt-10 lg:pt-20 flex justify-between">
            <div class="md:mr-4 w-full md:max-w-xs lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-slate-400" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" class="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-transparent placeholder-slate-500 text-slate-900 dark:text-slate-50 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400 sm:text-sm" placeholder="Search" />
                </div>
            </div>

            <div class="hidden ml-auto md:block">
                <nav class="relative z-0 inline-flex rounded-lg md:-space-x-px" aria-label="Pagination">

                    <span class="w-20 md:w-auto relative inline-flex items-center justify-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-500 hover:bg-white dark:hover:bg-slate-800">
                        <span class="sr-only">Previous</span>

                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </span>




                    <span aria-current="page" class="hidden md:inline-flex z-10 bg-pink-50 dark:bg-slate-800 border-pink-400 dark:border-slate-600 text-pink-500 dark:text-slate-300 relative items-center px-4 py-2 border text-sm font-medium">1</span>
                    <button class="hidden md:inline-flex border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-white dark:hover:bg-slate-800 relative items-center px-4 py-2 border text-sm font-medium focus:z-20 focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400">2</button>
                    <button class="hidden md:inline-flex border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-white dark:hover:bg-slate-800 relative items-center px-4 py-2 border text-sm font-medium focus:z-20 focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400">3</button>
                    <button class="hidden md:inline-flex border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-white dark:hover:bg-slate-800 relative items-center px-4 py-2 border text-sm font-medium focus:z-20 focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400">4</button>

                    <span aria-disabled="true">
                        <span class="hidden md:inline-flex relative items-center px-4 py-2.5 border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-700"> ... </span>
                    </span>





                    <button class="hidden md:inline-flex border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-white dark:hover:bg-slate-800 relative items-center px-4 py-2 border text-sm font-medium focus:z-20 focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400">499</button>
                    <button class="hidden md:inline-flex border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-white dark:hover:bg-slate-800 relative items-center px-4 py-2 border text-sm font-medium focus:z-20 focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400">500</button>

                    <button class="w-20 md:w-auto relative inline-flex items-center justify-center px-2 py-2 rounded-r-md border border-l-0 md:border-l border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-500 hover:bg-white dark:hover:bg-slate-800 focus:z-20 focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400">
                        <span class="sr-only">Next</span>

                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </button>

                </nav>

            </div>


            <span class="ml-4 relative z-0 inline-flex">
                {view === "table" ? <button type="button" onClick={() => setView("table")} class="relative inline-flex items-center px-2 py-2 rounded-l-lg border border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 focus:z-20 focus:outline-none focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400 z-10 bg-pink-50 dark:bg-slate-800 border-pink-400 dark:border-slate-600 text-pink-500 dark:text-slate-300">
                    <span class="sr-only">Rows</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-rows" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                    </svg>
                </button> : <button type="button" onClick={() => setView("table")} class="relative inline-flex items-center px-2 py-2 rounded-l-lg border border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 focus:z-20 focus:outline-none focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400 ">
                        <span class="sr-only">Rows</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-rows" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                        </svg>
                    </button>}

                {view === "grid" ? <button type="button" onClick={() => setView("grid")} class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-lg border border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 focus:z-20 focus:outline-none focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400 z-10 bg-pink-50 dark:bg-slate-800 border-pink-400 dark:border-slate-600 text-pink-500 dark:text-slate-300">
                    <span class="sr-only">Grid</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                    </svg>
                </button> : <button type="button" onClick={() => setView("grid")} class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-lg border border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 focus:z-20 focus:outline-none focus:ring-1 focus:ring-pink-400 dark:focus:ring-slate-400 focus:border-pink-400 dark:focus:border-slate-400 ">
                        <span class="sr-only">Grid</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                            <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                            <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                            <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                        </svg>
                    </button>}

            </span>
        </div>
    )
}

export default TopBar