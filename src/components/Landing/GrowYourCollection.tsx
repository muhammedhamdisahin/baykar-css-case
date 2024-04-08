import Image, { StaticImageData } from "next/image";
import ShoesColSVG from "@/app/assets/ShoesCol.svg";
import SearchSVG from "@/app/assets/section/Search.svg";
import ShieldCheckSVG from "@/app/assets/section/ShieldCheck.svg";
import RocketSVG from "@/app/assets/section/rocket.svg";
import ScreenSVG from "@/app/assets/section/screen.svg";
import PodcastSVG from "@/app/assets/section/podcast.svg";
import SettingsSVG from "@/app/assets/section/Settings.svg";
import ArrowRightSVG from "@/app/assets/ArrowRight.svg";
import BattomBrownSVG from "@/app/assets/bgDecoration/BattomBrown.svg";
import BottomYellowSVG from "@/app/assets/bgDecoration/BottomYellow.svg";
import BottomYellow2SVG from "@/app/assets/bgDecoration/BottomYellow2.svg";

type SectionType = {
  id: number;
  icon: StaticImageData;
  content: string;
};

const sections: SectionType[] = [
  {
    id: 1,
    icon: SearchSVG,
    content: "Bibendum tellus",
  },
  {
    id: 2,
    icon: ShieldCheckSVG,
    content: "Cras eget",
  },
  {
    id: 3,
    icon: RocketSVG,
    content: "Dolor pharetra",
  },
  {
    id: 4,
    icon: ScreenSVG,
    content: "Amet, fringilla",
  },
  {
    id: 5,
    icon: PodcastSVG,
    content: "Amet nibh",
  },
  {
    id: 6,
    icon: SettingsSVG,
    content: "Sed velit",
  },
];

export default function GrowYourCollection() {
  return (
    <div className="relative">
      <Image className="absolute bottom-0 z-20 w-full" src={BattomBrownSVG} alt="Background Decoration" />
      <Image className="absolute bottom-0 z-10 w-full" src={BottomYellowSVG} alt="Background Decoration" />
      <Image className="absolute bottom-0 z-0 w-full" src={BottomYellow2SVG} alt="Background Decoration" />

      <div className="lg:p-20 p-4 pb-32 lg:space-y-20 space-y-6 relative z-40">
        <div className="space-y-8">
          <div className="text-center lg:text-left font-bold text-[2rem] lg:font-extrabold lg:text-[3.5rem] text-nowrap">
            Grow your collection
          </div>
          <div className="text-center lg:text-left lg:text-lg">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non
            turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin
            neque placerat at bibendum quam tellus.
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:space-x-20 xl:space-y-8 xl:space-y-0 overflow-hidden w-full items-center">
          <div className="flex xl:block xl:space-y-4 overflow-scroll scroll-smooth scroll-hidden w-full p-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`flex items-center p-4 pr-12 space-x-4 button-opacity-effect ${
                  section.id === 1 && "section-selected"
                }`}
              >
                <Image src={section.icon} alt="Section icon" />
                <div className="text-xl font-medium leading-6 text-nowrap">{section.content}</div>
                {section.id === 1 && <Image className="hidden xl:block" src={ArrowRightSVG} alt="Section icon" />}
              </div>
            ))}
          </div>
          <Image className="xl:hidden" src={ShoesColSVG} alt="Shoes Collection" />
          <Image className="hidden xl:block" src={ShoesColSVG} alt="Shoes Collection" width={780} height={451} />
        </div>
      </div>
    </div>
  );
}
