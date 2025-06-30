import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const pathToTab = {
    '/': 'Home',
    '/about': 'About me',
    '/projects': 'Projects',
    '/skills': 'Skills'
};

const tabToPath = {
    'Home': '/',
    'About me': '/about',
    'Projects': '/projects',
    'Skills': '/skills'
};

const Navigators = ({ mobile, onNavigate }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(pathToTab[location.pathname] || 'Home');

    useEffect(() => {
        setActiveTab(pathToTab[location.pathname] || 'Home');
    }, [location.pathname]);

    const navItems = ['Home', 'About me', 'Projects', 'Skills'];

    if (mobile) {
        return (
            <div className="flex flex-col w-full gap-4 px-4 py-6 rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 shadow-md navigator-glass">
                {navItems.map((item, i) => (
                    <button
                        key={item}
                        onClick={() => {
                            setActiveTab(item);
                            if (onNavigate) onNavigate();
                            setTimeout(() => {
                                navigate(tabToPath[item]);
                            }, 300);
                        }}
                        className={`mob w-full text-left px-4 py-3 rounded-md font-semibold transition
                        ${
                            activeTab === item
                                ? 'bg-cyan-500 text-white shadow-lg'
                                : 'text-gray-300 hover:bg-cyan-600 hover:text-white'
                        } animate-slide-in-left`}
                        style={{ animationDelay: `${i * 150}ms` }}
                    >
                        {item}
                    </button>
                ))}
            </div>
        );
    }

    // Desktop version - keep the original style
    return (
        <div className="navigator-glass absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 shadow-lg flex gap-4 sm:gap-10 text-white text-base sm:text-2xl font-bold">
            {navItems.map((item, i) => (
                <h2
                    key={item}
                    className={`relative animate-slide-in-top cursor-pointer ${activeTab === item ? 'active' : ''}`}
                    style={{ animationDelay: `${i * 200}ms` }}
                >
                    <button
                        onClick={() => {
                            setActiveTab(item);
                            navigate(tabToPath[item]);
                        }}
                    >
                        {item}
                    </button>
                </h2>
            ))}
        </div>
    );
};

Navigators.propTypes = {
    mobile: PropTypes.bool,
    onNavigate: PropTypes.func,
}

export default Navigators;
