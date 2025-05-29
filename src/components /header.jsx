import Navigators from "./navigators.jsx";
import Switch from "./theme-switch.jsx";

const Header = () => {
    return (
        <header className="w-full relative flex items-center justify-between px-4 py-4">
            <h1 className="text-white text-2xl sm:text-5xl font-bold animate-slide-in-left-delay ml-12">
                Port<span className="text-cyan-400 text-xl sm:text-3xl">folio</span>
            </h1>

            <Navigators />

            <div className="animate-slide-in-top">
                <Switch />
            </div>
        </header>
    )
}

export default Header;