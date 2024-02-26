import React from 'react';
import { createContext, useContext, useState } from 'react';

export const NavBarContext = createContext({
    isNavbarOpen: true,
    toggleNavbar: () => {}
});

export const NavBarProvider = ({ children }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <NavBarContext.Provider value={{ isNavbarOpen, toggleNavbar }}>
            {children}
        </NavBarContext.Provider>
    );
};

export const useNavbar = () => useContext(NavBarContext);
