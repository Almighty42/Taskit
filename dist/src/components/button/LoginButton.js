// React
import React from 'react';
// Style
import './loginButton.scss';
var loginButton = function (props) {
    return (React.createElement("button", { type: 'submit' },
        React.createElement("h1", null,
            " ",
            props.name,
            " ")));
};
export default loginButton;
