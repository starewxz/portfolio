import { useState } from "react";
import Navigators from "./navigators.jsx";
import Switch from "./theme-switch.jsx";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full relative flex items-center justify-between px-4 py-4 bg-gray-900 shadow-lg dark:bg-gray-800 transition-colors duration-300">
            <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-bold animate-slide-in-left-delay ml-2 sm:ml-12">
                Port
                <span className="text-cyan-400 text-base sm:text-2xl">folio</span>
            </h1>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
                <Navigators />
            </nav>

            {/* Desktop theme switch */}
            <div className="hidden md:flex items-center gap-8">
                <div className="animate-slide-in-top">
                    <Switch />
                </div>
            </div>

            {/* Hamburger icon */}
            <button
                className="md:hidden flex flex-col justify-center items-center gap-1 w-10 h-10 cursor-pointer focus:outline-none z-60"
                aria-label="Toggle menu"
                onClick={toggleMobileMenu}
            >
              <span
                  className={`hamburger-bar block h-1 w-7 rounded transition-transform duration-300 ease-in-out ${
                      isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
              />
                <span
                    className={`hamburger-bar block h-1 w-7 rounded transition-opacity duration-300 ease-in-out ${
                        isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                    className={`hamburger-bar block h-1 w-7 rounded transition-transform duration-300 ease-in-out ${
                        isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                />
            </button>

            {/* Sidebar */}
            <aside
                className={`sidebar fixed top-0 right-0 h-full w-64 bg-gray-900 dark:bg-gray-800 shadow-2xl backdrop-blur-sm z-50 flex flex-col justify-between transition-transform duration-350 ease-in-out ${
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
    );
};

export default Header;