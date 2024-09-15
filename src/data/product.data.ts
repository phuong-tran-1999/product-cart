import baklava from "../assets/images/baklava.jpg";
import brownee from "../assets/images/brownee.jpg";
import cake from "../assets/images/cake.jpg";
import cremeBrulee from "../assets/images/creme-brulee.jpg";
import macaron from "../assets/images/macaron.jpg";
import pannaCotta from "../assets/images/panna-cotta.jpg";
import pie from "../assets/images/pie.jpg";
import tiramisu from "../assets/images/tiramisu.jpg";
import waffle from "../assets/images/waffle.jpg";
import { TProduct } from "../types/product.type";

export const PRODUCTS: TProduct[] = [
    {
        id: 1,
        category: "Waffle",
        name: "Waffle with Berries",
        imageUrl: waffle,
        price: 6.5,
    },
    {
        id: 2,
        category: "Crème Brûlée",
        name: "Vanilla Bean Crème Brûlée",
        imageUrl: cremeBrulee,
        price: 7,
    },
    {
        id: 3,
        category: "Macaron",
        name: "Macaron mix of Five",
        imageUrl: macaron,
        price: 8,
    },
    {
        id: 4,
        category: "Tiramisu",
        name: "Classic Tiramisu",
        imageUrl: tiramisu,
        price: 5.5,
    },
    {
        id: 5,
        category: "Baklava",
        name: "Baklava",
        imageUrl: baklava,
        price: 4,
    },
    {
        id: 6,
        category: "Pie",
        name: "Lemon Meringue Pie",
        imageUrl: pie,
        price: 5,
    },

    {
        id: 7,
        category: "Cake",
        name: "Red Velvet Cake",
        imageUrl: cake,
        price: 4.5,
    },
    {
        id: 8,
        category: "Brownie",
        name: "Salted Caramel Brownie",
        imageUrl: brownee,
        price: 5.5,
    },
    {
        id: 9,
        category: "Panna Cotta",
        name: "Panna Cotta",
        imageUrl: pannaCotta,
        price: 6.5,
    },
];
