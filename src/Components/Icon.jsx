import React from 'react';
import brand from '../Images/brand.png';  
import './Icon.css';  

const Icon = () => {
    return (
        <div className='imageicon'>
            <p className='imgage-para'>Trusted by 4000+ companies</p>
            <img
                src={brand}  
                alt="Sample"
            />
        </div>
    );
};

export default Icon;


