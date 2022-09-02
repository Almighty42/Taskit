// React
import React from 'react';
// Style
import './inputField.scss';
var InputField = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { placeholder: props.placeholder, type: props.type, value: props.value, onChange: function (e) { return props.handleChange(e.target.value, props.value); } })));
};
export default InputField;
