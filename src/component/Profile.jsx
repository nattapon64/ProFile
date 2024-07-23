import React from 'react';
import profileImage from '../assets/best.jpeg';
import VDOHD from '../assets/VDO.mp4';
import { useLocation, useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

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
                        อายุ : 22 ปี
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
