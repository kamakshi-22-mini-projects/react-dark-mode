import React from 'react'

export const Footer = (props) => {
    return ( 
        <footer className={props.darkMode ? "dark": ""}> 
            This is a practice project with react
        </footer>)
}
