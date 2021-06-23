import React from "react";


function Header({functions, isDarkMode}) {
    
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={functions.handleDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )

}

export default Header;