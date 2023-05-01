import React from "react";
import * as ICON from "../configs/icon";
import * as SVGS from "../configs/svgs";
import * as COMPONENT from "../components";

export default function Footer() {
  return (
    <div className="w-full -mt-5 text-white absolute z-10">
      <div className="w-full flex justify-center items-end">
        <div className="w-9 h-9 rounded-full bg-white relative">
          <div className="w-5 h-5 bg-gray-900 absolute bottom-0 right-0 -z-10"></div>
        </div>
        <div className="w-[80%] h-fit bg-gray-900 rounded-t-2xl">
          <div className="w-full p-3 flex justify-around items-center">
            <div className="w-1/2 text-base md:text-3xl font-semibold flex items-center justify-center">
              Let’s discuss and bring your vision to life.
            </div>
            <div className="hidden md:block">
              <COMPONENT.Button leftIcon={ICON.IC_Arrowright}>
                Let’s Talk
              </COMPONENT.Button>
            </div>
            <div className="block md:hidden">
              <COMPONENT.Button size="medium">Let's Talk</COMPONENT.Button>
            </div>
          </div>
        </div>
        <div className="w-9 h-9 rounded-full bg-white relative">
          <div className="w-5 h-5 bg-gray-900 absolute bottom-0 left-0-0 -z-10"></div>
        </div>
      </div>
      <div className="w-full h-auto p-3 px-10 bg-gray-900 bg-footer bg-no-repeat bg-cover bg-center font-extralight">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 align-middle mt-10 ">
          <div className="col-span-1 mb-12 ">
            <div className="flex gap-2 mb-10">
              <img src={SVGS.LogoText} />
              <p className="text-3xl font-bold italic">Agenone</p>
            </div>
            <p className="w-[70%] mb-10">
              We're a team of experienced designers, developers, and marketers,
              passionate about delivering exceptional digital solutions.
            </p>
            <p>hello@agenone.com</p>
          </div>
          <div className="col-span-1 flex justify-around ">
            <div className="flex flex-col gap-4">
              <p className="font-semibold mb-2">Menu</p>
              {["Home", "Service", "About Us", "Project", "Contact"].map(
                (index, _idx) => (
                  <div key={_idx}>
                    <a href={`#${index}`}>{index}</a>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold mb-2">Support</p>
              {["FAQ", "Privacy Policy", "Terms of Services"].map(
                (index, _idx) => (
                  <div key={_idx}>
                    <a href="#">{index}</a>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold mb-2">Social Media</p>
              {["LinkedIn", "Twitter", "Instagram", "Dribble", "Behance"].map(
                (index, _idx) => (
                  <div key={_idx}>
                    <a href="#">{index}</a>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10 p-5 border-t border-gray-500">
          <p>Copyright © 2023 by Agenone. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
