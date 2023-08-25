import React from "react";

const MobileSideBar = () => {
  return (
    <div className="md:hidden ">
      <div className="h-[34px] flex justify-start items-center border shadow-md w-full mb-[5px] whitespace-nowrap overflow-scroll px-[16px]">
        <ul className=" flex space-x-5 ">
          <li className="text-[14px] font-[500] text-[#B2B2B2]">
            My Inventory
          </li>
          <li className="text-[14px] font-[500] text-[#B2B2B2]">
            Company Profile
          </li>
          <li className="text-[14px] font-[500] text-[#B2B2B2]">All Users</li>
          <li className="text-[14px] font-[500] text-[#99CA3B]">My Account</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSideBar;
