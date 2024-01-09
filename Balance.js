import React from 'react';

const Balance = () => {
    return (
        <header style={headerStyle}>
            <h2>$0</h2>
            <p>BALANCE</p>
        </header>
    );
};

const headerStyle = {
    textAlign: 'left', // Align text to the left
    background: "#d2d2d2",
    padding: "50px"
};

export default Balance;