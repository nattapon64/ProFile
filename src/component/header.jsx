import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie, faFolder, faFolderOpen, faChartPie, faCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const handleHover = (icon) => {
        console.log(`Hovered over ${icon}`);
    };

    return (
        <div className='h-16 shadow-lg bg-gray-800'>
            <div className='flex justify-between px-10 h-full items-center'>
                <p className='cursor-pointer text-white p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-700' onClick={() => navigate('/MainMenu')}>
                    หน้าหลัก
                </p>
                <p className='cursor-pointer text-white p-2 rounded-md transition duration-300 ease-in-out flex items-center' onClick={() => navigate('/Profile')} onMouseEnter={() => handleHover('Profile')}>
                    {currentPath === "/Profile"
                        ? <FontAwesomeIcon icon={faUserTie} className="mr-2 text-yellow-400" />
                        : <FontAwesomeIcon icon={faUser} className="mr-2" />
                    }
                    โปรไฟล์
                </p>
                <p className='cursor-pointer text-white p-2 rounded-md transition duration-300 ease-in-out flex items-center' onClick={() => navigate('/History')} onMouseEnter={() => handleHover('History')}>
                    {currentPath === "/History"
                        ? <FontAwesomeIcon icon={faFolderOpen} className='mr-2 text-green-400' />
                        : <FontAwesomeIcon icon={faFolder} className='mr-2' />
                    }
                    ประวัติ
                </p>
                <p className='cursor-pointer text-white p-2 rounded-md transition duration-300 ease-in-out flex items-center' onClick={() => navigate('/Performance')} onMouseEnter={() => handleHover('Performance')}>
                    {currentPath === "/Performance"
                        ? <FontAwesomeIcon icon={faChartPie} className='mr-2 text-blue-400' />
                        : <FontAwesomeIcon icon={faCircle} className='mr-2' />
                    }
                    ผลงาน
                </p>
            </div>
        </div>
    );
}

export default Header;
