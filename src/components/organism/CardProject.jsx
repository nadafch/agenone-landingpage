import * as COMPONENTS from "../index";

export default function CardProject(props) {
  return (
    <div className="lg:w-[400px] h-auto bg-gray-800 rounded-md text-white">
      <div className="w-full group flex justify-center items-center p-6 border-gray-500/40 relative">
        <div className="w-full flex justify-center items-center">
          <img
            className="w-[300px] h-[300px] object-scale-down rounded-md"
            src={props?.image}
          />
        </div>
        <div className="w-full h-0 flex justify-center items-center absolute top-0 bg-black/60 group-hover:h-full transition-all duration-300">
          <div className="absolute items-center hidden group-hover:block">
            <a href={props?.link} target="_blank">
              <COMPONENTS.SpecialIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full p-3 border-t-2 border-gray-500">
        <div className="text-xl font-bold mb-3">{props?.title}</div>
        <div className="text-justify font-light text-sm">
          {props?.description}
        </div>
      </div>
    </div>
  );
}
