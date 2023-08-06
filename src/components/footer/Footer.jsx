import React from "react";
const Footer = () => {
  return (
    <>
      <section className="sub-footer pt-20 bg-darkblue">
        <div className="container mx-auto grid lg:grid-cols-1">
          <div className="f-text ">
            <h5 className="text-2xl text-white font-bold sm:text-center">
              The solar system
            </h5>
            <p className=" text-base text-white mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* end container */}
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 lg:mt-20 lg:mb-20 lg:gap-x-24 xs:mt-10 xs:mb-10 ">
          <div className="footer lg:col-span-1 flex flex-col pts text-primary  gap-2">
            <h3 className=" text-xl  font-bold mt-8 mb-8 text-white ">
              Planets
            </h3>
            <a className="flx" href="#/body/mercure">
              Mercury
            </a>
            <a className="flx" href="#/body/venus">
              Venus
            </a>
            <a className="flx" href="#/body/terre">
              Earth
            </a>
            <a className="flx" href="#/body/mars">
              Mars
            </a>
            <a className="flx" href="#/body/jupiter">
              Jupiter
            </a>
            <a className="flx" href="#/body/saturne">
              Saturn
            </a>
            <a className="flx" href="#/body/uranus">
              Uranus
            </a>
            <a className="flx" href="#/body/neptune">
              Neptune
            </a>
          </div>

          <div className="footer lg:col-span-1 flex flex-col pts text-primary gap-2">
            <h3 className=" text-xl text-white font-bold mt-8 mb-8 ">
              How it works
            </h3>
            <a className="flx" href="#/body/mercure">
              Download app
            </a>
            <a className="flx" href="#/body/venus">
              Developer portal
            </a>
          </div>

          <div className="footer lg:col-span-1 flex flex-col pts text-primary gap-2">
            <h3 className=" text-xl text-white font-bold mt-8 mb-8 ">About</h3>
            <a className="flx" href="#/body/mercure">
              News and press
            </a>
            <a className="flx" href="#/body/venus">
              Personal data and collection
            </a>
            <a className="flx" href="#/body/terre">
              FAQ
            </a>
          </div>
        </div>
        <div className="container max-auto thunderline border-b-1 border-1 bg-ftrborder h-px m-auto"></div>
        <div className="container max-auto text-primary m-auto py-10 lg:flex lg:justify-between md:flex md:justify-between md:flex-row sm:flex sm:justify-between sm:flex-row  xs:flex xs:gap-2 lg:flex-row xs:flex-col-reverse md:gap-2 ">
          <p className="ftr-copy lg:flex text-xs md:flex sm:flex   ">
            Copyright 2022 The Solar System, All rights reserved.
          </p>
          <div className="trm lg:flex lg:flex-row lg:gap-44 text-xs md:flex-row md:flex xs:flex xs:flex-col xs:gap-2 md:gap-12 sm:gap-12 sm:flex-row sm:flex ">
            <p className="ts-text">Terms of Service</p>
            <p className="pp-text">Privacy Policy</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
