import React from 'react';
import backgroundImage from '../assets/space-background.jpg';
import astronautImage from '../assets/cartoon1.webp';
import astronautImage1 from '../assets/Astronaut.png';
import train from '../assets/train.png'

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
        position: 'relative', // ตำแหน่งต้องเป็น relative เพื่อให้สามารถใช้ absolute positioning กับ astronaut ได้
    };

    const astronautStyle = {
        position: 'absolute',
        bottom: '20px', // ปรับตำแหน่งตามต้องการ
        left: '80%', // ปรับตำแหน่งตามต้องการ
        transform: 'translateX(-50%)', // จัดให้ตรงกลางแนวนอน
        width: '200px', // ปรับขนาดตามต้องการ
        height: 'auto', // รักษาอัตราส่วน
        animation: 'floatAstronaut 3s ease-in-out infinite', // กำหนด animation
    };

    const astronautStyle1 = {
        position: 'absolute',
        top: '50px',
        left: '5%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: 'auto',
        animation: 'floatAstronaut 3s ease-in-out infinite',
    }


    return (
        <div style={backgroundStyle}>
            <marquee><div className='flex'><img src={train} alt="train" /><div className='flex justify-center text-center items-center mx-10 text-5xl font-bold'>Welcome</div></div></marquee>
            <img src={astronautImage} alt="Astronaut" style={astronautStyle} />
            {/* <img src={astronautImage1} alt="Astronaut" style={astronautStyle1} /> */}
        </div>
    );
}

export default MainMenu;