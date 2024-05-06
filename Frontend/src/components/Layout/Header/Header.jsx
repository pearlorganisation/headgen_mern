import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import HeaderLink from "./HeaderLink";

import { IoIosMenu } from "react-icons/io";

const Header = () => {

  const location = useLocation()
  const [toggleNav, setToggleNav] = useState(false)
  const [toggleCss, setToggleCss] = useState('')
  const [isDatingPage, setIsDatingPage] = useState(false)

  // const [showMenuDropdown, setShowMenuDropdown] = useState(false)

  useEffect(()=> {
    
    if(location.pathname === '/dating') {
      setIsDatingPage(true)
      setToggleCss('bg-gradient-to-r from-[#810000] to-red-800')
    } else {
      setIsDatingPage(false)
      setToggleCss('bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800')
    }
  }, [location])
  
  //state for window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // useEffect for window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial class
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  let offsetY = 50;
  


  useEffect(() => {
    const handleNavBar = () => {
      let currScroll = window.scrollY;
      if (currScroll > offsetY) {
        setToggleNav(true);
      } else {
        setToggleNav(false);
      }
    };

  
    window.addEventListener("scroll", handleNavBar);
  

    handleNavBar()

    return () => {
      window.removeEventListener("scroll", handleNavBar);
    };
  }, []);



  const navData = [
    {
      name: "How it works",
      path: "/howitworks",
      showDropdown: false,
    },
    {
      name: "Headshots",
      paths: [
        {
          name: "Corporate Headshots",
          path: "/upload/Corporate%20Headhots",
        },
        {
          name: "Doctor Headshots",
          path: "/upload/Doctor%20Headhots",
        },
        {
          name: "Lawyer Headshots",
          path: "/upload/Lawyer%20Headhots",
        },
        {
          name: "Sales Headshots",
          path: "/upload/Sales%20Headhots",
        },
        {
          name: "Students Headshots",
          path: "/upload/Students%20Headhots",
        },
        {
          name: "Teacher Headshots",
          path: "/upload/Teacher%20Headhots",
        },
        {
          name: "Youtube / Instagram",
          path: "/upload/Youtube%20Instagram%20Headhots",
        },
        {
          name: "Customize",
          path: "/customize",
        },
      ],
      showDropdown: true,
    },
    {
      name: "Dating",
      path: "/dating",
      showDropdown: false,
    },
    {
      name: "Company",
      paths: [
        {
          name: "About Us",
          path: "/aboutus",
        },
        {
          name: "Privacy Policy",
          path: "/privacypolicy",
        },
        {
          name: "Terms & Conditions",
          path: "/termsandconditions",
        },
        {
          name: "Cancellation & Refunds",
          path: "/cancellationandrefunds",
        },
        {
          name: "Contact Us",
          path: "/contactus",
        },
      ],
      showDropdown: true,
    },
  ];



  return (
    <nav className={`fixed w-full ${toggleNav ? toggleCss : ''} px-10 2xl:px-[250px] h-fit border-[#737373] border-b-[2px] z-[99]`}>
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="flex flex-col justify-center">
          <Link to="/">
            <img src="/logo.webp" alt="" className="max-w-[180px]" />
          </Link>
        </div>

        {windowWidth <= 970 ? (
          <>
            <button
              data-collapse-toggle="navbar-multi-level"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-multi-level"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="hidden w-full" id="navbar-multi-level">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Dropdown{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdownNavbar"
                    className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li aria-labelledby="dropdownNavbarLink">
                        <button
                          id="doubleDropdownButton"
                          data-dropdown-toggle="doubleDropdown"
                          data-dropdown-placement="right-start"
                          type="button"
                          className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dropdown
                          <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                        <div
                          id="doubleDropdown"
                          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="doubleDropdownButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                Overview
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                My downloads
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                Billing
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                Rewards
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row gap-4">
              {navData.map((item, idx) => (
                <HeaderLink key={`header${idx}`} data={item} showDropdown={item?.showDropdown}  />
              ))}

              {/* button */}
              <div className="h-full py-3">
                <button className={`hover:squeezyBtn px-5 py-4 ${toggleNav ? `${isDatingPage ? 'shadow-[0_1px_2px_0_#131313] bg-[#af2828d8] hover:bg-[#1d2838]' : 'shadow-[0_1px_2px_0_#131313] bg-[#4f3bffd8] hover:bg-[#1d2838]' }` : `${isDatingPage ? 'bg-[#1d2838] hover:bg-[#af2828d8]' : 'bg-[#1d2838] hover:bg-[#1f58ad]'}`} hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#ffffff] text-[15px] font-medium transition duration-[0.6s]`}>
                  Get Started
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>

  );
};

export default Header;
