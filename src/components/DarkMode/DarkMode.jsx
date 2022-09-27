import React, { useState, useEffect } from 'react';

import { ToggleSlider }  from "react-toggle-slider";
import './DarkMode.css';

function DarkMode() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        document.body.className = theme;
      }, [theme]);

    return (
        <>
            <ToggleSlider onToggle={() => setTheme(toggleTheme)}/>
        </>
    );
}

export default DarkMode;