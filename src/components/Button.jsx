import React from 'react';

function Button({ text, color, onClick, className }) {
    return (
        <button onClick={onClick} className={`btn btn-${color} ${className}`}>
            {text}
        </button>
    );
}

export default Button;
