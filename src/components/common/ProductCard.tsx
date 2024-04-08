import BasketCar from "@/app/assets/BasketCar.svg";
import Image, { StaticImageData } from "next/image";
import MyButton from "./MyButton";

type ProductType = {
  id: number;
  title: string;
  image: StaticImageData;
  content: string;
};

export default function ProductCard(product: Readonly<ProductType>) {
  return (
    <div className="product-card bg-dark-90 flex-1" key={product.id}>
      <Image className="product-card-image" src={product.image} alt="product 1" />
      <div className="pt-8 px-8 space-y-4">
        <div className="font-bold text-2xl">{product.title}</div>
        <div className="text-lg">{product.content}</div>
      </div>
      <div className="p-8">
        <MyButton content="Buy Now" border font="medium" icon={BasketCar} iconSize={18} fullWidth />
      </div>
    </div>
  );
}
