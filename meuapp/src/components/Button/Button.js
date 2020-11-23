import React from 'react';
import '../../styles/scss/button.scss';

const Button = ({value, element, id}) => (
    <button className={id}>
        {element}
        {value}
    </button>
)

export default Button;
