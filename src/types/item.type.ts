import { TProduct } from "./product.type";

export type TITem = TProduct & {
    quantity: number;
    total: number;
};
