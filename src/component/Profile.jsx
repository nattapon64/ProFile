import React, { useState, useEffect } from 'react';
import profileImage from '../assets/best.jpeg';
import VDOHD from '../assets/VDO.mp4';
import { useLocation, useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const [timeRemaining, setTimeRemaining] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        const countdown = () => {
            const now = new Date();
            const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
            const difference = endOfYear - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeRemaining(`${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`);
            } else {
                setTimeRemaining('เวลานับถอยหลังสิ้นสุดแล้ว');
            }
        };

        const calculateAge = () => {
            const birthDate = new Date(2001, 11, 31);
            const now = new Date();
            const yearDiff = now.getFullYear() - birthDate.getFullYear();
            const monthDiff = now.getMonth() - birthDate.getMonth();
            const dayDiff = now.getDate() - birthDate.getDate();

            let years = yearDiff;
            let months = monthDiff;

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                years--;
                months += 12;
            }
            if (dayDiff < 0) {
                months--;
            }

            setAge(`${years} ปี ${months} เดือน`);
        };

        const timerId = setInterval(countdown, 1000);
        calculateAge();

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className='relative h-screen overflow-hidden'>
            <video src={VDOHD} autoPlay loop muted className='absolute w-full h-full object-cover' />
            <div className='absolute inset-0 to-gray-400 bg-opacity-70 flex justify-center items-center'>
                <div className='bg-white/30 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-sm mx-auto'>
                    <div className='flex justify-center'>
                        <img
                            className='w-[150px] h-[170px] rounded-full border-4 border-gray-300 shadow-lg'
                            src={profileImage}
                            alt="profile"
                        />
                    </div>
                    <h2 className='text-center text-2xl mt-6 font-bold text-gray-800'>
                        ชื่อ : นายณัฐพล หนูเป้า
                    </h2>
                    <p className='text-center text-lg mt-2 text-gray-600'>
                        ชื่อเล่น : เบสท์
                    </p>
                    <p className='text-center text-lg mt-2 text-gray-600'>
                        {timeRemaining}
                    </p>
                    <p className='text-center text-lg mt-2 text-gray-600'>
                        อายุ : {age}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
