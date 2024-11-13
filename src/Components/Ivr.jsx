import React from 'react';
import './Ivr.css';  // Your CSS file
import button1 from '../Images/button-1.png';  // Corrected path
import button2 from '../Images/button-2.png';  // Corrected path
import button3 from '../Images/button-3.png';  // Corrected path

const Ivr = () => {
    return (
        <div className="ivr-container">
            {/* First Section */}
            <div className="ivr-item">
                <div className="text-content">
                    <p>Effortlessly manage high call volumes during peak hours with a multi-level IVR system. Reduce call and enhance the customer experience.</p>
                </div>
                {/* <h3 className='i'>IVR</h3> */}
                <div className="image-content">
                    <img src={button1} alt="IVR" className="ivr-img" />
                </div>
            </div>

            {/* Second Section */}
            <div className="ivr-item">
                <div className="text-content">
                    <p>Efficiently route calls with smart routing. Set up business hours and connect callers to the best available agent. Offer 24/7 service while maintaining work-life balance for your team.</p>
                </div>
                
                <div className="image-content">
                    <img src={button2} alt="Routing" className="routing-img" />
                </div>
            </div>

            {/* Third Section */}
            <div className="ivr-item">
                <div className="text-content">
                    <p>Enhance call connectivity with RENGA's Smart Switch. Agents can switch between providers for better call pickup rates and an exceptional customer experience.</p>
                </div>
                {/* <h3 className='s'>Smart Switch</h3> */}
                <div className="image-content">
                    <img src={button3} alt="Smart Switch" className="switch-img" />
                </div>
            </div>
        </div>
    );
};

export default Ivr;
