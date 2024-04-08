import Image, { StaticImageData } from "next/image";

type ButtonProps = {
  content: string;
  icon?: StaticImageData;
  variant?: "brown" | "white";
  border?: boolean;
  font?: "small" | "medium" | "large";
  iconSize?: number;
  fullWidth?: boolean;
  style?: React.CSSProperties;
};

export default function MyButton({
  content,
  icon,
  border,
  variant,
  font,
  iconSize = 32,
  fullWidth,
  style,
}: Readonly<ButtonProps>) {
  return (
    <div
      className={`button-opacity-effect rounded-lg flex items-center justify-center 
      ${fullWidth ? "w-full" : "w-min"}
      ${font === "medium" ? "!p-3" : "px-6 py-5"}
      ${border && "border-2"} 
      ${variant === "brown" ? "border-brown-90 text-brown-90" : "border-white text-white"}`}
      style={style}
    >
      {icon && <Image src={icon} alt="Button icon" width={iconSize} height={iconSize} />}
      <span
        className={`px-4 text-nowrap
        ${font === "small" && "font-medium text-base"}
        ${font === "medium" && "font-medium text-xl"}
        ${font === "large" && "font-bold text-2xl"}`}
      >
        {content}
      </span>
    </div>
  );
}
