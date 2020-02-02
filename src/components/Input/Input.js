import React from "react";

const Input = ({type, classes, placeholder, children, inputWrapperClass}) => {
    return (
        <div className={`input-group  ${inputWrapperClass && inputWrapperClass}`}>
            {children}
            <input type={type}
                   placeholder={placeholder}
                   className={`input-default form-control ${classes && classes}`}/>
        </div>
    )
};

export default Input;
