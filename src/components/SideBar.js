import React from "react";
import HpLogo from "../assests/images/hp-logo.png";
import Application from "../assests/images/profiles.png";
import Enterprise from "../assests/images/enterprise.png";
import Collaboration from "../assests/images/collaboration.png";
import Conversation from "../assests/images/conversation.png";

const SideBar = () => {
  return (
    <>
      <div className="">
        <div className="hidden md:flex">
          <div className="flex flex-col h-screen    bg-[#404040] shadow w-[270px]">
            <div className="">
              <div className="pt-[24px]">
                <div className="flex  items-center ml-[17px]">
                  <img alt=""
                    className=" rounded-full bg-white w-[48px] h-[48px]"
                    src={HpLogo}
                  />
                  <h2 className=" font-light text-[40px] text-[#FFFFFF] ml-[9px]">
                    Hello,
                  </h2>
                </div>
                <div className="flex  items-center ml-[22px]">
                  <span className=" font-light text-[22px] text-[#FFFFFF] block whitespace-pre-line ">
                    Hewlett Packard E...
                  </span>
                  <span className=" text-[#99CA3B]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className=" ml-[26px] w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className=" pt-[48px] pl-[19px]">
                <ul className=" space-y-[29px] text-sm">
                  <li className="rounded-sm ">
                    <a
                      href="/"
                      className="flex items-center text-[#A2A3B7] gap-[21px] font-[500] text-[16px] "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#A2A3B7"
                        width="24.53"
                        height="24.53"
                        viewBox="0 0 24.53 24.53"
                      >
                        <defs></defs>
                        <path
                          class="a"
                          d="M9.454,8.177H1.789A1.791,1.791,0,0,1,0,6.388v-4.6A1.791,1.791,0,0,1,1.789,0H9.454a1.791,1.791,0,0,1,1.789,1.789v4.6A1.791,1.791,0,0,1,9.454,8.177ZM1.789,1.533a.256.256,0,0,0-.255.255v4.6a.256.256,0,0,0,.255.256H9.454a.256.256,0,0,0,.256-.256v-4.6a.256.256,0,0,0-.256-.255Zm0,0"
                          transform="translate(0 0)"
                        />
                        <path
                          class="a"
                          d="M9.454,227.641H1.789A1.791,1.791,0,0,1,0,225.853V215.121a1.791,1.791,0,0,1,1.789-1.789H9.454a1.791,1.791,0,0,1,1.789,1.789v10.732A1.791,1.791,0,0,1,9.454,227.641ZM1.789,214.865a.256.256,0,0,0-.255.256v10.732a.256.256,0,0,0,.255.255H9.454a.256.256,0,0,0,.256-.255V215.121a.256.256,0,0,0-.256-.256Zm0,0"
                          transform="translate(0 -203.111)"
                        />
                        <path
                          class="a"
                          d="M286.786,349.509h-7.666a1.791,1.791,0,0,1-1.789-1.789v-4.6a1.791,1.791,0,0,1,1.789-1.789h7.666a1.791,1.791,0,0,1,1.789,1.789v4.6A1.791,1.791,0,0,1,286.786,349.509Zm-7.666-6.644a.256.256,0,0,0-.256.256v4.6a.256.256,0,0,0,.256.255h7.666a.256.256,0,0,0,.255-.255v-4.6a.256.256,0,0,0-.255-.256Zm0,0"
                          transform="translate(-264.045 -324.979)"
                        />
                        <path
                          class="a"
                          d="M286.786,14.309h-7.666a1.791,1.791,0,0,1-1.789-1.789V1.789A1.791,1.791,0,0,1,279.121,0h7.666a1.791,1.791,0,0,1,1.789,1.789V12.521A1.791,1.791,0,0,1,286.786,14.309ZM279.121,1.533a.256.256,0,0,0-.256.255V12.521a.256.256,0,0,0,.256.256h7.666a.256.256,0,0,0,.255-.256V1.789a.256.256,0,0,0-.255-.255Zm0,0"
                          transform="translate(-264.045 0)"
                        />
                      </svg>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a
                      href="/"
                      className="flex items-center  text-[#A2A3B7] gap-[21px] font-[500] text-[16px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#A2A3B7"
                        width="24.53"
                        height="21.56"
                        viewBox="0 0 24.53 21.56"
                      >
                        <defs>
                          <style></style>
                        </defs>
                        <path
                          class="a"
                          d="M23.816,2.875H17.3V2.156A2.158,2.158,0,0,0,15.14,0H9.391A2.158,2.158,0,0,0,7.235,2.156v.719H.719A.721.721,0,0,0,0,3.593V19.4A2.158,2.158,0,0,0,2.156,21.56H22.374A2.158,2.158,0,0,0,24.53,19.4V3.606a.7.7,0,0,0-.714-.731ZM8.672,2.156a.72.72,0,0,1,.719-.719H15.14a.72.72,0,0,1,.719.719v.719H8.672ZM22.814,4.312l-2.232,6.7a.717.717,0,0,1-.682.491H15.859V10.78a.719.719,0,0,0-.719-.719H9.391a.719.719,0,0,0-.719.719V11.5H4.629a.717.717,0,0,1-.682-.491l-2.232-6.7ZM14.421,11.5v1.437H10.109V11.5ZM23.093,19.4a.72.72,0,0,1-.719.719H2.156a.72.72,0,0,1-.719-.719V8.022l1.147,3.44a2.153,2.153,0,0,0,2.045,1.474H8.672v.719a.719.719,0,0,0,.719.719H15.14a.719.719,0,0,0,.719-.719v-.719H19.9a2.153,2.153,0,0,0,2.045-1.474l1.147-3.44Zm0,0"
                          transform="translate(0 0)"
                        />
                      </svg>
                      <span>Jobs</span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a
                      href="/"
                      className="flex items-center  text-[#A2A3B7] gap-[21px] font-[500] text-[16px]"
                    >
                      <img alt="" className="w-[24px] h-[28px]" src={Application} />
                      <span>Applications</span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a
                      href="/"
                      className="flex items-center  text-[#A2A3B7] gap-[21px] font-[500] text-[16px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#A2A3B7"
                        width="23.518"
                        height="23.559"
                        viewBox="0 0 23.518 23.559"
                      >
                        <defs>
                          <style></style>
                        </defs>
                        <g transform="translate(-0.44)">
                          <g transform="translate(0.44)">
                            <g transform="translate(0)">
                              <path
                                class="a"
                                d="M11.19,21.678H3.2a.919.919,0,0,1-.875-1.2,7.087,7.087,0,0,1,6.733-4.794,6.871,6.871,0,0,1,3.95,1.239.919.919,0,1,0,1.051-1.507,8.729,8.729,0,0,0-1.832-.978,4.676,4.676,0,0,0,1.521-3.085,6.915,6.915,0,0,1,8.768-.717.919.919,0,1,0,1.051-1.507,8.729,8.729,0,0,0-1.832-.978,4.685,4.685,0,1,0-6.308-.01q-.192.074-.382.157a8.721,8.721,0,0,0-1.618.929A4.684,4.684,0,1,0,5.909,14.42a8.834,8.834,0,0,0-5.334,5.5,2.756,2.756,0,0,0,2.624,3.6H11.19a.919.919,0,0,0,0-1.837ZM18.585,1.837a2.848,2.848,0,1,1-2.848,2.848A2.851,2.851,0,0,1,18.585,1.837ZM9.077,8.124A2.848,2.848,0,1,1,6.23,10.971,2.851,2.851,0,0,1,9.077,8.124Z"
                                transform="translate(-0.44)"
                              />
                              <path
                                class="a"
                                d="M274.108,322.521a.919.919,0,0,0-1.282.212l-4.528,6.324a.525.525,0,0,1-.755.039l-2.931-2.815a.919.919,0,0,0-1.272,1.325l2.934,2.817a2.368,2.368,0,0,0,1.63.651q.078,0,.156-.005a2.368,2.368,0,0,0,1.684-.877l.031-.041,4.546-6.35A.918.918,0,0,0,274.108,322.521Z"
                                transform="translate(-250.973 -307.517)"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span>Followers</span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a
                      href="/"
                      className="flex items-center text-[#A2A3B7] gap-[21px] font-[500] text-[16px] "
                    >
                      <img alt="" className="w-[24px] h-[28px]" src={Enterprise} />

                      <span>My Inventory</span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a
                      href="/"
                      className="flex items-center text-[#A2A3B7] gap-[21px] font-[500] text-[16px] "
                    >
                      <img alt="" className="w-[24px] h-[28px]" src={Enterprise} />

                      <span>Company Profile</span>
                    </a>
                  </li>
                  <li className="rounded-sm">
                    <a
                      href="/"
                      className="flex items-center  text-[#A2A3B7] gap-[21px] font-[500] text-[16px]"
                    >
                      <img alt="" className="w-[24px] h-[28px]" src={Collaboration} />

                      <span>All Users</span>
                    </a>
                  </li>
                  <li className="rounded-sm ">
                    <a
                      href="/"
                      className="flex items-center  text-[#99CA3B] gap-[21px] font-[500] text-[16px]"
                    >
                      <img alt="" className="w-[30px] h-[20px]" src={Conversation} />

                      <span>My Account</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pt-[80px] text-[12px] text-[#99CA3B] font-[500]  ml-[20px]">
                <p>Contact Us -</p>
                <p>Email: admin@jobsforher.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
