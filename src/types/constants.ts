import { StaticImageData } from "next/image";

export interface ProductItem {
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