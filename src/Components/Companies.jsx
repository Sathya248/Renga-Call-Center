import React from 'react';
import './Companies.css';

const Companies = () => {
    return (
        <div className="companies-container">
            <h1 className="title">Hear More From Companies Like Yours</h1>
            <p className="intro-text">See how your industry peers are succeeding with RENGA.</p>

            <div className="button-group">
                <button className="category-button">Education</button>
                <button className="category-button">Financial Management</button>
                <button className="category-button">Market Research</button>
                <button className="category-button">Digital Media and Entertainment</button>
            </div>

            <div className="content-container">
                <div className="image-container1">
                    <div className="picture"></div>
                </div>
                <div className="text-container">
                    <h2 className="growth-heading">27% Increase in Business Growth Using RENGA</h2>
                    <p className="growth-description">
                        The Leading Global Marketplace For Learning And Instruction
                        increased their growth by 27% using RENGA’s business phone
                        solution.
                    </p>

                    <div className="action-buttons">
                        <button className="read-more-button">Read More</button>
                        <button className="demo-button">Book A Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Companies;
