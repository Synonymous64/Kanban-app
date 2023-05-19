import Logo from '../assets/logo-mobile.svg'
import dropdownIcon from '../assets/icon-chevron-down.svg';
import upIcon from '../assets/icon-chevron-up.svg';
import { useState } from 'react';
import elipsis from '../assets/icon-vertical-ellipsis.svg';
import HeaderDropdown from './HeaderDropdown';
import AddEditBoardModal from '../modals/AddEditBoardModal';

function Header({ boardModalOpen, setBoardModalOpen }) {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <div className=" p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0 ">
            <header className=" flex justify-between dark:text-white items-center  ">
                {/* Left Side  */}
                <div className=" flex items-center space-x-2  md:space-x-4">
                    <img src={Logo} alt=" Logo " className=" h-6 w-6" />
                    <h3 className=" md:text-4xl  hidden md:inline-block font-bold  font-sans">
                        kanban
                    </h3>
                    <div className='flex items-center'>
                        <h3 className='truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans'>
                            board Name
                        </h3>
                        <img
                            src={openDropdown ? upIcon : dropdownIcon}
                            alt="dropdown icon"
                            className='w-3 ml-2 md:hidden cursor-pointer'
                            onClick={() => setOpenDropdown((dropdown) => !dropdown)}
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className='flex space-x-4 items-center md:space-x-6'>
                    <button className='hidden md:block button'>
                        + Add New Task
                    </button>
                    <button className='button py-1 px-3 md:hidden'>
                        +
                    </button>
                    <img src={elipsis} alt="sidebar" className='cursor-pointer h-6' />
                </div>
            </header>
            {openDropdown &&
                <HeaderDropdown
                    setOpenDropdown={setOpenDropdown}
                    setBoardModalOpen={setBoardModalOpen}
                />
            }
            {
                boardModalOpen && <AddEditBoardModal setBoardModalOpen={setBoardModalOpen} />
            }
        </div>
    )
}

export default Header;