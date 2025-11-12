import { assets } from "../assets/assets";
import { FaGithub } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import DartMode from "./DartMode";
const PersonInfo = ({ dart, setDart }) => {
  return (
    <>
      <div
        className={` prata-regular md:h-screen md:flex md:fixed md:top-0 md:left-0 md:w-[340px] flex-col items-start text-left px-10 pt-20 xl:w-[540px] md:px-10 xl:pt-24 ${
          dart ? "dart-mode  md:border-r" : "md:bg-[#FCFAF6] xl:bg-[#FCFAF6]"
        }`}
        style={{ flexShrink: 0 }}
      >
        <DartMode dart={dart} setDart={setDart} />
        <img
          className="rounded-full w-30 h-30 xl:w-40 xl:h-40 border-2 border-gray-700"
          src={assets.avatar}
        ></img>
        <h1 className="text-left w-full text-2xl xl:text-4xl font-bold text-gray-900 leading-tight xl:leading-[48px] tracking-tight mb-3 xl:mb-3">
          Võ Minh Tú
        </h1>
        <h2 className="text-left  w-full text-lg xl:text-sm font-normal text-indigo-800 leading-6 xl:leading-7 tracking-tight mb-4 whitespace-nowrap xl:whitespace-nowrap">
          <span className="inline text-sm text-gray-800">Target </span>
          Fullstack devoloper
        </h2>
        <p className="text-left text-gray-700 text-base font-normal leading-6 w-full max-w-full mb-5 xl:mb-5">
          I build performant systems that elevate user experience and product
          scalability. I'm also actively exploring how AI can power the next
          generation of products.
        </p>
        <div className="py-5">
          <div className="flex items-center gap-3 text-md  mb-2 text-left w-full">
            <MdCastForEducation />
            <span>Ton Duc Thang University (2022 - present)</span>
          </div>

          <div className="flex items-center gap-3 text-md  mb-2 text-left w-full">
            <IoLocation />
            <span>District 7, Ho Chi Minh City</span>
          </div>
          <div className="flex items-center gap-3 text-md  mb-2 text-left w-full">
            <FaBirthdayCake />
            <span>5/1/2004</span>
          </div>
        </div>

        <div className="flex flex-col xl:justify-start  gap-2  ">
          <a
            href="https://github.com/TuMinhIT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-3  items-center cursor-pointer transition-opacity duration-300 hover:opacity-70"
            aria-label="GitHub (opens in a new tab)"
          >
            <FaGithub />
            <p>MinhTuIT</p>
            {/* GitHub Icon */}
          </a>

          <a
            href="https://www.facebook.com/minh.tu.329982/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-3  items-center cursor-pointer transition-opacity duration-300 hover:opacity-70"
            aria-label="facebook (opens in a new tab)"
          >
            <FaFacebook />
            <p>Minh Tú</p>
          </a>

          <a
            href="mailto:vominhtu1212004@gmail.com"
            className="flex flex-row gap-3  items-center cursor-pointer transition-opacity duration-300 hover:opacity-70"
            aria-label="Email (opens mail client)"
          >
            <IoMail />
            <p>vominhtu1212004@gmail.com</p>
            {/* Email Icon */}
          </a>
        </div>
      </div>
    </>
  );
};

export default PersonInfo;
