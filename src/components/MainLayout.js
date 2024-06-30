import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import logo from "./logo/vignette.png";
import { FaHome } from "react-icons/fa";
import { PiVignetteFill } from "react-icons/pi";
import { FaEarthEurope } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import vtlLogo from "../components/logo/VTL_Development--.png";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  let [isOpen, setIsOpen] = useState(false);
  const myDate = new Date().getFullYear();

  let meniBar = [
    { name: "Home", link: "/", icon: <FaHome /> },
    { name: "Buy E-vignette", link: "/BuyVignette", icon: <PiVignetteFill /> },
    { name: "Countries", link: "/Countries", icon: <FaEarthEurope /> },
    { name: "Contact", link: "/Contact", icon: <IoMdContacts /> },
  ];
  return (
    <div>
      <header class="rounded-b-3xl font-MontserratExtraLight fixed  top-0 z-30 w-full px-2 py-6 bg-gradient-to-b from-blue-900 to-blue-300 bg-opacity-100  sm:px-4 shadow-xl items-center text-xl">
        <Link to="/">
          <div class="items-center sm:justify-items-center">
            <img
              src={logo}
              alt="logo vignette"
              class="w-16 md:ml-10 md:w-16 lg:w-16"
            ></img>

            <p>Digital vignette</p>
          </div>
        </Link>
        <div class="w-full h-22 fixed  top-0 left-0 ">
          <div class="md:flex items-center py-6 md:px-12 px-7">
            <div
              onClick={() => setIsOpen(!isOpen)}
              class="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-14 "
            >
              {isOpen ? (
                <IoMdClose class="bg-white-600 text-white" />
              ) : (
                <FaBars class="bg-white-600 text-white" />
              )}
            </div>
            <ul
              class={`md:p-4 ml-auto md:flex md:flex-wrap md:items-center md:pb-0 pb-12 absolute md:static text-white lg:bg-inherit md:bg-inherit bg-blue-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-out
              ${isOpen ? "top-2 font-light italic p-8 " : "top-[-480px]"}`}
            >
              {meniBar.map((link) => (
                <li whileHover={{ scale: 1.2 }} class="items-center">
                  <a
                    href={link.link}
                    class="-mt-6 mr-auto md:flex md:flex-wrap items-center p-2"
                  >
                    <div class="flex lg:hidden md:hidden">{link.icon}</div>
                    <div>{link.name}</div>
                    <hr></hr>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <main class="mt-16 ">{children}</main>

      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4 font-MontserratVariableFont">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={vtlLogo} class="h-12" alt="VTL Development" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                VTLDevelopment
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="/Contact" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {myDate}{" "}
            <a href="#" class="hover:underline">
              VTLDevelopment
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
export default MainLayout;
