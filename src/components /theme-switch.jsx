import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Switch = () => {
    const [isDark, setIsDark] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme === 'dark' : false;
    });

    useEffect(() => {
        document.body.style.backgroundColor = isDark ? '#0f172a' : '#bae6fd';
        if (isDark) {
            document.body.classList.add('dark');
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <StyledWrapper>
            <div className="switch-container">
                <input
                    className="toggle-checkbox"
                    id="toggle-switch"
                    type="checkbox"
                    checked={isDark}
                    onChange={toggleTheme}
                    aria-label="Toggle theme"
                />
                <label className="switch" htmlFor="toggle-switch">
                    <div className="toggle">
                        <div className="led" />
                    </div>
                </label>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    
    .switch-container {
    position: relative;
    width: 80px;
    height: 32px;
    background: #d6d6d6;
    border-radius: 40px;
    box-shadow: inset -5px -5px 10px #ffffff,
    inset 5px 5px 10px #b0b0b0;
    }

    .toggle-checkbox {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        margin: 0;
        cursor: pointer;
        z-index: 2;
    }

    .switch {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateY(-50%);
        border-radius: 40px;
        overflow: hidden;
        pointer-events: none;
    }

    .toggle {
        position: absolute;
        width: 44px;
        height: 26px;
        background: linear-gradient(145deg, #fff7a0, #f7e34a);
        border-radius: 40px;
        top: 3px;
        left: 3px;
        box-shadow: -3px -3px 6px #fffce0,
        3px 3px 6px #c7bc36;
        transition: all 0.3s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 6px;
        pointer-events: none;
    }

    .led {
        width: 6.5px;
        height: 6.5px;
        background: yellow;
        border-radius: 50%;
        box-shadow: 0 0 10px 2.5px yellow;
        transition: all 0.3s ease-in-out;
    }

    .toggle-checkbox:checked + .switch .toggle {
        left: 31px;
        background: linear-gradient(145deg, #cfcfcf, #a9a9a9);
        box-shadow: -3px -3px 6px #ffffff,
        3px 3px 6px #8a8a8a;
        justify-content: flex-end;
        padding-right: 6px; 
    }

    .toggle-checkbox:checked + .switch .led {
        background: grey;
        box-shadow: 0 0 7px 1.5px rgba(0, 0, 0, 0.2);
    }
`;

export default Switch;