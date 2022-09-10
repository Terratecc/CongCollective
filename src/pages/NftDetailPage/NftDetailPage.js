import React, { FC } from "react";


const NftDetailPage = () => {


    return (
        <div className="px-4 py-10 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <div className="md:flex md:space-x-8">
                <div className="md:w-1/2">
                    <div className="text-3xl font-bold md:hidden text-slate-900 dark:text-slate-50">Moonbird #8860</div>

                    <div className="mt-1 text-sm font-medium md:hidden text-slate-500">Owned by <a href="/harritee.eth" className="text-pink-400 hover:text-pink-500">harritee.eth</a></div>

                    <div className="relative">
                        <img src="https://cdn.leaderbird.xyz/images/moonbirds/8860/8860.png" className="mt-4 rounded-lg md:mt-0 bg-slate-100 dark:bg-slate-800" alt="" height="988px" width="988px" />
                        <div className="absolute m-2 top-1 left-1 bg-white bg-opacity-50 rounded-full text-xs sm:text-sm font-semibold text-slate-700 py-1 px-2.5 sm:px-3">2nd</div>
                    </div>
                </div>

                <div className="pt-6 md:pt-0 md:w-1/2">
                    <div className="hidden text-3xl font-bold md:block text-slate-900 dark:text-slate-50">Moonbird #8860</div>

                    <div className="hidden mt-1 text-sm font-medium md:block text-slate-500">Owned by <a href="/harritee.eth" className="text-pink-400 hover:text-pink-500">harritee.eth</a></div>

                    <div className="flex space-x-2 md:mt-4">
                        <a href="https://twitter.com/divergenceharri" target="_blank">
                            <span className="w-6 h-6">
                                <svg className="w-6 h-6" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M48 96C74.5097 96 96 74.5097 96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96Z" fill="#1D9BF0" />
                                    <path d="M72.3693 38.6257C72.4028 39.1106 72.4028 39.5954 72.4028 40.0848C72.4028 54.995 61.052 72.191 40.2966 72.191V72.1821C34.1653 72.191 28.1615 70.4348 23 67.1234C23.8915 67.2306 24.7875 67.2843 25.6858 67.2865C30.7668 67.291 35.7026 65.5861 39.7 62.4468C34.8714 62.3551 30.6372 59.2069 29.158 54.6107C30.8495 54.9369 32.5923 54.8699 34.2525 54.4163C28.9882 53.3527 25.2009 48.7275 25.2009 43.356C25.2009 43.3068 25.2009 43.2599 25.2009 43.213C26.7694 44.0866 28.5257 44.5715 30.3222 44.6251C25.364 41.3115 23.8357 34.7155 26.8298 29.5585C32.5588 36.608 41.0116 40.8936 50.0855 41.3472C49.1761 37.4281 50.4184 33.3212 53.35 30.5662C57.8948 26.294 65.0427 26.513 69.3148 31.0555C71.842 30.5573 74.2641 29.63 76.4806 28.3161C75.6382 30.9282 73.8753 33.1469 71.5202 34.5569C73.7569 34.2932 75.9421 33.6944 78 32.7805C76.4851 35.0507 74.5769 37.0281 72.3693 38.6257Z" fill="white" />
                                </svg></span></a>
                        <a href="https://opensea.io/assets/0x23581767a106ae21c074b2276d25e5c3e136a68b/8860" target="_blank">
                            <span>

                                <svg className="w-6 h-6" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z" fill="#2081E2" />
                                    <path d="M22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512Z" fill="white" />
                                    <path d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1304 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.949C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3023 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.0461 56.7435 35.655 57.7283 37.3934 57.7283H43.866V52.675H37.4673C37.1391 52.675 36.9449 52.2959 37.1345 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9713 50.8257 38.8358 49.4895 39.6958 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4758 44.3438 41.5497 44.1449C41.6746 43.7936 41.804 43.4653 41.8965 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4467 40.3723 42.4467 39.3459C42.4467 38.9437 42.4282 38.523 42.3912 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4573 32.864 41.3278 32.4618C40.9626 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7619 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2857 24.6437 38.1562 24.371 38.0268 24.112C37.9343 23.9132 37.8279 23.7283 37.754 23.5434L36.9634 22.0824C36.8524 21.8836 37.0374 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2294 23.0533 42.234 23.0533L42.8859 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0034 18 46.4089 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5204 25.0968 49.562 25.1153 49.599 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.3341 25.7071 50.5329 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7706 27.8107 52.9185 27.9587C53.723 28.7076 54.6245 29.5861 55.4845 30.557C55.7249 30.8297 55.9607 31.1071 56.2011 31.3984C56.4415 31.6943 56.6958 31.9856 56.9177 32.2769C57.209 32.6652 57.5233 33.0674 57.7961 33.4882C57.9256 33.687 58.0735 33.8904 58.1984 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4097 36.2529 59.5206 36.5257C59.8489 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.3621 39.0963 60.3806 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3436 42.2956C60.2742 42.6239 60.1818 42.9336 60.0708 43.2619C59.9598 43.5763 59.8489 43.9045 59.7056 44.2143C59.4282 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4388 46.5583 58.2908 46.7802C58.129 47.016 57.9626 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.172 48.2828C56.9732 48.5556 56.7697 48.8284 56.5478 49.0688C56.2381 49.434 55.9422 49.7808 55.6324 50.1137C55.4475 50.331 55.2487 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.4581 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0896 52.638 52.9925 52.675 52.8908 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2136 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1032 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z" fill="white" />
                                </svg>

                            </span>
                        </a>
                        <a href="https://looksrare.org/collections/0x23581767a106ae21c074b2276D25e5C3e136a68b/8860" target="_blank"><svg className="w-6 h-6" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="48" cy="48" r="48" fill="#0CE466"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 53.1888C42.5092 53.1888 38.054 48.738 38.054 43.2428C38.054 37.7476 42.5092 33.2969 48 33.2969C53.4907 33.2969 57.9459 37.7476 57.9459 43.2428C57.9459 48.738 53.4907 53.1888 48 53.1888ZM43.6756 43.2428C43.6756 45.632 45.6127 47.5671 48 47.5671C50.3872 47.5671 52.3243 45.632 52.3243 43.2428C52.3243 40.8536 50.3872 38.9185 48 38.9185C45.6127 38.9185 43.6756 40.8536 43.6756 43.2428Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 43.256L35.027 24.2158H60.9729L79.9999 43.256L48 75.2428L16 43.256ZM62.7026 36.3238C54.6182 28.2039 41.3817 28.2039 33.2973 36.3239L26.3784 43.2429L33.2973 50.1618C41.3817 58.2817 54.6182 58.2817 62.7026 50.1618L69.6215 43.2429L62.7026 36.3238Z" fill="black"/>
</svg>
</a>
                        <a href="https://x2y2.io/eth/0x23581767a106ae21c074b2276D25e5C3e136a68b/8860" target="_blank"><svg className="w-6 h-6" width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 320C0 496.731 143.269 640 320 640C496.731 640 640 496.731 640 320C640 143.269 496.731 0 320 0C143.269 0 0 143.269 0 320Z" fill="white"/>
<path d="M523.265 164.353C484.038 126.023 430.378 102.4 371.2 102.4C251.023 102.4 153.6 199.823 153.6 320C153.6 440.177 251.023 537.6 371.2 537.6C430.377 537.6 484.038 513.977 523.265 475.647C476.474 536.661 402.831 576 320 576C178.615 576 64 461.385 64 320C64 178.615 178.615 64 320 64C402.831 64 476.474 103.339 523.265 164.353Z" fill="url(#paint0_linear_504_54)"/>
<path d="M208.588 444.518C239.97 475.182 282.898 494.08 330.24 494.08C426.382 494.08 504.32 416.142 504.32 320C504.32 223.858 426.382 145.92 330.24 145.92C282.898 145.92 239.97 164.818 208.588 195.482C246.021 146.671 304.935 115.2 371.2 115.2C484.308 115.2 576 206.892 576 320C576 433.108 484.308 524.8 371.2 524.8C304.935 524.8 246.021 493.329 208.588 444.518Z" fill="url(#paint1_linear_504_54)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M473.6 320C473.6 404.831 404.831 473.6 320 473.6C235.169 473.6 166.4 404.831 166.4 320C166.4 235.169 235.169 166.4 320 166.4C404.831 166.4 473.6 235.169 473.6 320ZM422.4 320C422.4 376.554 376.554 422.4 320 422.4C263.446 422.4 217.6 376.554 217.6 320C217.6 263.446 263.446 217.6 320 217.6C376.554 217.6 422.4 263.446 422.4 320Z" fill="url(#paint2_linear_504_54)"/>
<defs>
<linearGradient id="paint0_linear_504_54" x1="64" y1="311.172" x2="576" y2="311.172" gradientUnits="userSpaceOnUse">
<stop stop-color="#00E0FF"/>
<stop offset="1" stop-color="#562EC8"/>
</linearGradient>
<linearGradient id="paint1_linear_504_54" x1="63.9998" y1="311.172" x2="576" y2="311.172" gradientUnits="userSpaceOnUse">
<stop stop-color="#00E0FF"/>
<stop offset="1" stop-color="#562EC8"/>
</linearGradient>
<linearGradient id="paint2_linear_504_54" x1="64.0008" y1="311.172" x2="576" y2="311.172" gradientUnits="userSpaceOnUse">
<stop stop-color="#00E0FF"/>
<stop offset="1" stop-color="#562EC8"/>
</linearGradient>
</defs>
</svg>
</a>
                    </div>

                    <div className="py-5">
                        <dl className="grid grid-cols-1 grid-cols-2 gap-x-4 gap-y-8">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-slate-500">Nesting</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">Yes</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-slate-500">Current Nest</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">Silver</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-slate-500">Total Nesting Time</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">139 days, 18 hrs, 33 mins</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-slate-500">Longest Streak</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">139 days, 18 hrs, 33 mins</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-slate-500">Current Streak</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">139 days, 18 hrs, 33 mins</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-slate-500">Gold Nest In</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">40 days, 5 hrs, 26 mins</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="py-5">
                        <div className="text-xl font-semibold text-slate-900 dark:text-slate-200">Properties</div>

                        <dl className="grid grid-cols-1 grid-cols-2 mt-5 gap-x-4 gap-y-4 lg:grid-cols-3">
                            <a href="https://leaderbird.xyz/trait/beak/short" className="bg-slate-50 dark:bg-slate-800 sm:col-span-1 py-4 px-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-pink-400 dark:hover:ring-slate-500 dark:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">

                                <dt className="text-sm font-medium text-slate-500">Beak</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">Short</dd>
                            </a>
                            <a href="https://leaderbird.xyz/trait/background/blue" className="bg-slate-50 dark:bg-slate-800 sm:col-span-1 py-4 px-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-pink-400 dark:hover:ring-slate-500 dark:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">

                                <dt className="text-sm font-medium text-slate-500">Background</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">Blue</dd>
                            </a>
                            <a href="https://leaderbird.xyz/trait/eyes/angry" className="bg-slate-50 dark:bg-slate-800 sm:col-span-1 py-4 px-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-pink-400 dark:hover:ring-slate-500 dark:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">

                                <dt className="text-sm font-medium text-slate-500">Eyes</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">Angry</dd>
                            </a>
                            <a href="https://leaderbird.xyz/trait/feathers/gray" className="bg-slate-50 dark:bg-slate-800 sm:col-span-1 py-4 px-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-pink-400 dark:hover:ring-slate-500 dark:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">

                                <dt className="text-sm font-medium text-slate-500">Feathers</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">Gray</dd>
                            </a>
                            <a href="https://leaderbird.xyz/trait/body/crescent" className="bg-slate-50 dark:bg-slate-800 sm:col-span-1 py-4 px-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-pink-400 dark:hover:ring-slate-500 dark:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">

                                <dt className="text-sm font-medium text-slate-500">Body</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">Crescent</dd>
                            </a>
                            <a href="https://leaderbird.xyz/trait/eyewear/monocle" className="bg-slate-50 dark:bg-slate-800 sm:col-span-1 py-4 px-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-pink-400 dark:hover:ring-slate-500 dark:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">

                                <dt className="text-sm font-medium text-slate-500">Eyewear</dt>
                                <dd className="mt-1 text-sm text-slate-900 dark:text-slate-50">Monocle</dd>
                            </a>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="pt-12 sm:pt-16">
                <div className="text-2xl font-semibold text-slate-900 dark:text-slate-200">
                    Comments (0)
            </div>
                <div className="mt-5 border rounded-lg border-slate-200 dark:border-slate-700 sm:rounded-lg sm:overflow-hidden">
                    <div className="px-4 pt-6 sm:px-6 text-slate-500 text-base font-medium">
                        There are no comments yet.
                                Connect to comment.
                </div>



                    <div className="px-4 py-6 sm:px-6 text-slate-500 text-base font-medium flex space-x-3 items-center">
                        <div>
                        <button type="button" className="space-x-0 btn-pink-sm lg:space-x-1 btn-pink">
                            <svg class="hidden lg:inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
                            </svg>
                            <span>Connect</span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 sm:py-16">
                <a className="text-2xl font-semibold text-slate-900 dark:text-slate-50 hover:text-pink-400 dark:hover:text-pink-400" href="https://leaderbird.xyz/gang/angry-blue-and-gray-crescent">
                    #angry-blue-and-gray-crescent-gang (18)
            </a>

                <dl className="grid grid-cols-1 grid-cols-2 mt-5 gap-x-4 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    <a href="https://leaderbird.xyz/moonbird/671" className="relative rounded-lg overflow-hidden group">
                        <div className="rounded-lg overflow-hidden relative z-0">
                            <img className="rounded-lg bg-slate-100 dark:bg-slate-800 transition-transform ease-in duration-200 group-hover:scale-[1.07]" src="https://cdn.leaderbird.xyz/images/moonbirds/671/671.png" alt="" height="988px" width="988px" />
                        </div>
                        <div className="absolute m-2 top-0 left-0 bg-white bg-opacity-50 rounded-full text-xs font-semibold text-slate-700 py-1 px-2.5">6,247th</div>

                        <div className="pt-2 space-y-2 flex flex-col justify-between ">
                            <div className="flex items-center justify-between">
                                <div className="text-slate-900 dark:text-slate-200 text-sm font-semibold group-hover:text-pink-400">Moonbird #671</div>
                                <div className="text-slate-500 text-xs font-medium">Silver</div>
                            </div>

                            <div className="truncate relative bg-slate-200 dark:bg-slate-800 p-2 rounded-lg overflow-hidden text-slate-700 dark:text-slate-300 text-xs font-medium">
                                138 days, 23 hrs, 19 mins
                <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 rounded-l-lg" style={{ width: "77.206404320988%" }}></div>
                                <div className="absolute inset-0 p-2 z-10 truncate">138 days, 23 hrs, 19 mins</div>
                            </div>
                        </div>
                    </a>
                    <a href="https://leaderbird.xyz/moonbird/722" className="relative rounded-lg overflow-hidden group">
                        <div className="rounded-lg overflow-hidden relative z-0">
                            <img className="rounded-lg bg-slate-100 dark:bg-slate-800 transition-transform ease-in duration-200 group-hover:scale-[1.07]" src="https://cdn.leaderbird.xyz/images/moonbirds/722/722.png" alt="" height="988px" width="988px" />
                        </div>
                        <div className="absolute m-2 top-0 left-0 bg-white bg-opacity-50 rounded-full text-xs font-semibold text-slate-700 py-1 px-2.5">2,090th</div>

                        <div className="pt-2 space-y-2 flex flex-col justify-between ">
                            <div className="flex items-center justify-between">
                                <div className="text-slate-900 dark:text-slate-200 text-sm font-semibold group-hover:text-pink-400">Moonbird #722</div>
                                <div className="text-slate-500 text-xs font-medium">Silver</div>
                            </div>

                            <div className="truncate relative bg-slate-200 dark:bg-slate-800 p-2 rounded-lg overflow-hidden text-slate-700 dark:text-slate-300 text-xs font-medium">
                                139 days, 17 hrs, 36 mins
                <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 rounded-l-lg" style={{ width: "77.629861111111%" }}></div>
                                <div className="absolute inset-0 p-2 z-10 truncate">139 days, 17 hrs, 36 mins</div>
                            </div>
                        </div>
                    </a>
                    <a href="https://leaderbird.xyz/moonbird/1039" className="relative rounded-lg overflow-hidden group">
                        <div className="rounded-lg overflow-hidden relative z-0">
                            <img className="rounded-lg bg-slate-100 dark:bg-slate-800 transition-transform ease-in duration-200 group-hover:scale-[1.07]" src="https://cdn.leaderbird.xyz/images/moonbirds/1039/1039.png" alt="" height="988px" width="988px" />
                        </div>
                        <div className="absolute m-2 top-0 left-0 bg-white bg-opacity-50 rounded-full text-xs font-semibold text-slate-700 py-1 px-2.5">1,896th</div>

                        <div className="pt-2 space-y-2 flex flex-col justify-between ">
                            <div className="flex items-center justify-between">
                                <div className="text-slate-900 dark:text-slate-200 text-sm font-semibold group-hover:text-pink-400">Moonbird #1039</div>
                                <div className="text-slate-500 text-xs font-medium">Silver</div>
                            </div>

                            <div className="truncate relative bg-slate-200 dark:bg-slate-800 p-2 rounded-lg overflow-hidden text-slate-700 dark:text-slate-300 text-xs font-medium">
                                139 days, 17 hrs, 45 mins
                <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 rounded-l-lg" style={{ width: "77.633166152263%" }}></div>
                                <div className="absolute inset-0 p-2 z-10 truncate">139 days, 17 hrs, 45 mins</div>
                            </div>
                        </div>
                    </a>
                    <a href="https://leaderbird.xyz/moonbird/1499" className="relative rounded-lg overflow-hidden group">
                        <div className="rounded-lg overflow-hidden relative z-0">
                            <img className="rounded-lg bg-slate-100 dark:bg-slate-800 transition-transform ease-in duration-200 group-hover:scale-[1.07]" src="https://cdn.leaderbird.xyz/images/moonbirds/1499/1499.png" alt="" height="988px" width="988px" />
                        </div>
                        <div className="absolute m-2 top-0 left-0 bg-white bg-opacity-50 rounded-full text-xs font-semibold text-slate-700 py-1 px-2.5">1,795th</div>

                        <div className="pt-2 space-y-2 flex flex-col justify-between ">
                            <div className="flex items-center justify-between">
                                <div className="text-slate-900 dark:text-slate-200 text-sm font-semibold group-hover:text-pink-400">Moonbird #1499</div>
                                <div className="text-slate-500 text-xs font-medium">Silver</div>
                            </div>

                            <div className="truncate relative bg-slate-200 dark:bg-slate-800 p-2 rounded-lg overflow-hidden text-slate-700 dark:text-slate-300 text-xs font-medium">
                                139 days, 17 hrs, 47 mins
                <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 rounded-l-lg" style={{ width: "77.633957047325%" }}></div>
                                <div className="absolute inset-0 p-2 z-10 truncate">139 days, 17 hrs, 47 mins</div>
                            </div>
                        </div>
                    </a>
                    <a href="https://leaderbird.xyz/moonbird/2934" className="relative rounded-lg overflow-hidden group">
                        <div className="rounded-lg overflow-hidden relative z-0">
                            <img className="rounded-lg bg-slate-100 dark:bg-slate-800 transition-transform ease-in duration-200 group-hover:scale-[1.07]" src="https://cdn.leaderbird.xyz/images/moonbirds/2934/2934.png" alt="" height="988px" width="988px" />
                        </div>
                        <div className="absolute m-2 top-0 left-0 bg-white bg-opacity-50 rounded-full text-xs font-semibold text-slate-700 py-1 px-2.5">3,128th</div>

                        <div className="pt-2 space-y-2 flex flex-col justify-between ">
                            <div className="flex items-center justify-between">
                                <div className="text-slate-900 dark:text-slate-200 text-sm font-semibold group-hover:text-pink-400">Moonbird #2934</div>
                                <div className="text-slate-500 text-xs font-medium">Silver</div>
                            </div>

                            <div className="truncate relative bg-slate-200 dark:bg-slate-800 p-2 rounded-lg overflow-hidden text-slate-700 dark:text-slate-300 text-xs font-medium">
                                137 days, 5 hrs, 28 mins
                <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 rounded-l-lg" style={{ width: "76.237937242798%" }}></div>
                                <div className="absolute inset-0 p-2 z-10 truncate">137 days, 5 hrs, 28 mins</div>
                            </div>
                        </div>
                    </a>
                    <a href="https://leaderbird.xyz/moonbird/3419" className="relative rounded-lg overflow-hidden group">
                        <div className="rounded-lg overflow-hidden relative z-0">
                            <img className="rounded-lg bg-slate-100 dark:bg-slate-800 transition-transform ease-in duration-200 group-hover:scale-[1.07]" src="https://cdn.leaderbird.xyz/images/moonbirds/3419/3419.png" alt="" height="988px" width="988px" />
                        </div>
                        <div className="absolute m-2 top-0 left-0 bg-white bg-opacity-50 rounded-full text-xs font-semibold text-slate-700 py-1 px-2.5">429th</div>

                        <div className="pt-2 space-y-2 flex flex-col justify-between ">
                            <div className="flex items-center justify-between">
                                <div className="text-slate-900 dark:text-slate-200 text-sm font-semibold group-hover:text-pink-400">Moonbird #3419</div>
                                <div className="text-slate-500 text-xs font-medium">Silver</div>
                            </div>

                            <div className="truncate relative bg-slate-200 dark:bg-slate-800 p-2 rounded-lg overflow-hidden text-slate-700 dark:text-slate-300 text-xs font-medium">
                                139 days, 18 hrs, 15 mins
                <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 rounded-l-lg" style={{ width: "77.645023148148%" }}></div>
                                <div className="absolute inset-0 p-2 z-10 truncate">139 days, 18 hrs, 15 mins</div>
                            </div>
                        </div>
                    </a>
                </dl>
            </div>
        </div>

    );
};

export default NftDetailPage;
