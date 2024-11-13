import React from 'react';
import './Form.css';
import lineImage from '../Images/line.png';

const Form = () => {
    return (
        <div className="login-container">
            <div className='container'>
                <h1 className="get-started">Get Started</h1>
                <input
                    type="email" className="input-box"
                    placeholder="Enter your email" />

                <button className="login-button">Login</button>

                {/* Corrected Image Styling */}
                <img
                    src={lineImage}
                    alt="Line"
                    style={{
                        width: '421px',
                        height: '26px',
                        opacity: 1,
                        marginLeft: '60px',
                        marginTop:'20px',
                    }}
                />

                <button className="google-button">Sign in with Google</button>
                <p className='paragrap'>
                    By signing up, agree to our <ins>Terms</ins> & <ins>Privacy Policy</ins>
                </p>
            </div>
        </div>
    );
};

export default Form;
