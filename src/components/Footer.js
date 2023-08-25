import React from "react";

const Footer = () => {
  return (
    <div className="md:hidden ">
      <div className="h-[34px] flex justify-between items-center border shadow-md w-full px-[16px]">
        <div className=" fex justify-center items-center">
          <p className=" text-[12px] font-semibold text-[#7F7F7F]">
            2019 @ Jobsforher
          </p>
        </div>
        <div className=" flex justify-center items-center space-x-[20px]">
          <p className=" text-[12px] font-semibold text-[#7F7F7F]">About Us</p>
          <p className=" text-[12px] font-semibold text-[#7F7F7F]">Pricing</p>
          <p className=" text-[12px] font-semibold text-[#7F7F7F]">FAQ's</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
