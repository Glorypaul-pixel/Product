import { StaticImageData } from "next/image";
import Baklava from "../src/assets/images/image-baklava-desktop.jpg";
import Brownie from "../src/assets/images/image-brownie-desktop.jpg";
import Cake from "../src/assets/images/image-cake-desktop.jpg";
import Creme from "../src/assets/images/image-creme-brulee-desktop.jpg";
import Macaron from "../src/assets/images/image-macaron-desktop.jpg";
import Meringue from "../src/assets/images/image-meringue-desktop.jpg";
import Panna from "../src/assets/images/image-panna-cotta-desktop.jpg";
import Tiramisu from "../src/assets/images/image-tiramisu-desktop.jpg";
import Waffle from "../src/assets/images/image-waffle-desktop.jpg";
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageURL: StaticImageData;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Waffle",
    price: 6.5,
    description: "Waffle with Berries",
    imageURL: Waffle,
  },
  {
    id: 2,
    name: "Creme Brulee",
    price: 7.0,
    description: "Vanilla Bean Creme Brulee",
    imageURL: Creme,
  },
  {
    id: 3,
    name: "Macaron",
    price: 8.0,
    description: "Macaron Mix of Five",
    imageURL: Macaron,
  },
  {
    id: 4,
    name: "Tiramisu",
    price: 5.5,
    description: "Classic Tiramisu",
    imageURL: Tiramisu,
  },
  {
    id: 5,
    name: "Baklava",
    price: 4.0,
    description: "Pistachio Baklava",
    imageURL: Baklava,
  },
  {
    id: 6,
    name: "Pie",
    price: 5.0,
    description: "Lemon Meringue Pie",
    imageURL: Meringue,
  },
  {
    id: 7,
    name: "Cake",
    price: 4.5,
    description: "Red Velvet Cake",
    imageURL: Cake,
  },
  {
    id: 8,
    name: "Brownie",
    price: 5.5,
    description: "Salted Caramel Brownie",
    imageURL: Brownie,
  },
  {
    id: 9,
    name: "Panna Cotta",
    price: 6.5,
    description: "Vanilla Panna Cotta",
    imageURL: Panna,
  },
];
