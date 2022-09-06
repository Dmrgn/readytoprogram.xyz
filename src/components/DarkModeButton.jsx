import {useState, useEffect} from "preact/hooks"

export default function DarkModeButton() {
    // true for dark mode, false for light mode
    const [mode, setMode] = useState(() => {
        if (localStorage.getItem('darkMode')) {
            return localStorage.getItem('darkMode');
        }
        return 'light';
    });

    const toggleDarkMode = function () {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem("darkMode", newMode);
    }

    useEffect(()=>{
        const root = document.querySelector("html");
        if (mode === 'dark') 
            root.classList.add("dark");
        else
            root.classList.remove("dark");
    }, [mode])

    return (
        <button style="user-drag: none; user-select: none;" onClick={toggleDarkMode} class="p-4 transition hover:scale-125">
            <img class="dark:block hidden invert" src="https://img.icons8.com/ios-glyphs/40/000000/sun--v1.png"/>
            <img class="dark:hidden" src="https://img.icons8.com/external-gradak-royyan-wijaya/40/000000/external-dark-gradak-weather-solidarity-gradak-royyan-wijaya.png"/>
        </button>
    )
}