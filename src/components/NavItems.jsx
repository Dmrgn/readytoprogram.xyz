import { useStore } from "@nanostores/preact";
import { isNavActive } from "../stores/MobileNav.js";

import DarkModeButton from "./DarkModeButton.jsx"

import "../styles/NavItems.css";

export default function NavItems() {
    const navItems = [
        {title: 'Home', link:"/"},
        {title: 'Guides', link:"/guides"},
        {title: 'Docs', link:"/docs"},
    ];
    const isActive = useStore(isNavActive);
    return (
        <>
            <div class={(isActive ? "flex" : "hidden") + " md:flex md:flex-row flex-col box relative z-10"}>
                {navItems.map(function (navItem) {
                    return (
                    <a class="flex items-center" href={navItem.link}>
                        <div class="nav-button">
                            {navItem.title}
                        </div>
                    </a>)
                })}
            </div>
            <div class={(isActive ? "" : "hidden") + " box md:ml-14 md:block"}>
                <DarkModeButton />
            </div>
        </>
    )
}