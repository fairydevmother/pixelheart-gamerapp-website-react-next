"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import logo from "./img/logo.png"
import Image from 'next/image';
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Chat",
    path: "#chat",
  },
  {
    title: "Join",
    path: "#join",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto bg-gradient-to-r from-purple-900 to-pink-500 top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl text-purple font-semibold"
        >
        <Image src={logo} alt="Description of the image" width={130}  />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
             
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
             
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;