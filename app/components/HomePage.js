"use client";
import React from "react";
import { useEffect, useState } from "react";
// import CII from "../public/Images/Home/CII_Logo.png";
// import NHEC from "../public/Images/Home/NHEC.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style.css";
// import vid from "../../public/Images/video/new.mp4";
import CIIE from "../../public/Images/Home/Background.png";
import aboutSection from "../../public/Images/Home/about.png";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { GoDiamond } from "react-icons/go";
import green from "../../public/Images/Home/green.jpg";

export default function HomePage() {
  const [controlVideo, setVideoControl] = useState(false);
  const handleVideoContoller = () => {
    var ciiVideo = document.getElementById("video");

    if (ciiVideo.paused) {
      ciiVideo.play();
    } else {
      ciiVideo.pause();
    }
    setVideoControl(!controlVideo);
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <section className=" h-[100vh] overflow-hidden">
        <div className=" relative   overflow-hidden ">
          <div className=" absolute md:bottom-[0%] top-0  h-full overflow-hidden  md:h-auto  sm:h-auto smmd:h-auto w-full">
            <div className="  py-6 sm:py-0 smmd:py-0">
              <div className=" container mx-auto">
                <div className="grid grid-cols-12 gap-4 sm:grid-cols-1 smmd:grid-cols-1 md:grid-cols-1 ">
                  <div className="sm:col-span-12 col-span-2"></div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleVideoContoller()}
            className=" absolute w-[100%] mx-auto h-full overflow-hidden  top-0 left-0 bg-[#04040494]   z-40"
          >
            <div className={`  w-full pb-10 absolute top-0`}>
              <div className={` container mx-auto `}>
                <div
                  data-aos="fade-down"
                  className={` grid grid-cols-5 pt-10 pb-4`}
                >
                  <div className={` col-span-2`}>
                    <div className={`   flex  space-x-5 `}>
                      <div className={` flex`}>
                        <LuPhone className={`text-white text-[18px]`} />
                        <p className={`pl-2 leading-5 text-white`}>
                          +91 9361289991
                        </p>
                      </div>
                      <div className={` flex`}>
                        <MdOutlineMail className={`text-white text-[20px]`} />
                        <a href="mailto:balamuruganuiux@gmail.com">
                          <p className={`pl-2 leading-5 text-white`}>
                            balamuruganuiux@gmail.com
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={` col-span-3`}>
                    <div className={` flex justify-end space-x-6`}>
                      <div>
                        {" "}
                        <TiSocialFacebook
                          className={` text-white text-[24px]`}
                        />
                      </div>
                      <div>
                        {" "}
                        <RiTwitterXFill
                          className={` text-white text-[18px] mt-1`}
                        />
                      </div>
                      <div>
                        {" "}
                        <LuInstagram
                          className={` text-white text-[18px] mt-1`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={` grid grid-cols-5`}>
                  <div className={` col-span-2`}>
                    <h1
                      className={`title text-secondary  text-left text-4xl font-semibold`}
                    >
                      <span
                        className={` title text-secondary  text-left text-6xl font-semibold`}
                      >
                        G
                      </span>
                      reen Valley Munnar
                    </h1>
                  </div>
                  <div className={` col-span-3`}>
                    <div
                      className={` flex w-full text-[18px] justify-end pb-7 pt-8 space-x-16`}
                    >
                      <div data-aos="fade-down" className={` text-white  `}>
                        Home
                      </div>
                      <div data-aos="fade-down" className={` text-white  `}>
                        About us
                      </div>
                      <div data-aos="fade-down" className={` text-white  `}>
                        Contact
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`  py-10 pt-16`}>
              <div className={` container mx-auto`}>
                <div className={` block`}>
                  <div className={` grid grid-cols-1`}>
                    <div data-aos="fade-up" className={`  w-[60%] mx-auto`}>
                      <h2
                        data-aos="fade-up"
                        className={` text-secondary text-6xl  text-center heading pb-4 font-semibold`}
                      >
                        Munnar Cottage Restaurant
                      </h2>
                      <p
                        data-aos="fade-up"
                        className={` text-[20px] text-white text-center`}
                      >
                        Munnar, a picturesque hill station in Kerala, India, is
                        renowned for its lush green landscapes, tea plantations,
                        and serene environment. There are several cottage-style
                        restaurants in Munnar that offer a blend of local
                        cuisine and a unique dining experience amidst nature.
                      </p>
                      <div className={` flex justify-center`}>
                        <div
                          data-aos="fade-up"
                          className={` hover:bg-primary hover:text-white transition delay-100 bg-secondary rounded-full px-10 py-2 mt-4 text-[#000]`}
                        >
                          Book Now
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1></h1>
                </div>
              </div>
            </div>

            {controlVideo ? null : (
              <div onClick={() => handleVideoContoller()} className=" ">
                {" "}
              </div>
            )}
          </button>
          <video
            poster={green}
            className="mx-auto h-full w-full  "
            id="video"
            preload="auto"
            loop
            muted
            autoPlay
          >
            <source
              src={
                "https://videos.pexels.com/video-files/6962828/6962828-uhd_3840_2160_30fps.mp4"
              }
              type="video/mp4"
              className=" "
            />
          </video>
        </div>
      </section>
      <section>
        <div className={` container mx-auto`}>
          <div className={`  py-8`}>
            <h1
              data-aos="fade-up"
              className={` text-center py-10  heading text-primary text-4xl  font-semibold`}
            >
              Our Services
            </h1>
            <section className="container mx-auto">
              <div className=" grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 gap-2 p-2">
                <div className="col-span-2">
                  <div data-aos="fade-up" className=" group relative ">
                    <div className=" cursor-pointer transition delay-300  group-hover:from-[#2b4a449e] group-hover:to-[#2b4a44e0] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                      <div className=" group-hover:block hidden">
                        <div className=" heading transition delay-300  tracking-wide text-6xl text-secondary">
                          Fire Camp
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://images.pexels.com/photos/1059042/pexels-photo-1059042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className=" object-cover h-[400px] sm:w-full w-full"
                      alt="Fire Camp"
                    />
                  </div>
                </div>

                <div data-aos="fade-up" className=" col-span-3 h-full gap-2 ">
                  <div className="lg:h-[40%] lge:h-[40%] md:h-[400px] mdsm:h-[400px] sm:h-[400px] relative group bg-[url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg')] overflow-hidden bg-primary  bg-hero bg-no-repeat bg-cover bg-center ">
                    <div className=" cursor-pointer transition delay-300  group-hover:from-[#2b4a449e] group-hover:to-[#2b4a44e0] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                      <div className=" group-hover:block hidden">
                        <div className=" uppercase  heading transition delay-300  tracking-wide text-6xl text-secondary  ">
                          Rooms
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    data-aos="fade-up"
                    className=" h-[58%] mt-2 overflow-hidden "
                  >
                    <div className=" grid grid-cols-2 gap-2  h-full ">
                      <div className="group relative h-full">
                        <img
                          data-aos="fade-up"
                          src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=" Food"
                          className=" h-full object-cover"
                        />
                        <div className=" cursor-pointer transition delay-300  group-hover:from-[#2b4a449e] group-hover:to-[#2b4a44e0]  bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                          <div className=" group-hover:block hidden">
                            <div className=" uppercase  transition delay-300 heading  tracking-wide text-6xl text-secondary ">
                              Food
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-aos="fade-up"
                        className=" group relative h-full "
                      >
                        <img
                          src="https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                          className=" h-full object-cover"
                          data-aos="fade-up"
                        />
                        <div className=" cursor-pointer transition delay-300  group-hover:from-[#2b4a449e] group-hover:to-[#2b4a44e0] bg-gradient-to-t   flex justify-center items-center absolute top-0 h-full w-full p-10 ">
                          <div className=" group-hover:block hidden">
                            <div className=" uppercase  transition delay-300 heading  tracking-wide text-6xl text-secondary ">
                              Swim
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto py-14">
          <h1
            data-aos="fade-up"
            className={` text-center py-4  heading text-primary text-4xl  font-semibold`}
          >
            Why it Best
          </h1>

          <div className={` grid grid-cols-4`}>
            <div className="col-span-1"></div>
            <div className={` col-span-2 text-3xl pt-4 py-2`}>
              The only comprehensive, simple and secure content platform that
              works with most smartphones.
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section>
        {/* <img src={CIIE} alt="" className="h-[100vh]"/> */}

        <div className={` grid grid-cols-5`}>
          <div className="col-span-3">
            <div className="relative">
              <div className="rotate-[270deg] ">
            <h1
              // data-aos="fade-up"
              className={`  text-center absolute w-[60%] bottom-[-50%] -left-32 py-4  pt-8 heading text-white text-6xl  font-semibold`}
            >
Save the forests and change the climate.
            </h1>
            </div>
            <img
              src={`../Images/Home/Intersect.png`}
              alt="home"
              className="h-[90vh]"
            />
            </div>
          </div>
          <div>
          <h1
              data-aos="fade-up"
              className={` text-center py-10  heading text-primary text-4xl  font-semibold`}
            >
              About us
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className={` container mx-auto py-16 pt-0`}>
          <div className={` `}>
            <h1
              data-aos="fade-up"
              className={` text-center py-10 pt-16  heading text-primary text-4xl  font-semibold`}
            >
              Our Cottage
            </h1>

            <div className={` grid grid-cols-3 gap-4`}>
              <div
                data-aos="fade-up"
                className={`shadowcsss  data-aos="fade-up"  rounded-lg p-4`}
              >
                <div className={` relative`}>
                  <img
                    data-aos="fade-up"
                    src={`https://images.pexels.com/photos/3635802/pexels-photo-3635802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    className={` h-[250px] w-full rounded-t-lg`}
                    alt="rooms"
                  />
                  <div
                    data-aos="fade-up"
                    className={`px-4 absolute text-right bottom-0 bg-[#2b4a44b8] w-full text-2xl py-2 title text-secondary font-semibold`}
                  >
                    <div className={` title text-sm`}>Per day</div>
                    INR : 1200/-
                  </div>
                </div>
                <div className={` p-2`}>
                  <h2
                    data-aos="fade-up"
                    className={`px-4 w-full text-2xl py-2 heading text-secondary font-semibold`}
                  >
                    Normal Cottage
                  </h2>
                  <ul data-aos="fade-up" className={` pb-4`}>
                    <li className={` px-2 pb-1 pt-2 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Free Wifi
                    </li>
                    <li className={` px-2 pt-1 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Mountain View
                    </li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up" className={`shadowcsss  rounded-lg p-4`}>
                <div className={` relative`}>
                  <img
                    src={`https://images.pexels.com/photos/5461590/pexels-photo-5461590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    className={` h-[250px] w-full rounded-t-lg`}
                    alt="rooms"
                    data-aos="fade-up"
                  />
                  <div
                    data-aos="fade-up"
                    className={`px-4 absolute text-right bottom-0 bg-[#2b4a44b8] w-full text-2xl py-2 title text-secondary font-semibold`}
                  >
                    <div className={` title text-sm`}>Per day</div>
                    INR : 1800/-
                  </div>
                </div>
                <div className={` p-2`}>
                  <h2
                    data-aos="fade-up"
                    className={`px-4 w-full text-2xl py-2 heading text-secondary font-semibold`}
                  >
                    Deluxe Cottages
                  </h2>
                  <ul data-aos="fade-up" className={` pb-4`}>
                    <li className={` px-2 pb-1 pt-2 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Free Wifi
                    </li>
                    <li className={` px-2 pt-1 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Mountain View
                    </li>
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up" className={`shadowcsss  rounded-lg p-4`}>
                <div className={` relative`}>
                  <img
                    src={`https://images.pexels.com/photos/17227603/pexels-photo-17227603/free-photo-of-fan-over-bed-in-hotel-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    className={` h-[250px] w-full rounded-t-lg`}
                    alt="rooms"
                    data-aos="fade-up"
                  />
                  <div
                    data-aos="fade-up"
                    className={`px-4 absolute text-right bottom-0 bg-[#2b4a44b8] w-full text-2xl py-2 title text-secondary font-semibold`}
                  >
                    <div className={` title text-sm`}>Per day</div>
                    INR : 3500/-
                  </div>
                </div>
                <div className={` p-2`}>
                  <h2
                    data-aos="fade-up"
                    className={`px-4 w-full text-2xl py-2 heading text-secondary font-semibold`}
                  >
                    Luxury Cottages
                  </h2>
                  <ul data-aos="fade-up" className={` pb-4`}>
                    <li className={` px-2 pb-1 pt-2 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Free Wifi
                    </li>
                    <li className={` px-2 pt-1 flex text-[#222] `}>
                      {" "}
                      <GoDiamond
                        className={` text-secondary mr-2 mt-1 `}
                      />{" "}
                      Mountain View
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`mt-4 flex justify-center`}>
              <button
                className={`mx-6  hover:bg-primary hover:text-white transition delay-100 bg-secondary rounded-full px-10 py-2 mt-4 text-[#000]`}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className={`mt-4 bg-primary py-16`}>
          <div className={` container mx-auto`}>
            <div className={` grid grid-cols-5`}>
              <div className={` col-span-2`}>
                <div>
                  <h1
                    className={`title text-secondary  text-left text-2xl font-semibold`}
                  >
                    <span
                      className={` title text-secondary  text-left text-5xl font-semibold`}
                    >
                      G
                    </span>
                    reen Valley Munnar
                  </h1>
                </div>
                <div
                  className={` flex w-full justify-start pb-7 pt-4 space-x-16`}
                >
                  <div className={` text-white  `}>About us</div>
                  <div className={` text-white  `}>Contact</div>
                </div>
              </div>
              <div className={` col-span-3`}>
                <div className={` w-full flex justify-end`}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7832.39363536946!2d77.130031!3d11.023855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba855d839321127%3A0xedfb5f33a5832a60!2sRVS%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sus!4v1680609741281!5m2!1sen!2sus"
                    width="300"
                    height="100"
                    // frameborder="0"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={` grid grid-cols-5 pt-10 pb-4`}>
              <div className={` col-span-2`}>
                <div className={`   flex  space-x-5 `}>
                  <div className={` flex`}>
                    <LuPhone className={`text-white text-[18px]`} />
                    <p className={`pl-2 leading-5 text-white`}>
                      +91 9361289991
                    </p>
                  </div>
                  <div className={` flex`}>
                    <MdOutlineMail className={`text-white text-[20px]`} />
                    <a href="mailto:balamuruganuiux@gmail.com">
                      <p className={`pl-2 leading-5 text-white`}>
                        balamuruganuiux@gmail.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className={` col-span-3`}>
                <div className={` flex justify-end space-x-6`}>
                  <div>
                    {" "}
                    <TiSocialFacebook className={` text-white text-[24px]`} />
                  </div>
                  <div>
                    {" "}
                    <RiTwitterXFill
                      className={` text-white text-[18px] mt-1`}
                    />
                  </div>
                  <div>
                    {" "}
                    <LuInstagram className={` text-white text-[18px] mt-1`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
