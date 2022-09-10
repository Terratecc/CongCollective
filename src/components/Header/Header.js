import { useState } from "react"
import logo from "../../assets/images/leaderbird-logo.png"
import SwitchDarkMode from "../SwitchDarkMode/SwitchDarkMode";

const Header = () => {
    const [showLeaderboardMenu, setShowLeaderboardMenu] = useState(false)
    const [showCommunityMenu, setShowCommunityMenu] = useState(false)
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    return (
        <div className="pt-4">
            <nav className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a className="flex-shrink-0" href="/">
                            <span className="sr-only">Leaderbird</span>
                            <img className="w-10 h-10 rounded-full" src={logo} alt="" />
                        </a>
                        <div className="flex items-center md:hidden">
                            <button onClick={() => setOpenMobileMenu(true)} type="button" className="inline-flex items-center justify-center p-2 text-white bg-pink-400 rounded-lg dark:bg-pink-500 hover:bg-pink-500 dark:hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 focus:ring-pink-500" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden ml-4 space-x-6 lg:space-x-8 md:flex lg:ml-10">
                        <div className="relative">
                            <button type="button" onClick={() => setShowLeaderboardMenu(!showLeaderboardMenu)} className="inline-flex items-center text-base font-semibold text-slate-500 dark:text-slate-200 hover:text-pink-400 dark:hover:text-pink-400 group focus:outline-none" aria-expanded="false">
                                <span>Leaderboards</span>
                                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>

                            {showLeaderboardMenu &&
                                <div className="absolute left-0 z-10 w-screen max-w-md mt-4 -ml-4 origin-top-right" >

                                    <div className="overflow-hidden rounded-lg shadow-md ring-1 ring-slate-200 dark:ring-slate-700 dark:bg-slate-900 focus:outline-none">
                                        <div className="relative grid gap-6 px-5 py-6 bg-white dark:bg-slate-800 dark:bg-opacity-50 sm:gap-8 sm:p-8">
                                            <a href="https://leaderbird.xyz" className="flex items-start p-3 -m-3 rounded-lg group">
                                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <line x1="8" y1="21" x2="16" y2="21"></line>
                                                        <line x1="12" y1="17" x2="12" y2="21"></line>
                                                        <line x1="7" y1="4" x2="17" y2="4"></line>
                                                        <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
                                                        <circle cx="5" cy="9" r="2"></circle>
                                                        <circle cx="19" cy="9" r="2"></circle>
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-base font-semibold text-slate-500 dark:text-slate-200 group-hover:text-pink-400 dark:group-hover:text-pink-400">Nesting</p>
                                                    <p className="mt-1 text-sm text-slate-500">See which Moonbirds have been nested the longest.</p>
                                                </div>
                                            </a>

                                            <a href="https://leaderbird.xyz/twitter" className="flex items-start p-3 -m-3 rounded-lg group">
                                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-base font-semibold text-slate-500 dark:text-slate-200 group-hover:text-pink-400 dark:group-hover:text-pink-400">Twitter</p>
                                                    <p className="mt-1 text-sm text-slate-500">Community members ranked by Twitter followers.</p>
                                                </div>
                                            </a>

                                            <a href="https://leaderbird.xyz/holders" className="flex items-start p-3 -m-3 rounded-lg group">
                                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <circle cx="9" cy="7" r="4"></circle>
                                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-base font-semibold text-slate-500 dark:text-slate-200 group-hover:text-pink-400 dark:group-hover:text-pink-400">Moonbirds Holders</p>
                                                    <p className="mt-1 text-sm text-slate-500">Community members ranked by the number of Moonbirds they hold.</p>
                                                </div>
                                            </a>

                                            <a href="https://leaderbird.xyz/oddities/holders" className="flex items-start p-3 -m-3 rounded-lg group">
                                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M9 9v-1a3 3 0 0 1 6 0v1"></path>
                                                        <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"></path>
                                                        <line x1="3" y1="13" x2="7" y2="13"></line>
                                                        <line x1="17" y1="13" x2="21" y2="13"></line>
                                                        <line x1="12" y1="20" x2="12" y2="14"></line>
                                                        <line x1="4" y1="19" x2="7.35" y2="17"></line>
                                                        <line x1="20" y1="19" x2="16.65" y2="17"></line>
                                                        <line x1="4" y1="7" x2="7.75" y2="9.4"></line>
                                                        <line x1="20" y1="7" x2="16.25" y2="9.4"></line>
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-base font-semibold text-slate-500 dark:text-slate-200 group-hover:text-pink-400 dark:group-hover:text-pink-400">Oddities Holders</p>
                                                    <p className="mt-1 text-sm text-slate-500">Community members ranked by the number of Oddities they hold.</p>
                                                </div>
                                            </a>

                                            <a href="https://leaderbird.xyz/collections" className="flex items-start p-3 -m-3 rounded-lg group">
                                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <rect x="7" y="3" width="14" height="14" rx="2"></rect>
                                                        <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-base font-semibold text-slate-500 dark:text-slate-200 group-hover:text-pink-400 dark:group-hover:text-pink-400">Collections</p>
                                                    <p className="mt-1 text-sm text-slate-500">Other NFT collections held by Moonbird holders.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="relative">
                            <button type="button" onClick={() => setShowCommunityMenu(!showCommunityMenu)} className="inline-flex items-center text-base font-semibold text-slate-500 dark:text-slate-200 hover:text-pink-400 dark:hover:text-pink-400 group focus:outline-none" aria-expanded="false">
                                <span>Community</span>
                                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            {showCommunityMenu &&
                                <div className="absolute left-0 z-10 w-screen max-w-md mt-4 -ml-4 origin-top-right" >

                                    <div className="overflow-hidden rounded-lg shadow-md ring-1 ring-slate-200 dark:ring-slate-700 dark:bg-slate-900 focus:outline-none">
                                        <div className="relative grid gap-6 px-5 py-6 bg-white dark:bg-slate-800 dark:bg-opacity-50 sm:gap-8 sm:p-8">

                                            <a href="https://leaderbird.xyz/parliaments" className="flex items-start p-3 -m-3 rounded-lg group">
                                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <circle cx="9" cy="12" r="1"></circle>
                                                        <circle cx="15" cy="12" r="1"></circle>
                                                        <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
                                                        <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                                                        <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
                                                        <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-base font-semibold text-slate-500 dark:text-slate-200 group-hover:text-pink-400 dark:group-hover:text-pink-400">Parliaments</p>
                                                    <p className="mt-1 text-sm text-slate-500">Find private Discord groups and DAO's that your Moonbirds gives you access to.</p>
                                                </div>
                                            </a>

                                            <a href="https://leaderbird.xyz/projects" className="flex items-start p-3 -m-3 rounded-lg group">
                                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <line x1="3" y1="21" x2="21" y2="21"></line>
                                                        <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
                                                        <line x1="5" y1="21" x2="5" y2="10.85"></line>
                                                        <line x1="19" y1="21" x2="19" y2="10.85"></line>
                                                        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="flex items-center space-x-2 text-base font-semibold text-slate-500 dark:text-slate-200 group-hover:text-pink-400 dark:group-hover:text-pink-400">
                                                        <span>Projects</span>
                                                        <span className="flex-grow-0 px-2.5 py-0.5 text-xs uppercase rounded-full bg-slate-100 text-gray-400 dark:bg-slate-700 dark:text-gray-400">New</span>
                                                    </p>
                                                    <p className="mt-1 text-sm text-slate-500">Projects created and/or run by community members.</p>
                                                </div>
                                            </a>

                                            <a href="https://leaderbird.xyz/new-members" className="flex items-start p-3 -m-3 rounded-lg group">
                                                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <circle cx="9" cy="7" r="4"></circle>
                                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                                        <path d="M16 11h6m-3 -3v6"></path>
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-base font-semibold text-slate-500 dark:text-slate-200 group-hover:text-pink-400 dark:group-hover:text-pink-400">New Members</p>
                                                    <p className="mt-1 text-sm text-slate-500">Discover and follow the newest Moonbirds community members.</p>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                        <a href="/stats" className="text-base font-semibold text-slate-500 dark:text-slate-200 hover:text-pink-400 dark:hover:text-pink-400">Stats</a>
                    </div>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-6">
                    <SwitchDarkMode />
                    <div>
                        <button type="button" className="space-x-0 btn-pink btn-pink-sm lg:space-x-1">
                            <svg className="hidden lg:inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                            </svg>
                            <span>Connect</span>
                        </button>
                    </div>
                </div>
            </nav>
            {/* MOBILE MENU */}
            {openMobileMenu &&
                <div class="absolute inset-x-0 top-0 z-50 m-2 transition origin-top transform rounded-lg dark:bg-slate-900 md:hidden">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-slate-800 dark:bg-opacity-50 ring-1 ring-slate-200 dark:ring-slate-700">
                        <div class="flex items-center justify-between px-5 pt-4">
                            <div>
                                <img class="w-auto h-10 rounded-full" src="/img/leaderbird-logo.png?v=2" alt="" />
                            </div>
                            <div class="-mr-2">
                                <button type="button" onClick={() => setOpenMobileMenu(false)} class="inline-flex items-center justify-center p-2 bg-white rounded-lg dark:bg-transparent text-slate-400 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-400 dark:focus:ring-slate-500">
                                    <span class="sr-only">Close menu</span>
                                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="pt-5 pb-6">
                            <div class="space-y-1">
                                <div class="space-y-4 divide-y divide-slate-200 dark:divide-slate-700">
                                    <div class="px-2 space-y-1">

                                        <a href="https://leaderbird.xyz" class="flex items-center block px-3 py-2 text-base font-medium rounded-lg text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:bg-opacity-50">
                                            <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                                    <line x1="7" y1="4" x2="17" y2="4"></line>
                                                    <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
                                                    <circle cx="5" cy="9" r="2"></circle>
                                                    <circle cx="19" cy="9" r="2"></circle>
                                                </svg>
                                            </div>
                                            <div class="ml-4">
                                                <p class="text-base font-semibold text-slate-500 dark:text-slate-200">Nesting Leaderboard</p>
                                            </div>
                                        </a>

                                        <a href="https://leaderbird.xyz/twitter" class="flex items-center block px-3 py-2 text-base font-medium rounded-lg text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:bg-opacity-50">
                                            <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                                                </svg>
                                            </div>
                                            <div class="ml-4">
                                                <p class="text-base font-semibold text-slate-500 dark:text-slate-200">Twitter Leaderboard</p>
                                            </div>
                                        </a>

                                        <a href="https://leaderbird.xyz/holders" class="flex items-center block px-3 py-2 text-base font-medium rounded-lg text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:bg-opacity-50">
                                            <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <circle cx="9" cy="7" r="4"></circle>
                                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                                </svg>
                                            </div>
                                            <div class="ml-4">
                                                <p class="text-base font-semibold text-slate-500 dark:text-slate-200">Moonbirds Holders</p>
                                            </div>
                                        </a>

                                        <a href="https://leaderbird.xyz/oddities/holders" class="flex items-center block px-3 py-2 text-base font-medium rounded-lg text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:bg-opacity-50">
                                            <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M9 9v-1a3 3 0 0 1 6 0v1"></path>
                                                    <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"></path>
                                                    <line x1="3" y1="13" x2="7" y2="13"></line>
                                                    <line x1="17" y1="13" x2="21" y2="13"></line>
                                                    <line x1="12" y1="20" x2="12" y2="14"></line>
                                                    <line x1="4" y1="19" x2="7.35" y2="17"></line>
                                                    <line x1="20" y1="19" x2="16.65" y2="17"></line>
                                                    <line x1="4" y1="7" x2="7.75" y2="9.4"></line>
                                                    <line x1="20" y1="7" x2="16.25" y2="9.4"></line>
                                                </svg>
                                            </div>
                                            <div class="ml-4">
                                                <p class="text-base font-semibold text-slate-500 dark:text-slate-200">Oddities Holders</p>
                                            </div>
                                        </a>

                                        <a href="https://leaderbird.xyz/collections" class="flex items-center block px-3 py-2 text-base font-medium rounded-lg text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:bg-opacity-50">
                                            <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-opacity-50 rounded-md text-slate-500 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 dark:bg-opacity-50 sm:h-12 sm:w-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <rect x="7" y="3" width="14" height="14" rx="2"></rect>
                                                    <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
                                                </svg>
                                            </div>
                                            <div class="ml-4">
                                                <p class="text-base font-semibold text-slate-500 dark:text-slate-200">Collections</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="px-2 pt-4 space-y-1">

                                        <a href="https://leaderbird.xyz/parliaments" class="block px-3 py-2 text-base font-medium rounded-lg text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:bg-opacity-50">Parliaments</a>

                                        <a href="https://leaderbird.xyz/projects" class="flex items-center px-3 py-2 space-x-2 text-base font-medium rounded-lg text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:bg-opacity-50">
                                            <span>Projects</span>
                                            <span class="flex-grow-0 px-2.5 py-0.5 text-xs uppercase rounded-full bg-slate-100 text-gray-400 dark:bg-slate-700 dark:text-gray-400">New</span>
                                        </a>

                                        <a href="https://leaderbird.xyz/new-members" class="block px-3 py-2 text-base font-medium rounded-lg text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:bg-opacity-50">New Members</a>

                                        <a href="https://leaderbird.xyz/stats" class="block px-3 py-2 text-base font-medium rounded-lg text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:bg-opacity-50">Stats</a>

                                        <button type="button" class="flex justify-between block w-full px-3 py-2 text-base font-medium rounded-lg text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:bg-opacity-50">
                                            <span>Switch Theme</span>


                                            <SwitchDarkMode />
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div class="px-2 px-5 mt-6">
                                <div>
                                    <button type="button" class="w-full btn-pink-sm btn-pink">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                                        </svg>
                                        <span>Connect Wallet</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header