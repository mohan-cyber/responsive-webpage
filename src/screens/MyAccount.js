import React from "react";
import Image from "../assests/images/Image.png";

const MyAccount = () => {
  return (
    <>
      <div className="bg-[#F1F2F7] w-full px-[15px] md:px-[30px] pb-[11px] ">
        <div className=" divide-x-2  divide-[#999999] pt-[23px] pb-[16px] hidden md:flex">
          <p className=" text-[12px] font-[500] text-[#999999] pr-[10px]">
            Dashboard
          </p>
          <p className="text-[12px] font-semibold text-[#2680EB] pl-[10px]">
            My Account
          </p>
        </div>
        <div className=" bg-[#FFFFFF]  border  rounded-sm shadow py-[21px]   w-full">
          <div className=" flex items-center gap-[18px] pl-[24px]  pb-[32px]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#99ca3b"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <defs>
                  <style></style>
                </defs>
                <path
                  class="a"
                  d="M18,7.875H4.275l6.3-6.3L9,0,0,9l9,9,1.575-1.575-6.3-6.3H18Z"
                />
              </svg>
            </span>
            <h1 className="text-[16px] text-[#484848] font-semibold">
              My Account
            </h1>
          </div>

          <div className=" md:px-[24px]">
            <div className=" flex items-center justify-between w-full bg-[#F8F8F8] px-[24px] pt-[15px] pb-[16px] ">
              <h2 className="text-[16px] text-[#484848] font-semibold">
                My Profile
              </h2>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#99ca3c"
                  width="18.114"
                  height="18.017"
                  viewBox="0 0 18.114 18.017"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <path
                    class="a"
                    d="M17.593,29.207a.474.474,0,0,0-.475.474V33.89a1.425,1.425,0,0,1-1.424,1.422H2.374A1.425,1.425,0,0,1,.949,33.89V21.538a1.425,1.425,0,0,1,1.424-1.422H6.589a.474.474,0,1,0,0-.948H2.374A2.374,2.374,0,0,0,0,21.538V33.89a2.374,2.374,0,0,0,2.374,2.37h13.32a2.374,2.374,0,0,0,2.374-2.37V29.681A.474.474,0,0,0,17.593,29.207Zm0,0"
                    transform="translate(0 -18.243)"
                  />
                  <path
                    class="a"
                    d="M156.367,39.475l7.147-7.147,2.305,2.305-7.147,7.147Zm0,0"
                    transform="translate(-149.275 -30.759)"
                  />
                  <path
                    class="a"
                    d="M132.543,199.766l2.547-.706-1.842-1.842Zm0,0"
                    transform="translate(-126.281 -187.915)"
                  />
                  <path
                    class="a"
                    d="M318.777.626a1.225,1.225,0,0,0-1.731,0l-.519.519,2.3,2.305.519-.519a1.225,1.225,0,0,0,0-1.731Zm0,0"
                    transform="translate(-301.595 -0.269)"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="   md:px-[24px] pb-[7px]">
            <div className=" border px-[21px] py-[21px]">
              <div className=" flex justify-start items-center   gap-[36px] pb-[23px]">
                <div className=" relative ">
                  <img
                    className=" border p-1 md:w-[118px] md:h-[118px] w-[76px] h-[76px] rounded-full"
                    src={Image}
                  />
                  <span className=" absolute right-0 top-12 md:top-20 border rounded-full p-2 bg-[#FFFFFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#99ca3c"
                      width="18.114"
                      height="18.017"
                      viewBox="0 0 18.114 18.017"
                    >
                      <defs>
                        <style></style>
                      </defs>
                      <path
                        class="a"
                        d="M17.593,29.207a.474.474,0,0,0-.475.474V33.89a1.425,1.425,0,0,1-1.424,1.422H2.374A1.425,1.425,0,0,1,.949,33.89V21.538a1.425,1.425,0,0,1,1.424-1.422H6.589a.474.474,0,1,0,0-.948H2.374A2.374,2.374,0,0,0,0,21.538V33.89a2.374,2.374,0,0,0,2.374,2.37h13.32a2.374,2.374,0,0,0,2.374-2.37V29.681A.474.474,0,0,0,17.593,29.207Zm0,0"
                        transform="translate(0 -18.243)"
                      />
                      <path
                        class="a"
                        d="M156.367,39.475l7.147-7.147,2.305,2.305-7.147,7.147Zm0,0"
                        transform="translate(-149.275 -30.759)"
                      />
                      <path
                        class="a"
                        d="M132.543,199.766l2.547-.706-1.842-1.842Zm0,0"
                        transform="translate(-126.281 -187.915)"
                      />
                      <path
                        class="a"
                        d="M318.777.626a1.225,1.225,0,0,0-1.731,0l-.519.519,2.3,2.305.519-.519a1.225,1.225,0,0,0,0-1.731Zm0,0"
                        transform="translate(-301.595 -0.269)"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="text-[22px] text-[#484848] font-semibold pb-[10px]">
                    Divya Chatterjee
                  </h3>
                  <h4 className="text-[12px] text-[#B2B2B2] font-[500]">
                    Designation
                  </h4>
                  <p className="text-[14px] text-[#484848] font-[500] pb-[10px]">
                    Assistant Manager - HR
                  </p>
                  <h4 className="text-[12px] text-[#B2B2B2] font-[500]">
                    Company Name
                  </h4>
                  <p className="text-[14px] text-[#484848] font-[500]">
                    Company Name
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-[12px] text-[#B2B2B2] font-[500]">
                  About Me
                </h4>
                <p className="text-[14px] text-[#484848] font-[500]">
                  Microsoft enables digital transformation for the era of an
                  intelligent cloud and an intelligent edge. Its mission is to
                  empower every person and every organization on the planet to
                  achieve more. Microsoft set up its India operations in 1990.
                  Microsoft in India offers its global cloud services from local
                  data centers to accelerate digital transformation across
                  Indian start-ups, businesses, and government agencies.
                </p>
              </div>
            </div>
          </div>
          <div className="md:px-[24px] md:flex  gap-[7px]">
            <div className="  md:w-1/2">
              <div className=" flex items-center justify-between w-full bg-[#F8F8F8] px-[24px] pt-[15px] pb-[16px] ">
                <h2 className="text-[16px] text-[#484848] font-semibold">
                  My Account Settings
                </h2>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#99ca3c"
                    width="18.114"
                    height="18.017"
                    viewBox="0 0 18.114 18.017"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <path
                      class="a"
                      d="M17.593,29.207a.474.474,0,0,0-.475.474V33.89a1.425,1.425,0,0,1-1.424,1.422H2.374A1.425,1.425,0,0,1,.949,33.89V21.538a1.425,1.425,0,0,1,1.424-1.422H6.589a.474.474,0,1,0,0-.948H2.374A2.374,2.374,0,0,0,0,21.538V33.89a2.374,2.374,0,0,0,2.374,2.37h13.32a2.374,2.374,0,0,0,2.374-2.37V29.681A.474.474,0,0,0,17.593,29.207Zm0,0"
                      transform="translate(0 -18.243)"
                    />
                    <path
                      class="a"
                      d="M156.367,39.475l7.147-7.147,2.305,2.305-7.147,7.147Zm0,0"
                      transform="translate(-149.275 -30.759)"
                    />
                    <path
                      class="a"
                      d="M132.543,199.766l2.547-.706-1.842-1.842Zm0,0"
                      transform="translate(-126.281 -187.915)"
                    />
                    <path
                      class="a"
                      d="M318.777.626a1.225,1.225,0,0,0-1.731,0l-.519.519,2.3,2.305.519-.519a1.225,1.225,0,0,0,0-1.731Zm0,0"
                      transform="translate(-301.595 -0.269)"
                    />
                  </svg>
                </span>
              </div>
              <div className="border px-[21px] py-[21px]">
                <div className="grid md:grid-cols-2  grid-cols-1 gap-[37px]">
                  <div>
                    <h4 className="text-[12px] text-[#B2B2B2] font-[500]">
                      Full Name*
                    </h4>
                    <p className="text-[14px] text-[#484848] font-[500]">
                      Divya Chatterjee
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[12px] text-[#B2B2B2] font-[500]">
                      Designation
                    </h4>
                    <p className="text-[14px] text-[#484848] font-[500]">
                      Assistant Manager - HR
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[12px] text-[#B2B2B2] font-[500]">
                      Phone / Landline*
                    </h4>
                    <p className="text-[14px] text-[#484848] font-[500]">
                      7012248563
                    </p>
                  </div>
                  <div>
                    <p className="text-[16px] text-[#2680EB] font-semibold">
                      Change password
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  md:w-1/2">
              <div className=" flex items-center justify-between w-full bg-[#F8F8F8] px-[24px] pt-[15px] pb-[16px] ">
                <h2>Application Settings</h2>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#99ca3c"
                    width="18.114"
                    height="18.017"
                    viewBox="0 0 18.114 18.017"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <path
                      class="a"
                      d="M17.593,29.207a.474.474,0,0,0-.475.474V33.89a1.425,1.425,0,0,1-1.424,1.422H2.374A1.425,1.425,0,0,1,.949,33.89V21.538a1.425,1.425,0,0,1,1.424-1.422H6.589a.474.474,0,1,0,0-.948H2.374A2.374,2.374,0,0,0,0,21.538V33.89a2.374,2.374,0,0,0,2.374,2.37h13.32a2.374,2.374,0,0,0,2.374-2.37V29.681A.474.474,0,0,0,17.593,29.207Zm0,0"
                      transform="translate(0 -18.243)"
                    />
                    <path
                      class="a"
                      d="M156.367,39.475l7.147-7.147,2.305,2.305-7.147,7.147Zm0,0"
                      transform="translate(-149.275 -30.759)"
                    />
                    <path
                      class="a"
                      d="M132.543,199.766l2.547-.706-1.842-1.842Zm0,0"
                      transform="translate(-126.281 -187.915)"
                    />
                    <path
                      class="a"
                      d="M318.777.626a1.225,1.225,0,0,0-1.731,0l-.519.519,2.3,2.305.519-.519a1.225,1.225,0,0,0,0-1.731Zm0,0"
                      transform="translate(-301.595 -0.269)"
                    />
                  </svg>
                </span>
              </div>
              <div className="border px-[21px] py-[21px] space-y-[14px]">
                <p className="text-[12px] text-[#B2B2B2] font-[500]">
                  Receive job applications via
                </p>
                <div>
                  <label className="flex justify-start items-center">
                    <input type="radio" checked name="gender" value="male" />
                    <span className="text-[12px] text-[#484848] font-[500] ml-[5px]">
                      Only on my dashboard
                    </span>
                  </label>
                </div>
                <div>
                  <label className="flex justify-start items-center">
                    <input type="radio" name="gender" value="female" />
                    <span className="text-[12px] text-[#484848] font-[500] ml-[5px]">
                      Email and on my dashboard
                    </span>
                  </label>
                </div>

                <p className="text-[12px] text-[#B2B2B2] font-[500] ">
                  *Please note, this setting will not impact your old job
                  postings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
