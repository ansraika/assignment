import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <p>Investing Account</p>
        </header>
    );
};

const headerStyle = {
    textAlign: 'left', // Align text to the left
    marginLeft: "55px",
    marginTop: "40px",
    marginBottom: "40px"
};

export default Header;