import CirclePurple from "@/app/assets/CirclePurple.svg";
import CupSVG from "@/app/assets/Cup.svg";
import HalfCircleSVG from "@/app/assets/HalfCircle.svg";
import PlayCircleSVG from "@/app/assets/PlayCircle.svg";
import ShoeSVG from "@/app/assets/Shoe.svg";
import TvVG from "@/app/assets/TV.svg";
import TriangleBlueSVG from "@/app/assets/TriangleBlue.svg";
import TriangleGreenSVG from "@/app/assets/TriangleGreen.svg";
import Image from "next/image";
import MyButton from "../common/MyButton";
import BgRectangleSVG from "@/app/assets/BgRectangle.svg";

export default function CollectibleSneakers() {
  return (
    <div className="relative">
      <Image className="absolute bottom-0 right-0 z-0" src={BgRectangleSVG} alt="Shoe Picture" />
      <div className="relative z-10">
        <div className="flex justify-between items-center p-20 flex-col lg:flex-row">
          <div className="space-y-8 size-min">
            <h1 className="text-[3.5rem] xl:text-7xl font-extrabold xl:text-nowrap text-center">Collectible Sneakers</h1>
            <p className="text-center lg:text-left">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra,
              eu imperdiet ipsum ultrices amet.
            </p>
            <div className="flex text-brown-90 child:cursor-pointer space-x-4">
              <MyButton content="Sign up now" border={true} variant="brown" font="medium" />
              <MyButton content="Watch Demo" icon={PlayCircleSVG} font="medium" variant="brown" />
            </div>
          </div>
          <Image src={ShoeSVG} alt="Shoe Picture" width={486} height={423} />
        </div>
        <div className="flex p-20 space-x-2 space-y-8 lg:space-y-0 flex-col lg:flex-row">
          <div className="space-y-4 lg:block flex flex-col items-center">
            <div className="relative">
              <Image src={CupSVG} alt="Cup Icon" width={64} height={64} />
              <Image className="absolute top-0 left-8" src={TriangleBlueSVG} alt="Cup Icon" width={60} height={60} />
            </div>
            <div className="font-medium text-xl">Nibh viverra</div>
            <p className="text-lg text-center lg:text-left">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="space-y-4 lg:block flex flex-col items-center">
            <div className="relative">
              <Image src={HalfCircleSVG} alt="Half Circle Icon" width={64} height={64} />
              <Image className="absolute top-0 left-5" src={TriangleGreenSVG} alt="Cup Icon" width={42} height={42} />
            </div>
            <div className="font-medium text-xl">Cursus amet</div>
            <p className="text-lg text-center lg:text-left">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="space-y-4 lg:block flex flex-col items-center">
            <div className="relative">
              <Image src={TvVG} alt="TV Icon" width={64} height={64} />
              <Image className="absolute top-0 left-10" src={CirclePurple} alt="Cup Icon" width={40} height={40} />
            </div>
            <div className="font-medium text-xl">Ipsum fermentum</div>
            <p className="text-lg text-center lg:text-left">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
