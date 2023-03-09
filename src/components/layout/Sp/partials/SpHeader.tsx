import { FreeportLogo } from 'components/icons/freeport/logo';
import Link from 'next/link';
import { useState } from "react";

function SpHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function openNav() {
    setIsOpen(true);
  }

  function closeNav() {
    setIsOpen(false);
  }

  const PRIMARY_LINKS = [
    {
      href: 'https://gallery.freeport.app',
      text: 'Gallery',
    },
    {
      href: '/blog',
      text: 'Blog',
    },
    {
      href: '/about',
      text: 'About',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
  ]

  return (
    <>


        <nav className="p-6 flex justify-between sp-navbar">
            <div className="flex items-center flex-shrink-0 mr-6">
                <Link href="/">
                    <FreeportLogo className="h-8 w-8" variant="logo-type" />
                </Link>
            </div>
            <div className="flex items-center flex-shrink-0 mr-6">
                {/* <ul className="flex flex-col md:flex-row py-4 md:py-0 gap-2 border-b border-b-freeport-gray-100 border-opacity-20 md:border-b-0">
                    {PRIMARY_LINKS.map(({ href, text }) => (
                    <li key={href}>
                        <Link
                        href={href}
                        className="block px-4 md:px-2 py-3 md:py-1 text-freeport-gray-900 md:hover:text-freeport-gray-600 hover:bg-freeport-gray-50 md:hover:bg-inherit text-freeport-md font-semibold"
                        >
                        {text}
                        </Link>
                    </li>
                    ))}
                </ul> */}
                <p className='sp-header-text'>Limited availability. Launching this spring.
                    <button className='sp-header-button'>Join waiting list</button>
                </p>
            </div>
            <div className="flex items-center flex-shrink-0 mr-6">
            <div className="space-y-1">
                <div className={`sp-header-menu-overlay ${isOpen ? "open" : ""}`}>
                    <a className="closebtn" onClick={closeNav}>
                    &times;
                    </a>
                    <div className="sp-header-menu-overlay-content">
                        <ul className="flex flex-col md:flex-row py-4 md:py-0 gap-2 border-b border-b-freeport-gray-100 border-opacity-20 md:border-b-0">
                            {PRIMARY_LINKS.map(({ href, text }) => (
                                <li key={href}>
                                    <Link
                                    href={href}
                                    className="block px-4 md:px-2 py-3 md:py-1 text-freeport-gray-900 md:hover:text-freeport-gray-600 hover:bg-freeport-gray-50 md:hover:bg-inherit text-freeport-md font-semibold"
                                    >
                                    {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="sp-hamburger" onClick={openNav}>    
                            <span className="block w-6 h-0.5 bg-gray-600 my-2"></span>
                            <span className="block w-6 h-0.5 bg-gray-600 my-2"></span>
                            <span className="block w-3 h-0.5 bg-gray-600 float-right my-2"></span>      
                </div>
            </div>
            </div>
            
        </nav>

 
     
    </>
  );
}

export default SpHeader;