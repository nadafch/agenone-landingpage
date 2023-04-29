import React from "react";
import * as SVG from "../../configs/svgs";
import clsx from "classnames";

export default function Accordion(props) {
  return (
    <div className="w-full max-w-[80%] bg-cultured rounded-xl">
      <div
        className={clsx(
          "w-full p-7 grid grid-cols-5 text-xl lg:text-2xl font-bold items-center border-b",
          props?.index === props?.activeIndex
            ? "bg-clip-text text-transparent bg-gradient-to-r from-primary from-10% to-secondary transition-colors duration-200"
            : "text-black"
        )}
      >
        <div className="col-span-1">{props?.index}</div>
        <div className="col-span-2">{props?.title}</div>
        <div className="col-span-2 flex justify-end">
          <div role="button" onClick={props?.onClick}>
            <img
              className={clsx(
                "w-4 h-4 transition-all duration-300",
                props?.activeIndex === props?.index
                  ? "rotate-[135deg]"
                  : "rotate-45 brightness-0"
              )}
              src={SVG.BigArrow}
            />
          </div>
        </div>
      </div>
      {props?.activeIndex === props?.index && (
        <div className="mt-5 p-4">{props?.children}</div>
      )}
    </div>
  );
}
