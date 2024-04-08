import WorldSVG from "@/app/assets/World.svg";
import EllipsesSVG from "@/app/assets/Ellipses.svg";
import LocationShoesSVG from "@/app/assets/LocationShoes.svg";
import Image from "next/image";

export default function World() {
  return (
    <div className="flex items-center justify-center bg-brown-90 relative h-[717px]">
      <div className="flex relative z-40 text-white justify-center items-center flex-col">
        <div className="font-extrabold text-5xl lg:text-8xl">11,658,467</div>
        <div className="font-bold text-[2rem] lg:font-extrabold lg:text-[3.5rem]">Shoes Collected</div>
      </div>
      <Image className="absolute z-0" src={WorldSVG} alt="World Picture" />
      <Image className="absolute z-10" src={EllipsesSVG} alt="Location Pointer Picture" />
      <Image
        className="absolute z-20 lg:-translate-x-[380px] -translate-y-48"
        src={LocationShoesSVG}
        alt="Shoes Picture"
      />
    </div>
  );
}
