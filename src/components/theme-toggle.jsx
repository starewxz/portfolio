import { useState } from "react";
import { Moon, Sun } from "./icons.jsx";

const ThemeToggle = () => {
    const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

    const toggle = () => {
        const next = !dark;
        const apply = () => {
            document.documentElement.classList.toggle("dark", next);
            document.documentElement.style.colorScheme = next ? "dark" : "light";
            setDark(next);
        };
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
            /* storage can be blocked — theme still applies for this session */
        }
        // Cross-fade the whole page where the browser supports it, otherwise just swap.
        const canAnimate =
            document.startViewTransition &&
            !document.hidden &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (canAnimate) {
            const transition = document.startViewTransition(apply);
            // The browser may abort a transition (e.g. the tab is backgrounded); the theme still applies.
            transition.ready.catch(() => {});
            transition.finished.catch(() => {});
            transition.updateCallbackDone.catch(() => {});
        } else {
            apply();
        }
    };

    return (
        <button className="icon-btn" onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
            <Sun className="sun" width="18" height="18" />
            <Moon className="moon" width="18" height="18" />
        </button>
    );
};

export default ThemeToggle;
