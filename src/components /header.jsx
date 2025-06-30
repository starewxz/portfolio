import { useState, useEffect } from "react";
import Navigators from "./navigators.jsx";
import Switch from "./theme-switch.jsx";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={`w-full z-50 fixed top-0 left-0 flex items-center justify-between px-4 py-4 transition-colors duration-300
          ${
                    scrolled
                        ? "bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/30 dark:border-gray-700 rounded-xl shadow-lg"
                        : "bg-transparent"
                }
          `}
                style={{ transitionProperty: "background-color, border-radius, box-shadow" }}
            >
                <h1
                    className={`text-white text-xl sm:text-3xl md:text-4xl font-bold animate-slide-in-left-delay ml-2 sm:ml-12
            ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
                >
                    Port
                    <span className="text-cyan-400 text-base sm:text-2xl">folio</span>
                </h1>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Navigators
                        onNavigate={() => {
                            setTimeout(() => {
                                setIsMobileMenuOpen(false);
                            }, 400);
                        }}
                    />
                </nav>

                {/* Desktop theme switch */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="animate-slide-in-top">
                        <Switch />
                    </div>
                </div>

                {/* Hamburger icon with glassmorphism */}
                <button
                    className={`md:hidden relative flex flex-col justify-center items-center gap-1 w-12 h-12 cursor-pointer focus:outline-none z-60 rounded-xl
              bg-white/10 backdrop-blur-sm border border-white/20 shadow-md
              transition-colors duration-300
              ${
                        isMobileMenuOpen
                            ? "bg-cyan-400/30 border-cyan-400 shadow-cyan-400/50"
                            : "hover:bg-white/20 hover:border-white/30 hover:shadow-cyan-400/40"
                    }
            `}
                    aria-label="Toggle menu"
                    onClick={toggleMobileMenu}
                >
          <span
              className={`hamburger-bar block h-1 w-7 rounded transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2.5 bg-cyan-400" : "bg-white"
              }`}
          />
                    <span
                        className={`hamburger-bar block h-1 w-7 rounded transition-opacity duration-300 ease-in-out ${
                            isMobileMenuOpen ? "opacity-0" : "opacity-100 bg-white"
                        }`}
                    />
                    <span
                        className={`hamburger-bar block h-1 w-7 rounded transition-transform duration-300 ease-in-out ${
                            isMobileMenuOpen ? "-rotate-45 -translate-y-2.5 bg-cyan-400" : "bg-white"
                        }`}
                    />
                </button>

                {/* Sidebar */}
                <aside
                    className={`sidebar fixed top-0 right-0 h-full w-64 bg-gray-900 dark:bg-gray-800 shadow-2xl backdrop-blur-sm z-50 flex flex-col justify-between transition-transform duration-500 ease-in-out ${
                        isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
                >
                    <nav className="flex flex-col gap-6 px-6 pt-16 flex-grow">
                        <Navigators mobile />
                    </nav>

                    <div className="border-t border-gray-700 dark:border-gray-600 px-6 py-6 flex justify-center">
                        <Switch />
                    </div>
                </aside>

                {/* Overlay */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 md:hidden"
                        onClick={toggleMobileMenu}
                        aria-hidden="true"
                    />
                )}
            </header>
        </>
    );
};

export default Header;