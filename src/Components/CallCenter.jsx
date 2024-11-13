// import React from 'react';
// import "./CallCenter.css"
// import micImage from '../Images/mic.png';
// import CircleImage from '../Images/Circle.png';

// const CallCenter = () => {
//     return (
//         <div className='callcenter-container'>
//             <h1 className='head'>Call Center Software</h1>
//             <p className='para'>With RENGA’s advanced call center software, get access to the
//                 industry's leading and most flexible software. Enjoy unparalleled
//                 efficiency with 99.5% uptime.
//             </p>


//             <div className='image-container'>

//                 <img
//                     src={CircleImage}
//                     alt="circle"
//                     className='circle-img' />


//                 <img
//                     src={micImage}
//                     alt="Mic"
//                     className='mic-img' />


//             </div>


//             <h2 className='heading-1'>Give it a try</h2>
//         </div>
//     );
// }

// export default CallCenter;





import React from 'react';
import "./CallCenter.css";
import micImage from '../Images/mic.png';
import CircleImage from '../Images/Circle.png';

const CallCenter = () => {
    return (
        <div className='callcenter-container'>
            <h1 className='head'>Call Center Software</h1>
            <p className='paragraph'>
                With RENGA’s advanced call center software, get access to the
                industry's leading and most flexible software. Enjoy unparalleled
                efficiency with 99.5% uptime.
            </p>

            <div className='image-container'>
                <div className='circle-wrapper'>
                    {/* Circle image */}
                    <img
                        src={CircleImage}
                        alt="circle"
                        className='circle-img'
                    />

                    {/* Mic image */}
                    <img
                        src={micImage}
                        alt="Mic"
                        className='mic-img'
                    />
                </div>
            </div>

            <h2 className='heading-1'>Give it a try</h2>
        </div>
    );
}

export default CallCenter;

