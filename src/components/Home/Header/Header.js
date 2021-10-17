import React from 'react';
import Banner from './Banner';
import Navbar from './Navigation';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;