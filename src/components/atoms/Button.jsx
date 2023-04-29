import React from "react";
import clsx from "classnames";

export default function Button(props) {
  return (
    <div
      role="button"
      onClick={props?.onClick}
      className={clsx(
        "w-full p-2 flex justify-center items-center rounded-full bg-gradient-to-r from-primary to-secondary text-white select-none group transition-all duration-200",
        props?.className,
        {
          "max-w-fit text-base xl:text-xl py-3 px-4":
            props?.size === "large" || !props.size,
          "max-w-[131px] text-sm xl:text-base py-2 px-3":
            props?.size === "medium",
          "max-w-[101px] text-xs py-1 px-2": props?.size === "small",
        },
        {
          "hover:brightness-110 active:brightness-100 transition-none":
            !props?.disabled,
          "opacity-50": props?.disabled,
        }
      )}
      disabled={props?.disabled}
    >
      {props?.children}
      {props?.leftIcon && (
        <span className="ml-2 group-hover:translate-x-1">
          <img
            className={clsx(props?.size === "small" ? "w-2 h-2" : "w-3 h-3")}
            src={props?.leftIcon}
          />
        </span>
      )}
    </div>
  );
}
