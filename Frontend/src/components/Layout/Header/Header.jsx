import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import HeaderLink from "./HeaderLink";
import SubDropdown from "../../SubDropdown/SubDropdown";

const Header = () => {
  const location = useLocation();
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleCss, setToggleCss] = useState("");
  const [isDatingPage, setIsDatingPage] = useState(false);
  const [showMobDropdown, setShowMobDropdown] = useState(false);

  useEffect(() => {
    if (location.pathname === "/dating") {
      setIsDatingPage(true);
      setToggleCss("bg-gradient-to-r from-[#810000] to-red-800");
    } else {
      setIsDatingPage(false);
      setToggleCss("bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800");
    }
  }, [location]);

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
    handleNavBar();

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
          path: "/upload/Corporate%20Headshots",
        },
        {
          name: "Doctor Headshots",
          path: "/upload/Doctor%20Headshots",
        },
        {
          name: "Lawyer Headshots",
          path: "/upload/Lawyer%20Headshots",
        },
        {
          name: "Sales Headshots",
          path: "/upload/Sales%20Headshots",
        },
        {
          name: "Students Headshots",
          path: "/upload/Students%20Headshots",
        },
        {
          name: "Teacher Headshots",
          path: "/upload/Teacher%20Headshots",
        },
        {
          name: "Youtube or Instagram",
          path: "/upload/Youtube%20or%20Instagram",
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
    <nav
      className={`fixed w-full ${
        toggleNav ? toggleCss : ""
      } px-10 2xl:px-[250px] h-fit border-[#737373] border-b-[2px] z-[99]  `}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="flex flex-col justify-center">
          <Link to="/">
            <img src="/logo.webp" alt="" className="max-w-[180px]" />
          </Link>
        </div>

        {windowWidth <= 970 ? (
          <>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setShowMobDropdown(!showMobDropdown)}
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
            <div
              className={`${
                showMobDropdown ? "" : "hidden"
              } absolute top-[102%] left-0 w-full bg-[#2f2f31] flex flex-col shadow-[0_2px_2px#121212]`}
            >
              {navData &&
                navData.map((item, idx) => (
                  <>
                    {item.showDropdown ? (
                      <SubDropdown
                        key={`navData${idx}`}
                        data={item}
                        setShowMobDropdown={setShowMobDropdown}
                      />
                    ) : (
                      <Link
                        key={`navData${idx}`}
                        href={item.path}
                        className="w-full flex justify-center hover:bg-gradient-to-r hover:from-[#02AFDC] hover:to-[#2563EB] text-[#ffffff] text-lg py-2 hover:bg-blue-600 hover:text-white transition duration-300 "
                        onClick={() => setShowMobDropdown(false)}
                      >
                        <span className="w-[120px] text-center">
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </>
                ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row gap-4">
              {navData.map((item, idx) => (
                <HeaderLink
                  key={`header${idx}`}
                  data={item}
                  showDropdown={item?.showDropdown}
                />
              ))}

              {/* button */}
              <div className="h-full py-3">
                <button
                  className={`hover:squeezyBtn px-5 py-4 ${
                    toggleNav
                      ? `${
                          isDatingPage
                            ? "shadow-[0_1px_2px_0_#131313] bg-[#af2828d8] hover:bg-[#1d2838]"
                            : "shadow-[0_1px_2px_0_#131313] bg-[#4f3bffd8] hover:bg-[#1d2838]"
                        }`
                      : `${
                          isDatingPage
                            ? "bg-[#1d2838] hover:bg-[#af2828d8]"
                            : "bg-[#1d2838] hover:bg-[#1f58ad]"
                        }`
                  } hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#ffffff] text-[15px] font-medium transition duration-[0.6s]`}
                >
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
