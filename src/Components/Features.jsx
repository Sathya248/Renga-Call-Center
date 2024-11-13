// import React from 'react';
// import './Features.css';

// const Features = () => {
//     return (
//         <div>
//             <h1 className='h1-center'>Features of a Call Center Software</h1>
//             <div className="features-container">
//                 <div className="feature-item">
//                     <img src="path/to/power-dialer-image.png" alt="Power Dialer" />
//                     <h2>Power Dialer</h2>
//                     <p>No more dialing numbers manually. The power dialer automatically dials numbers from a given list so your agents can be more productive.</p>
//                 </div>

//                 <div className="feature-item">
//                     <img src="path/to/automatic-call-distribution-image.png" alt="Automatic Call Distribution" />
//                     <h2>Automatic Call Distribution</h2>
//                     <p>Optimize call handling and improve customer experience by intelligently routing calls to the most appropriate agent.</p>
//                 </div>

//                 <div className="feature-item">
//                     <img src="path/to/ivr-image.png" alt="IVR" />
//                     <h2>IVR</h2>
//                     <p>Allow callers to navigate through a menu to reach the right department or agent quickly and efficiently to improve the resolution rate.</p>
//                 </div>

//                 <div className="feature-item">
//                     <img src="path/to/call-analytics-image.png" alt="Call Analytics" />
//                     <h2>Call Analytics</h2>
//                     <p>Harness the power of data to gain deep insights into call metrics, customer behavior, and agent performance.</p>
//                 </div>

//                 <div className="feature-item">
//                     <img src="path/to/call-monitoring-image.png" alt="Call Monitoring" />
//                     <h2>Call Monitoring</h2>
//                     <p>Monitor and review calls in real-time or analyze recordings to evaluate agent performance, provide constructive feedback, and ensure compliance.</p>
//                 </div>

//                 <div className="feature-item">
//                     <img src="path/to/after-call-work-image.png" alt="After-Call Work" />
//                     <h2>After-Call Work</h2>
//                     <p>Seamlessly handle tasks such as note-taking, follow-ups, and updating customer information, ensuring a smooth and organized workflow.</p>
//                 </div>

//                 <div className="feature-item">
//                     <img src="path/to/voicemail-image.png" alt="Voicemail" />
//                     <h2>Voicemail</h2>
//                     <p>Never miss an important message with RENGA's voicemail. Capture and access voicemails conveniently and stay connected to your customers.</p>
//                 </div>

//                 <div className="feature-item">
//                     <img src="path/to/call-conference-image.png" alt="Call Conference" />
//                     <h2>Call Conference</h2>
//                     <p>Conduct multi-party conference calls effortlessly, fostering effective communication and efficient teamwork.</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Features;



import React from 'react';
import './Features.css';
import { FaPhoneAlt, FaCogs, FaChartBar, FaHeadset, FaRegCalendarCheck, FaVoicemail, FaUsers, FaUsersCog } from 'react-icons/fa';

const Features = () => {
    return (
        <div>
            <h1 className='h1-center'>Features of a Call Center Software</h1>
            <div className="features-container">
                <div className="feature-item">
                    <FaPhoneAlt size={60} color= "rgba(255, 255, 255, 1)" />
                    <h2>Power Dialer</h2>
                    <p>No more dialing numbers manually. The power dialer automatically dials numbers from a given list so your agents can be more productive.</p>
                </div>

                <div className="feature-item">
                    <FaCogs size={60} color= "rgba(255, 255, 255, 1)" />
                    <h2>Automatic Call Distribution</h2>
                    <p>Optimize call handling and improve customer experience by intelligently routing calls to the most appropriate agent.</p>
                </div>

                <div className="feature-item">
                    <FaUsers size={60} color= "rgba(255, 255, 255, 1)" />
                    <h2>IVR</h2>
                    <p>Allow callers to navigate through a menu to reach the right department or agent quickly and efficiently to improve the resolution rate.</p>
                </div>

                <div className="feature-item">
                    <FaChartBar size={60}  color= "rgba(255, 255, 255, 1)" />
                    <h2>Call Analytics</h2>
                    <p>Harness the power of data to gain deep insights into call metrics, customer behavior, and agent performance.</p>
                </div>

                <div className="feature-item">
                    <FaHeadset size={60} color= "rgba(255, 255, 255, 1)" />
                    <h2>Call Monitoring</h2>
                    <p>Monitor and review calls in real-time or analyze recordings to evaluate agent performance, provide constructive feedback, and ensure compliance.</p>
                </div>

                <div className="feature-item">
                    <FaRegCalendarCheck size={60} color= "rgba(255, 255, 255, 1)" />
                    <h2>After-Call Work</h2>
                    <p>Seamlessly handle tasks such as note-taking, follow-ups, and updating customer information, ensuring a smooth and organized workflow.</p>
                </div>

                <div className="feature-item">
                    <FaVoicemail size={60} color= "rgba(255, 255, 255, 1)" />
                    <h2>Voicemail</h2>
                    <p>Never miss an important message with RENGA's voicemail. Capture and access voicemails conveniently and stay connected to your customers.</p>
                </div>

                <div className="feature-item">
                    <FaUsersCog size={60} color= "rgba(255, 255, 255, 1)" />
                    <h2>Call Conference</h2>
                    <p>Conduct multi-party conference calls effortlessly, fostering effective communication and efficient teamwork.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;

