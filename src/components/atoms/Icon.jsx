import React from "react";
import clsx from "classnames";

export default function Icon(props) {
  return (
    <div
      className={clsx(
        "w-fit h-fit p-3 bg-gradient-to-r from-white to-transparent rounded-full shadow-lg"
      )}
    >
      <div
        className={clsx(
          "w-fit h-fit p-1 rounded-full bg-gradient-to-r from-primary to-secondary",
          !props.disabled ? "transition-all active:scale-95" : null
        )}
      >
        <div
          className={clsx(
            {
              "w-[177px] h-[177px]": props?.size === "big",
              "w-[88px] h-[88px]": !props?.size,
            },
            "bg-white rounded-full flex justify-center items-center"
          )}
        >
          {props?.children}
        </div>
      </div>
    </div>
  );
}
