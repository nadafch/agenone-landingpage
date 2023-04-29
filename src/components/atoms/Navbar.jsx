import React, { useState } from "react";
import * as SVGS from "../../configs/svgs";
import * as Icon from "../../configs/icon";
import * as COMPONENTS from "../index";
import clsx from "classnames";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="w-full p-3 flex flex-wrap justify-between items-center bg-gray-900 sticky top-0 z-50">
      <div className="flex items-center mx-2 gap-1">
        <img className="w-8 h-12 xl:w-10 xl:h-14 ml-2" src={SVGS.LogoText} />
        <div className="text-white italic font-bold text-2xl xl:text-3xl">
          Agenone
        </div>
      </div>
      <div className="hidden lg:flex justify-around gap-10 text-white xl:text-xl">
        {["Home", "Services", "Project", "About Us"].map((index, label) => {
          return (
            <div key={label} role="button" onClick={() => setActiveMenu(label)}>
              <a href={`#${index}`}>{index}</a>
              {activeMenu === label && (
                <div
                  className={clsx(
                    "w-full h-[3px] mt-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-70"
                  )}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mr-20 hidden lg:block">
        <COMPONENTS.Button size="medium">Contact Us</COMPONENTS.Button>
      </div>
      <div className="block lg:hidden mr-4">
        <img src={Icon.Menu} />
      </div>
    </div>
  );
}
