import React from 'react';
import './SocialMedia.css';
import { AiFillFileAdd } from 'react-icons/ai';

const SocialMedia = () => {
    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="social-media-component">
            <div className="title-container">
                <h3 className="title-monospace">You Can Reach Me at the Following</h3>
            </div>
            <div className="icons-container">
                <i className="devicon-github-original social-media-icon" onClick={() => handleClick('https://github.com/yourusername')}></i>
                <i className="devicon-linkedin-plain social-media-icon" onClick={() => handleClick('https://www.linkedin.com/in/yourusername/')}></i>
                <div className="resume-container" onClick={() => handleClick('https://example.com/your_resume.pdf')}>
                    <AiFillFileAdd className="resume-icon social-media-icon" />
                    <span className="resume-text">CV yet to add</span>
                </div>
            </div>
        </div>
    );
};
  
  export default SocialMedia;