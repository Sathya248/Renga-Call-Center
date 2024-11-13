import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="pricing-container">
            <h1 className='pricing'>Pricing</h1>
            <div className='phone-center'>
                <button className='phone-system'>Office Phone System</button>  <button  className='center'>Call Center Solution</button>
            </div>
            <p className='bussiness'>Ideal for Businesses Seeking AI-Enhanced Customer Support Solutions</p>

            {/* Pricing Plans Layout - Left & Right Boxes */}
            <div className="pricing-box-container">
                {/* Left Box with Basic & Professional Plan */}
                <div className='left-box'>
                    <div className="plan-section">
                        <div className="plan-container">
                            <div className="left-container">
                                <h3 className='basic'>Basic</h3>
                                <div className="price">$0</div>
                                <h6 className='billed'>Per user/month billed annually</h6>
                                <button className='basic-btn'>SIGN UP NOW</button>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="right-container">
                                <div className='user'>Unlimited Users (Pay only for numbers)</div>
                                <div className="features">
                                    <ul>
                                        <li>Click To Dial</li>
                                        <li>AI Global Connect</li>
                                        <li>Teams</li>
                                        <li>Voicemail</li>
                                        <li>SMS (Text messages) & MMS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="plan-section">
                        <div className="plan-container">
                            <div className="left-container">
                                <h3 className='basic'>Professional</h3>
                                <div className="price">$30</div>
                                <h6 className='billed'>Per user/month billed annually</h6>
                                <button className='basic-btn'>10 DAYS FREE TRIAL</button>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="right-container">
                                <div className='user'>Everything in Starter +</div>
                                <div className="features">
                                    <ul>
                                        <li>Unlimited calling minutes within US/CAD</li>
                                        <li>500 SMS (Text Messages)</li>
                                        <li>Call Recordings</li>
                                        <li>AI Intelligent Reports / Analytics</li>
                                        <li>After Call Work</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Box with Starter & Ultimate Plan */}
                <div className='right-box'>
                    <div className="plan-section">
                        <div className="plan-container">
                            <div className="left-container">
                                <h3 className='basic'>Starter</h3>
                                <div className="price">$18</div>
                                <h6 className='billed'>Per user/month billed annually</h6>
                                <button className='basic-btn'>10 DAYS FREE TRIAL</button>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="right-container">
                                <div className='user'>Everything in Basic +</div>
                                <div className="features">
                                    <ul>
                                        <li>Unlimited calling minutes within US/CAD</li>
                                        <li>100 SMS (Text Messages)</li>
                                        <li>1 Free Phone Number</li>
                                        <li>Basic Report Analytics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="plan-section">
                        <div className="plan-container">
                            <div className="left-container">
                                <h3 className='basic'>Ultimate</h3>
                                <div className="price">$42</div>
                                <h6 className='billed'>Per user/month billed annually</h6>
                                <button className='basic-btn'>10 DAYS FREE TRIAL</button>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="right-container">
                                <div className='user'>Everything in Professional +</div>
                                <div className="features">
                                    <ul>
                                        <li>Unlimited calling minutes within US/CAD</li>
                                        <li>1000 SMS (Text Messages)</li>
                                        <li>Unlimited QA Users</li>
                                        <li>Dedicated Account Manager</li>
                                        <li>Custom Integrations</li>
                                        <li>Single Sign On (SSO)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='comparison'>See full Comparison</button>
        </div>
    );
}

export default Pricing;






