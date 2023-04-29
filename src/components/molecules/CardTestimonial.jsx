import React from "react";
import clsx from "classnames";

export default function CardTestimonial(props) {
  return (
    <div
      className={clsx(
        "w-full max-w-[327px] lg:max-w-[508px] p-4 bg-cultured rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-gray-500 hover:text-white transition-all",
        props?.className
      )}
    >
      <div className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        repudiandae eum amet, iusto quasi deleniti beatae unde optio, ex dolores
        debitis vitae similique nemo ipsa dolore cum, voluptatibus aliquam
        cupiditate?
      </div>
      <div className="w-full flex items-center gap-2">
        {props?.image ? (
          <img src={props?.image} className="w-12 h-12 bg-cover rounded-full" />
        ) : (
          <div className="w-12 h-12 bg-slate-500 rounded-full"></div>
        )}
        <div className="w-[85%] px-2">
          <div className="font-semibold text-lg">{props?.name}</div>
          <div className="font-light text-sm break-words">{props?.role}</div>
        </div>
      </div>
    </div>
  );
}
