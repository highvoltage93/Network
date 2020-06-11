import React from 'react';
import './Input.css'
 
const Input = ({type, placeholder, name}) => {
    return <input type={type} placeholder={placeholder} name={name}/>
}
 
export default Input;