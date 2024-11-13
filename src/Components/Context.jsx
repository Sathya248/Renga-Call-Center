import React from 'react';
import "./Context.css";
import image1 from '../Images/Dialer.png';
import image2 from '../Images/Analytics.png';
import image3 from '../Images/Effortlessly.png';

const Context = () => {
    return (
        <div className="context-container">
            <div className="context-item">
                <img src={image1} alt="Automation & Auto-Dialer" className="Dialer-img1" />
                <h3>Automation & Auto-Dialer</h3>
                <p>Save your time by uploading contacts and having your remote team make calls, take notes during the calls and automatically sync them to your CRM</p>
            </div>

            <div className="context-item">
                <img src={image2} alt="Workflows & Analytics" className="Analytics-img2" />
                <h3>Workflows & Analytics</h3>
                <p>Activate and nurture leads by running SMS and calling campaigns, measure the performance using our comprehensive analytics and reporting.</p>
            </div>

            <div className="context-item">
                <img src={image3} alt="Scale Effortlessly" className="Effortlessly-img3" />
                <h3>Scale Effortlessly</h3>
                <p>Access your account from any device or location with local and toll-free numbers of over 100 countries.</p>
            </div>

            <button className='context-btn'>Start Free Trial</button>
        </div>
    );
}

export default Context;
