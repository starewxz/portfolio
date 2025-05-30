import Navigators from "./navigators.jsx";
import Switch from "./theme-switch.jsx";

const Header = () => {
    return (
        <header className="w-full relative flex flex-wrap items-center justify-between gap-4 px-4 py-4">
            <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-bold animate-slide-in-left-delay ml-2 sm:ml-12">
                Port<span className="text-cyan-400 text-base sm:text-2xl">folio</span>
            </h1>

            <Navigators />

            <div className="animate-slide-in-top">
                <Switch />
            </div>
        </header>
    )
}

export default Header;