import './index.css'
import React from 'react';

const Button = React.memo(({onClick, children}) => {
console.log('BUTTON')
    return (
        <button onClick={onClick} className="btn-primary">{children}</button>
    )
});

export default Button;