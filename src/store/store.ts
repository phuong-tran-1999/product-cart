import { create } from "zustand";
import { TITem } from "../types/item.type";
import { TProduct } from "../types/product.type";

interface ICartState {
    items: TITem[];
    changeQuantity: (product: TProduct, by: number) => void;
    remove: (id: TITem["id"]) => void;
    reset: () => void;
}

export const useCartStore = create<ICartState>()((set) => ({
    items: [],
    changeQuantity: (product: TProduct, by: number) => {
        set((state) => {
            const id = product.id;
            const item = state.items.find((item) => item.id === id);
            if (!item) return { items: state.items.concat({ ...product, quantity: by, total: by * product.price }) };

            if (item.quantity + by < 1) return { items: state.items.filter((item) => item.id !== id) };

            return {
                items: state.items.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + by, total: (item.quantity + by) * product.price }
                        : item,
                ),
            };
        });
    },
    remove: (id: TITem["id"]) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
    reset: () => set({ items: [] }),
}));
