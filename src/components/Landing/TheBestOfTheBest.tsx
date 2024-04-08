import Shoes1 from "@/app/assets/product/Shoes1.jpg";
import Shoes2 from "@/app/assets/product/Shoes2.jpg";
import Shoes3 from "@/app/assets/product/Shoes3.jpg";
import BackLights from "@/app/assets/BackLights.svg";
import MyButton from "../common/MyButton";
import ProductCard from "../common/ProductCard";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: Shoes1,
    title: "Title",
    content: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    id: 2,
    image: Shoes2,
    title: "Title",
    content: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    id: 3,
    image: Shoes3,
    title: "Title",
    content: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
];

export default function TheBestOfTheBest() {
  return (
    <div className="bg-dark-90 p-20 text-white relative">
      <Image className="z-0 relative p-12 translate-y-16" src={BackLights} alt="Background" layout="fill" />
      <div className="z-10 relative">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center pb-20 space-y-8 lg:space-y-0">
          <div className="text-3xl font-bold lg:font-extrabold lg:text-6xl">The best of the best</div>
          <MyButton content="Sign up now" border font="large" />
        </div>
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-12">
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
