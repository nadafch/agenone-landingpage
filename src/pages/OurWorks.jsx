import * as COMPONENT from "../components";
import * as SVGS from "../configs/svgs";

export default function OurWorks() {
  return (
    <div className="w-full bg-slate-900 text-white" id="Project">
      <div className="w-full p-6 pb-24 bg-ourwork-pattern bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <div className="w-full max-w-[90%] font-bold text-6xl text-center mt-24">
          Our Project Have Been{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Done
          </span>
        </div>
        <div className="w-full max-w-[70%] mt-8 text-center text-xl">
          Take a look at some of our recent projects and see how we've helped
          other businesses elevate their brand and drive business growth.
        </div>
        <div className="mt-8 mb-5">
          <COMPONENT.ToogleButton />
        </div>
        <div className="w-full max-w-[80%] mt-10 flex flex-wrap justify-around items-center gap-8">
          <COMPONENT.CardProject
            image={SVGS.Project1}
            title="Project 1"
            description="loremIpsumDOlor sit amet"
            link="http://sipeka.balittas.or.id/"
          />
          <COMPONENT.CardProject
            image={SVGS.Project2}
            title="Project 2"
            description="LoremIpsum"
            link="http://sipeka.balittas.or.id/"
          />
        </div>
      </div>
    </div>
  );
}
