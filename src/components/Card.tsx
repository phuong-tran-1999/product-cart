import { useCartStore } from "../store/store";
import { TProduct } from "../types/product.type";
import { cn, currencyFormatter } from "../utils/utils";
import { Button } from "./Button";
import { CartButton } from "./CartButton";
import { Icon } from "./Icon";

export type TCardProps = React.HTMLAttributes<HTMLDivElement> & {
    product: TProduct;
};

export const Card = ({ product }: TCardProps) => {
    const { items, changeQuantity } = useCartStore((state) => ({
        items: state.items,
        changeQuantity: state.changeQuantity,
    }));

    const { imageUrl, imageAlt, name, category, price } = product;
    const item = items.find((item) => item.id === product.id);
    const isInCart = !!item;
    const quantity = item?.quantity ?? 0;

    const handleAddToCart = () => {
        changeQuantity(product, 1);
    };

    const handleChangeQuantity = (by: number) => {
        changeQuantity(product, by);
    };

    return (
        <div className="flex flex-col gap-y-4">
            <div className="relative mb-6">
                <img
                    src={imageUrl}
                    alt={imageAlt ?? name}
                    className={cn("w-full rounded-lg", isInCart && "border-2 border-theme-red")}
                />

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    {!isInCart ? (
                        <CartButton onClick={handleAddToCart}>
                            <Icon id="cart" type="button" width={20} height={20} />
                            Add To Cart
                        </CartButton>
                    ) : (
                        <Button
                            uiType="compact"
                            className="flex min-w-40 cursor-auto items-center justify-between hover:brightness-100"
                        >
                            <Icon
                                id="subtract"
                                type="button"
                                width={20}
                                height={20}
                                onClick={handleChangeQuantity.bind(null, -1)}
                            />
                            {quantity}
                            <Icon
                                id="add"
                                type="button"
                                width={20}
                                height={20}
                                onClick={handleChangeQuantity.bind(null, 1)}
                            />
                        </Button>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-y-1">
                <p className="heading heading-4">{category}</p>

                <p className="heading heading-3">{name}</p>

                <p className="heading heading-3 text-theme-red">{currencyFormatter.format(price)}</p>
            </div>
        </div>
    );
};
