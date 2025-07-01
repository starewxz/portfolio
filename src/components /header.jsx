import { useState, useEffect } from "react";
import Navigators from "./navigators.jsx";
import Switch from "./theme-switch.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen((open) => !open);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 py-4 transition-all duration-300
                ${ scrolled ? "scrolled shadow-lg" : "bg-transparent"}`}
                style={{
                    transitionProperty: "background-color, border-radius, box-shadow",
                    WebkitBackdropFilter: "blur(16px)",
                    backdropFilter: "blur(16px)",
                    marginBottom: "30px",
                }}
                role="banner"
            >
                {/* Logo */}
                <h1
                    className={`flex flex-col leading-none cursor-default select-none
            ${
                        scrolled
                            ? "text-gray-900 dark:text-white"
                            : "text-white"
                    }`}
                    aria-label="Portfolio of Revasevych Stanislav"
                >
          <span
              className="text-2xl sm:text-4xl font-bold transition-transform duration-300 hover:scale-105"
          >
            Port<span className="text-cyan-400 text-xl sm:text-2xl">folio</span>
          </span>
                    <small
                        className="mt-1 text-sm sm:text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide"
                    >
                        Revasevych Stanislav
                    </small>
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
                    <Navigators
                        onNavigate={() => {
                            setTimeout(() => setIsMobileMenuOpen(false), 400);
                        }}
                    />
                </nav>

                {/* Desktop Theme Switch */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="animate-slide-in-top">
                        <Switch />
                    </div>
                </div>

                {/* Mobile Hamburger Button */}
                <AnimatePresence>
                    {!isMobileMenuOpen && (
                        <motion.div
                            layoutId="hamburger"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-4 right-4 z-60 md:hidden"
                        >
                            <button
                                onClick={toggleMobileMenu}
                                aria-label="Open menu"
                                className="flex flex-col justify-center items-center gap-1 w-12 h-12 rounded-xl
                bg-white/10 backdrop-blur-sm border border-white/20 shadow-md
                hover:bg-white/20 hover:border-white/30 hover:shadow-cyan-400/40
                focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            >
                                <span className="hamburger-bar block h-1 w-7 rounded bg-white" />
                                <span className="hamburger-bar block h-1 w-7 rounded bg-white" />
                                <span className="hamburger-bar block h-1 w-7 rounded bg-white" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Sidebar for mobile */}
            <aside
                className={`sidebar fixed top-0 right-0 z-50 h-full w-64 bg-gray-900 dark:bg-gray-800 shadow-2xl backdrop-blur-sm
        flex flex-col justify-between transition-transform duration-500 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
                aria-hidden={!isMobileMenuOpen}
            >
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            layoutId="hamburger"
                            key="hamburger-sidebar"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
                            className="absolute top-4 right-4 z-50 md:hidden mb-8"
                        >
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={toggleMobileMenu}
                                    aria-label="Close menu"
                                    className="flex flex-col justify-center items-center gap-1 w-12 h-12 rounded-xl
                    bg-white/10 backdrop-blur-sm border border-white/20 shadow-md
                    hover:bg-white/20 hover:border-white/30 hover:shadow-cyan-400/40
                    focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                >
                                    <span className="hamburger-bar block h-1 w-7 rotate-45 translate-y-2.5 bg-cyan-400 rounded transition-transform duration-300" />
                                    <span className="hamburger-bar block h-1 w-7 opacity-0 bg-white rounded" />
                                    <span className="hamburger-bar block h-1 w-7 -rotate-45 -translate-y-2.5 bg-cyan-400 rounded transition-transform duration-300" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <nav className="flex flex-col gap-6 px-6 pt-16 flex-grow" aria-label="Mobile navigation">
                    <Navigators mobile />
                </nav>

                <div className="border-t border-gray-700 dark:border-gray-600 px-6 py-6 flex justify-center">
                    <Switch />
                </div>
            </aside>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-30 md:hidden"
                    onClick={toggleMobileMenu}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default Header;