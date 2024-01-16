// useTheme.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const themeValues = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeValues}>
            {children}
        </ThemeContext.Provider>
    );
};
