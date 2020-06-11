import React from 'react';
import './Preloader.css'
import preloader from '../../Utills/Pictures/preloader.gif'
 
const Preloader = () => {
    return (
        <div className="preloader">
            <img src={preloader} alt=""/>
        </div>
    );
}
 
export default Preloader;