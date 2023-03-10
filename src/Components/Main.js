import React from 'react'

export const Main = (props) => {

    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Powers thousands of enterprise apps</li>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
            </ul>
        </main>
    )
}

