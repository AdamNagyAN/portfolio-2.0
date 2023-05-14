'use client';
import * as React from 'react';
import { useState } from 'react';
import { landingPageConfig } from '@/config/marketing';
import { NavLink } from '@/components/molecules/navbar/NavLink';
import Modal from '@/components/molecules/modal/Modal';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '@/components/atoms/Button';

const MobileNavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        onClick={toggleMenu}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
          />
          )
        </svg>
      </button>
      <Modal open={isOpen} className="justify-end items-start h-screen">
        <Modal.Body className={'h-screen'}>
          <div className={'w-full flex justify-end'}>
            <Button size={'xs'} onClick={toggleMenu}>
              <AiOutlineClose className={'w-full'} />
            </Button>
          </div>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {landingPageConfig.mainNav.map((navLink) => (
              <NavLink
                key={navLink.href}
                href={navLink.href}
                className={`block py-2 px-4 font-medium text-white uppercase`}
              >
                {navLink.title}
              </NavLink>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MobileNavMenu;
