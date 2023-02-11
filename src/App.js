import { Main } from "./Components/Main"
import { Navbar } from "./Components/Navbar"
import { Footer } from "./Components/Footer"

import React, { useEffect, useState } from 'react'

function App() {

    // setting the initial value of isDarkMode from the value stored in local storage
    const storedMode = localStorage.getItem('isDarkMode');
    const [isDarkMode, setDarkMode] = useState(storedMode ? JSON.parse(storedMode) : false);

    // updating the value of isDarkMode in local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    // toggling the value of isDarkMode
    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };

    return (<>
        <Navbar darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Main darkMode={isDarkMode} />
        <Footer darkMode={isDarkMode} />
    </>)
}

export default App;
