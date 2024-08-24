import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles }) => {
    return (
        <button
            type={btnType}
            className={`bg-orange-700 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${styles}`}
            onClick={handleClick}
        >
            {title}
        </button>
    );
};

export default CustomButton;
