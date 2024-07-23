import React from 'react';
import backgroundImage from '../assets/space-background.jpg';
import astronautImage from '../assets/cartoon1.webp';
import astronautImage1 from '../assets/Astronaut.png';
import train from '../assets/train.png';

function MainMenu() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '2rem',
        textAlign: 'center',
        position: 'relative',
    };

    return (
        <div style={backgroundStyle}>
            <marquee className="marquee">
                <div className='flex'>
                    <img src={train} alt="train" className="train-image" />
                    <div className='flex justify-center text-center items-center mx-10 text-title font-bold'>Welcome</div>
                </div>
            </marquee>
            <img src={astronautImage} alt="Astronaut" className="astronaut-image" />
            {/* <img src={astronautImage1} alt="Astronaut" className="astronaut-image1" /> */}
        </div>
    );
}

export default MainMenu;
