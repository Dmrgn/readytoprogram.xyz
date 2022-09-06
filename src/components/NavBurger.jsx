import { useStore } from "@nanostores/preact";

import { isNavActive } from "../stores/MobileNav";

import "../styles/NavBurger.css";

export default function NavBurger() {
    const isActive = useStore(isNavActive);

    const toggleMobileNav = function() {
        isNavActive.set(!isActive);
    }

    return (
        <div onClick={toggleMobileNav} class={(isActive ? "active" : "") + " nav-burger px-4 mr-4 md:hidden"}></div>
    )
}