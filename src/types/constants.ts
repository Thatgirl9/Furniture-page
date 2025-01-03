import { StaticImageData } from "next/image";

export interface ProductItem {
  id: number;
  image: StaticImageData,
  title: string,
  description: string,
  price: string,
  discount?: boolean,
  discountPrice?: string,
  discountPercent?: string,
  newProduct?: boolean,
  newText?: string,
}