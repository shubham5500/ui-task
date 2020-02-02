import React from "react";

const Button = ({classes, text, children}) => {
    return (
        <button className={`btn custom-btn ${classes && classes}`}>
            {text} {children}
        </button>
    )
};

export default Button;
