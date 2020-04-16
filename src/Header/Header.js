import React from 'react';
import '../Header/Header.css';

function Header() {
    return (
        <header className="App-header">
            <div className="table">
            <ul id="menuList">
                <li><a href="/">Home</a></li>
                <li><a href="/">Profile</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Projects</a></li>
            </ul>
            </div>
         
      </header>
    );

    
}

export default Header;

