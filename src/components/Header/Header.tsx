import Image from "next/image";
import MyButton from "../common/MyButton";
import MenuSVG from "@/app/assets/menu.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 lg:py-6 lg:px-20 text-brown-90">
      <div>
        <span className="font-bold text-3xl">Collers</span>
      </div>
      <Image className="button-opacity-effect lg:hidden" src={MenuSVG} alt="Header icon" />
      <div className="hidden lg:flex space-x-4 child:px-2 child:py-3 child:cursor-pointer text-base font-medium">
        <div className="button-opacity-effect">Products</div>
        <div className="button-opacity-effect">Solutions</div>
        <div className="button-opacity-effect">Pricing</div>
        <div className="button-opacity-effect">Resources</div>
        <div className="button-opacity-effect">Log In</div>
        <MyButton content="Sign up now" border={true} variant="brown" font="small" />
      </div>
    </header>
  );
}
