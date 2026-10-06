import { Suspense, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import ThemeToggle from "./theme-toggle.jsx";
import { Close, GitHub, LinkedIn, Instagram, Menu } from "./icons.jsx";
import { navItems, socials } from "../services/links.js";
import useDocumentTitle from "../hooks/use-document-title.js";

const socialIcons = { GitHub, LinkedIn, Instagram };
const num = (i) => String(i + 1).padStart(2, "0");

const Header = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    // Close the mobile sheet on navigation and lock body scroll while it is open.
    useEffect(() => setOpen(false), [pathname]);
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header className="topbar">
                <div className="container-x flex h-16 items-center justify-between">
                    <Link to="/" className="logo" aria-label="Stanislav Revasevych — home">
                        stas.dev<i aria-hidden="true" />
                    </Link>

                    <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
                        {navItems.map(({ to, label }, i) => (
                            <NavLink key={to} to={to} end={to === "/"} className="nav-link">
                                <span className="opacity-60">{num(i)}</span> {label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            className="icon-btn md:hidden"
                            onClick={() => setOpen((o) => !o)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                        >
                            {open ? <Close width="18" height="18" /> : <Menu width="18" height="18" />}
                        </button>
                    </div>
                </div>
            </header>

            {open && (
                <nav className="menu-sheet md:hidden" aria-label="Mobile">
                    {navItems.map(({ to, label }, i) => (
                        <NavLink key={to} to={to} end={to === "/"}>
                            {label}
                            <span>{num(i)}</span>
                        </NavLink>
                    ))}
                </nav>
            )}
        </>
    );
};

const Footer = () => (
    <footer className="mt-28 border-t-2" style={{ borderColor: "var(--line)" }}>
        <div className="container-x flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
            <p className="mono m-0 text-xs" style={{ color: "var(--muted)" }}>
                © 2024 Revasevych Stanislav
            </p>
            <div className="flex gap-3">
                {socials.map(({ name, href, icon }) => {
                    const Icon = socialIcons[icon];
                    return (
                        <a key={name} className="icon-btn" href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                            <Icon width="18" height="18" />
                        </a>
                    );
                })}
            </div>
        </div>
    </footer>
);

const PageFallback = () => (
    <div className="container-x pt-36" aria-busy="true">
        <div className="skeleton mb-4 h-14 w-2/3" />
        <div className="skeleton mb-3 h-4 w-full" />
        <div className="skeleton h-64 w-full" />
    </div>
);

const staticTitles = { "/": undefined, "/main": undefined, "/about": "About", "/projects": "Projects", "/skills": "Skills" };

const Layout = () => {
    const { pathname } = useLocation();
    // Project pages set their own title (null = hands off); unknown routes get the 404 title.
    const isProject = pathname.startsWith("/projects/projectDetails/");
    useDocumentTitle(isProject ? null : pathname in staticTitles ? staticTitles[pathname] : "Page not found");

    return (
        <>
            <Header />
            <main key={pathname} className="page-enter">
                <Suspense fallback={<PageFallback />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
