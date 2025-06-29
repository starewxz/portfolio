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

const Navigators = ({ mobile }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(pathToTab[location.pathname] || 'Home');

    useEffect(() => {
        setActiveTab(pathToTab[location.pathname] || 'Home');
    }, [location.pathname]);

    const navItems = ['Home', 'About me', 'Projects', 'Skills'];

    if (mobile) {
        // Mobile sidebar version - vertical buttons, full width, better spacing
        return (
            <div className="flex flex-col w-full gap-4">
                {navItems.map((item) => (
                    <button
                        key={item}
                        onClick={() => {
                            setActiveTab(item);
                            navigate(tabToPath[item]);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-md font-semibold transition
                            ${
                            activeTab === item
                                ? 'bg-cyan-500 text-white shadow-lg'
                                : 'text-gray-300 hover:bg-cyan-600 hover:text-white'
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        );
    }

    // Desktop version - keep the original style
    return (
        <div className="flex-wrap justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 sm:gap-10 text-white text-base sm:text-2xl font-bold">
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
}

export default Navigators;
