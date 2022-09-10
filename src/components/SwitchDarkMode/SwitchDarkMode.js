import React, { useEffect, useState } from "react";


const SwitchDarkMode = ({ className = "" }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            toDark();
        } else {
            toLight();
        }
    }, []);

    const toDark = () => {
        setIsDarkMode(true);
        const root = document.querySelector("html");
        if (!root) return;
        !root.classList.contains("dark") && root.classList.add("dark");
        localStorage.theme = "dark";
    };

    const toLight = () => {
        setIsDarkMode(false);
        const root = document.querySelector("html");
        if (!root) return;
        root.classList.remove("dark");
        localStorage.theme = "light";
    };

    function _toogleDarkMode() {
        if (localStorage.theme === "light") {
            toDark();
        } else {
            toLight();
        }
    }

    return (
        <button
            onClick={_toogleDarkMode}
            className={`text-2xl md:text-3xl w-6 h-6 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${className}`}
        >
            <span className="sr-only">Enable dark mode</span>
            {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" class="hidden w-6 h-6 dark:block" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                </svg>
            ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 dark:hidden" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                        <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
                        <path d="M19 11h2m-1 -1v2"></path>
                    </svg>
                )}
        </button>
    );
};

export default SwitchDarkMode;
