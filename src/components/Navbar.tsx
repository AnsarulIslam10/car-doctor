import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="before:w-0 hover:before:w-full before:bg-[#FF0000] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF0000] transition-all duration-300 before:left-0 cursor-pointer capitalize font-semibold text-[#444444]">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="before:w-0 hover:before:w-full before:bg-[#FF0000] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF0000] transition-all duration-300 before:left-0 cursor-pointer capitalize font-semibold text-[#444444]">
        <Link href={"/about"}>About</Link>
      </li>
      <li className="before:w-0 hover:before:w-full before:bg-[#FF0000] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF0000] transition-all duration-300 before:left-0 cursor-pointer capitalize font-semibold text-[#444444]">
        <Link href={"/services"}>Services</Link>
      </li>
      <li className="before:w-0 hover:before:w-full before:bg-[#FF0000] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF0000] transition-all duration-300 before:left-0 cursor-pointer capitalize font-semibold text-[#444444]">
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li className="before:w-0 hover:before:w-full before:bg-[#FF0000] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#FF0000] transition-all duration-300 before:left-0 cursor-pointer capitalize font-semibold text-[#444444]">
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link href={"/"}>
          <Image
            src={"/assets/logo.svg"}
            alt="logo"
            width={107}
            height={87}
          ></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="cursor-pointer">
          <HiOutlineShoppingBag className="size-6 mr-4 text-[#444444]" />
        </button>
        <button className="cursor-pointer">
          <IoIosSearch className="size-6 mr-4 text-[#444444]" />
        </button>
        <Link
          href={"/appointment"}
          className="btn btn-outline rounded-none text-red-500"
        >
          Appointment
        </Link>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 right-0 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
