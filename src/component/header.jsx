import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie, faFolder, faFolderOpen, faChartPie, faCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHover = (icon) => {
        console.log(`Hovered over ${icon}`);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='h-16 shadow-lg bg-gray-800'>
            <div className='flex justify-between px-4 md:px-10 h-full items-center'>
                <p className='cursor-pointer text-white p-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-700' onClick={() => navigate('/MainMenu')}>
                    หน้าหลัก
                </p>
                <button className='text-white md:hidden' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
                <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-10 md:z-auto`}>
                    <p className='cursor-pointer text-white p-2 rounded-md transition duration-300 ease-in-out flex items-center' onClick={() => { navigate('/Profile'); setIsMenuOpen(false); }} onMouseEnter={() => handleHover('Profile')}>
                        {currentPath === "/Profile"
                            ? <FontAwesomeIcon icon={faUserTie} className="mr-2 text-yellow-400" />
                            : <FontAwesomeIcon icon={faUser} className="mr-2" />
                        }
                        โปรไฟล์
                    </p>
                    <p className='cursor-pointer text-white p-2 rounded-md transition duration-300 ease-in-out flex items-center' onClick={() => { navigate('/History'); setIsMenuOpen(false); }} onMouseEnter={() => handleHover('History')}>
                        {currentPath === "/History"
                            ? <FontAwesomeIcon icon={faFolderOpen} className='mr-2 text-green-400' />
                            : <FontAwesomeIcon icon={faFolder} className='mr-2' />
                        }
                        ประวัติ
                    </p>
                    <p className='cursor-pointer text-white p-2 rounded-md transition duration-300 ease-in-out flex items-center' onClick={() => { navigate('/Performance'); setIsMenuOpen(false); }} onMouseEnter={() => handleHover('Performance')}>
                        {currentPath === "/Performance"
                            ? <FontAwesomeIcon icon={faChartPie} className='mr-2 text-blue-400' />
                            : <FontAwesomeIcon icon={faCircle} className='mr-2' />
                        }
                        ผลงาน
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;
