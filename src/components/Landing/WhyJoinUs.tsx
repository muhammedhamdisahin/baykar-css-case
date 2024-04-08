import Image from "next/image";
import MyButton from "../common/MyButton";
import DesktopSVG from "@/app/assets/Desktop.svg";
import CheckSVG from "@/app/assets/Check.svg";
import DecoVideoSVG from "@/app/assets/DecoVideo.svg";
import GreenCircleSVG from "@/app/assets/GreenCircle.svg";

const contents = [
  "Est et in pharetra magna adipiscing ornare aliquam.",
  "Tellus arcu sed consequat ac velit ut eu blandit.",
  "Ullamcorper ornare in et egestas dolor orci.",
];

export default function WhyJoinUs() {
  return (
    <div className="py-40 px-20">
      <div className="flex flex-col xl:flex-row step3-container relative items-center justify-between lg:space-x-36">
        <div className="flex items-center flex-col xl:items-start space-y-6 relative z-20 lg:px-20 lg:py-28 lg:pr-0 py-8 px-4">
          <div className="text-[2rem] font-bold lg:text-[3.5rem] lg:font-extrabold">Why join us</div>
          <ul className="space-y-2 lg:space-y-0">
            {contents.map((content, index) => (
              <li className="flex space-x-2 lg:text-nowrap items-start" key={index}>
                <Image priority src={CheckSVG} alt="Information" />
                <div className="lg:text-xl lg:leading-9">{content}</div>
              </li>
            ))}
          </ul>
          <MyButton
            content="Sign up now"
            border={true}
            variant="brown"
            font="medium"
            style={{
              padding: "16px",
            }}
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            className="z-0 relative scale-[1.2] lg:scale-[1.3] lg:translate-y-3 lg:-translate-x-12"
            src={DecoVideoSVG}
            alt="Video decoration"
          />
          <Image className="z-10 absolute lg:top-20 top-5" src={DesktopSVG} alt="Desktop decoration" />
          <Image
            className="z-20 absolute bottom-4 left-24 scale-[0.4] lg:scale-[1]"
            src={GreenCircleSVG}
            alt="Green Circle decoration"
          />
        </div>
      </div>
    </div>
  );
}
