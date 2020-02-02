import React from "react";

const Dropdown = ({optionArray, wrapperClass, selectClass}) => {
    return (
        <div className={`custom-dropdown content-center ${wrapperClass && wrapperClass}`}>
            <select className={`select ${selectClass && selectClass}`}>
                {
                    optionArray.map((item) => {
                        return <option value={item.value}>{item.name}</option>
                    })
                }
            </select>
            <i className="fas fa-angle-down down-arrow"/>
        </div>
    )
};

export default Dropdown;
