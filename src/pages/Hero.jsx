import * as COMPONENT from "../components/index";
import * as ICON from "../configs/icon";

export default function Hero() {
  return (
    <div className="w-full bg-gray-900 p-5 " id="Home">
      <div className="w-full bg-hero-pattern bg-no-repeat bg-cover flex flex-col justify-center items-center text-white text-center">
        <div className="w-fit bg-gray-600 py-3 px-5 text-xs lg:text-sm font-semibold tracking-wide rounded-full mt-20">
          <h3>NUMBER ONE CREATIVE DIGITAL AGENCY</h3>
        </div>
        <div className="text-5xl text-center tracking-wide font-extrabold text-white mt-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Smart Choices
          </span>
          <h1>For Your Business Growth</h1>
        </div>
        <div className="w-full max-w-[520px] mt-6 font-light">
          We're a team of experienced designers, developers, and marketers,
          passionate about delivering exceptional digital solutions.
        </div>
        <div className="mt-12">
          <COMPONENT.Button size="large" leftIcon={ICON.IC_Arrowright}>
            Contact Us
          </COMPONENT.Button>
        </div>
        <COMPONENT.CardBanner />
        <COMPONENT.CardBannerSM />
      </div>
    </div>
  );
}
