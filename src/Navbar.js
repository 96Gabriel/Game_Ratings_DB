import React from 'react';

const Navbar = () => {
    return (   
        <ul id='navbarList'>
            <li id='logo'><a href='/'><b>GRDB</b></a></li>
            <li style={{'float': 'right'}}><a href='/add'>Add Game</a></li>
        </ul>
    )
}

export default Navbar