'use client';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import logo from '../assets/images/main-logo.svg'; // ✅ Make sure this path is correct!
import profilepicHeader from '../assets/images/profile-pic.png';


export default function HeaderTop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow w-full">
      <nav className="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={logo} alt="Company Logo" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex md:gap-x-8 lg:gap-x-20">
          <Link to="/resumefetching" className="text-md font-medium text-gray-700 hover:text-blue-600
              relative  before:absolute before:-top-[20px] before:left-0 before:h-[2px] before:w-0 before:bg-blue-600
    hover:before:w-full before:transition-all before:duration-300 before:content-['']
    ${isActive ? 'before:w-full text-blue-600'
          ">Resume Fetching</Link>

          <Link to="/foldermanagement" className="text-md font-medium text-gray-700 hover:text-blue-600
              relative  before:absolute before:-top-[20px] before:left-0 before:h-[2px] before:w-0 before:bg-blue-600
    hover:before:w-full before:transition-all before:duration-300 before:content-['']
    ${isActive ? 'before:w-full text-blue-600'
          ">
            Folder Management
          </Link>
          <Link to="/uploadresume" className="text-md font-medium text-gray-700 hover:text-blue-600
              relative  before:absolute before:-top-[20px] before:left-0 before:h-[2px] before:w-0 before:bg-blue-600
    hover:before:w-full before:transition-all before:duration-300 before:content-['']
    ${isActive ? 'before:w-full text-blue-600'
          ">
            Upload Resume
          </Link>
          <Link to="/comparison" className="text-md font-medium text-gray-700 hover:text-blue-600
              relative  before:absolute before:-top-[20px] before:left-0 before:h-[2px] before:w-0 before:bg-blue-600
    hover:before:w-full before:transition-all before:duration-300 before:content-['']
    ${isActive ? 'before:w-full text-blue-600'
          ">
            Comparison
          </Link>
          <Link to="/SendInvitation" className="text-md font-medium text-gray-700 hover:text-blue-600
              relative  before:absolute before:-top-[20px] before:left-0 before:h-[2px] before:w-0 before:bg-blue-600
    hover:before:w-full before:transition-all before:duration-300 before:content-['']
    ${isActive ? 'before:w-full text-blue-600'
          ">
            Send Invitation
          </Link>
          <Link to="/InvitedCandidates" className="text-md font-medium text-gray-700 hover:text-blue-600
              relative  before:absolute before:-top-[20px] before:left-0 before:h-[2px] before:w-0 before:bg-blue-600
    hover:before:w-full before:transition-all before:duration-300 before:content-['']
    ${isActive ? 'before:w-full text-blue-600'
          ">
            Invited Candidates
          </Link>
          <Link to="/HrAssitant" className="text-md font-medium text-gray-700 hover:text-blue-600
              relative  before:absolute before:-top-[20px] before:left-0 before:h-[2px] before:w-0 before:bg-blue-600
    hover:before:w-full before:transition-all before:duration-300 before:content-['']
    ${isActive ? 'before:w-full text-blue-600'
          ">
            HR Assistant
          </Link>
        </div>
        <div className='header-pro'>
          <a href=''>
            <img className="h-8 w-auto" src={profilepicHeader} alt="Profile Picture" />
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel className="fixed sm:fixed inset-y-0 left-0 z-10 w-full max-w-sm bg-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Company Logo"
              />
            </a>
            <button
              type="button"
              className="rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <a href="#" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
              Home
            </a>
            <a href="#" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
              About
            </a>
            <a href="#" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
              Services
            </a>
            <a href="#" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
              Contact
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
