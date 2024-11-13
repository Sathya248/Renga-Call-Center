import React from 'react';
import "./Explain.css";
import images1 from '../Images/images-1.png';
import images2 from '../Images/images-2.png';
import images3 from '../Images/images-3.png';


const Explain = () => {
    return (
        <div className="explain">
            {/* First Section */}
            <div className="explain-item">
                <img src={images1} alt="Packed with powerful features" className="img1" />
                <div className="text-content">
                    <h3 className="packed">Packed with powerful features</h3>
                    <p className="experience">
                        Experience the ultimate call center solution with RENGA - offering routing,
                        conferencing, CRM integrations, and automated SMS capabilities, and more.
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div className="explain-item">
                <img src={images2} alt="Dependable support" className="img2" />
                <div className="text-content">
                    <h3 className="packed-1">Dependable support</h3>
                    <p className="experience-1">
                        With our expert team by your side, enjoy hassle-free setup and support for any
                        queries. Our excellent onboarding and fast support ensure complete peace of mind.
                    </p>
                </div>
            </div>

            {/* Third Section */}
            <div className="explain-item">
                <img src={images3} alt="Transparent Pricing" className="img3" />
                <div className="text-content">
                    <h3 className="packed-2">Transparent Pricing</h3>
                    <p className="experience-2">
                        Avoid the confusion of hidden charges and complex pricing tiers with our pricing model.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Explain;
