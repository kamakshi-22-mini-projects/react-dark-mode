import React from 'react'

export const Navbar = (props) => {
    return (
        <header>
            <nav className={props.darkMode ? "dark" : ""}>
                <h1>React</h1>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                < div className='toggle-btn'>
                    <ion-icon 
                        id="toggle-icon" 
                        name="moon-outline"
                        onClick={props.toggleDarkMode}
                    ></ion-icon>
                </div>
            </nav>
        </header>
    )
}
