import Link from "next/link";
import React from "react";
import { BiArrowToTop } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
    
                <h1 className=" text-lg font-semibold" >Copyright © 2025- All right reserved</h1>
                

       <Link href="/" >
       <button className="text-6xl bg-green-500 hover:bg-green-700 rounded-3xl text-black " > <BiArrowToTop></BiArrowToTop> </button>
       </Link>   
           
           
      </div>
    </footer>
  );
};

export default Footer;
