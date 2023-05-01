import React from "react";
import * as SVGS from "../configs/svgs";

export default function CompanyList() {
  return (
    <div className="w-full p-2 bg-gray-900 flex justify-center items-center border-y">
      <div className="w-[80%] flex flex-wrap justify-around items-center">
        <img
          src={SVGS.slack}
          className="w-full max-w-[100px] md:max-w-[154px]"
        />
        <img
          src={SVGS.google}
          className="w-full max-w-[100px] md:max-w-[154px]"
        />
        <img
          src={SVGS.netflix}
          className="w-full max-w-[100px] md:max-w-[154px]"
        />
        <img
          src={SVGS.airbnb}
          className="w-full max-w-[100px] md:max-w-[154px]"
        />
        <img
          src={SVGS.adobe}
          className="w-full max-w-[100px] md:max-w-[154px]"
        />
        <img
          src={SVGS.microsoft}
          className="w-full max-w-[100px] md:max-w-[154px]"
        />
      </div>
    </div>
  );
}
