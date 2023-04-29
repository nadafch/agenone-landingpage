import React, { useState } from "react";
import clsx from "classnames";

export default function ToogleButton() {
  const services = [
    { full: "UI/UX Designer", short: "UI/UX" },
    { full: "Digital Marketing", short: "Digital" },
    { full: "Social Media Management", short: "SMM" },
    { full: "Development", short: "Dev" },
  ];
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="w-full bg-cultured p-2 lg:p-3 rounded-full flex justify-center items-center gap-3 lg:gap-8 text-stone-400 relative text-lg">
      {services.map((index, _idx) => (
        <div key={_idx}>
          <div
            role="button"
            className={clsx("hidden lg:block p-3 px-2", {
              "bg-gradient-to-r from-primary to-secondary text-white  rounded-full":
                activeMenu === _idx,
            })}
            onClick={() => setActiveMenu(_idx)}
          >
            {index.full}
          </div>
          <div
            role="button"
            className={clsx("block lg:hidden text-center p-2 px-3", {
              "bg-gradient-to-r from-primary to-secondary text-white rounded-full":
                activeMenu === _idx,
            })}
            onClick={() => setActiveMenu(_idx)}
          >
            {index.short}
          </div>
        </div>
      ))}
    </div>
  );
}
