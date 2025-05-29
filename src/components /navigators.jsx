import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

const Navigators = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(pathToTab[location.pathname] || 'Home');

    useEffect(() => {
        setActiveTab(pathToTab[location.pathname] || 'Home');
    }, [location.pathname]);

    const navItems = ['Home', 'About me', 'Projects', 'Skills'];

    return (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 sm:gap-10 text-white text-base sm:text-2xl font-bold">
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

export default Navigators;
