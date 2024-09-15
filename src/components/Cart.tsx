import { useCartStore } from "../store/store";
import { currencyFormatter } from "../utils/utils";
import { Button } from "./Button";
import { Icon } from "./Icon";
import NoDataImg from "../assets/illustrations/empty-cake.png";

type TCartProps = {
    openDialog: () => void;
};

export const Cart = ({ openDialog }: TCartProps) => {
    const { items, remove } = useCartStore((state) => ({ items: state.items, remove: state.remove }));

    const length = items.reduce((acc, item) => acc + (item.quantity ?? 0), 0);
    const total = items.reduce((acc, item) => acc + (item.total ?? 0), 0);

    const handleConfirm = () => {
        if (length === 0) return;

        openDialog();
    };

    return (
        <div className="flex w-full flex-col gap-y-6 rounded-xl bg-white p-6 lg:basis-1/3">
            <h2 className="heading heading-2 text-theme-red">Your Cart ({length})</h2>

            {length === 0 ? (
                <div className="flex flex-col items-center gap-y-4 p-4">
                    <img src={NoDataImg} alt="No item in cart" />

                    <p className="heading heading-4 mt-4 font-semibold text-theme-rose-500">
                        Your added items will appear here
                    </p>
                </div>
            ) : (
                <>
                    <ul>
                        {items.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between gap-x-2 border-b border-b-theme-rose-100 py-4 first-of-type:pt-0"
                                >
                                    <span className="heading heading-4">
                                        <span className="font-semibold">{item.name}</span>
                                        <span className="mt-2 flex gap-x-2">
                                            <span className="text-theme-red">{item.quantity}x</span>
                                            <span className="text-theme-rose-500">
                                                @ {currencyFormatter.format(item.price)}
                                            </span>
                                            <span className="font-semibold text-theme-rose-500">
                                                @ {currencyFormatter.format(item.total)}
                                            </span>
                                        </span>
                                    </span>

                                    <Icon
                                        width={20}
                                        height={20}
                                        id="remove"
                                        type="button"
                                        onClick={remove.bind(null, item.id)}
                                    ></Icon>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex items-center justify-between">
                        <span>Order Total</span>
                        <span className="heading heading-2">{currencyFormatter.format(total)}</span>
                    </div>

                    <div className="flex justify-center gap-x-2 rounded-lg bg-rose-50 p-4">
                        <Icon id="tree" type="icon"></Icon>
                        <p>
                            This is a <span className="font-semibold">carbon-neutral</span> delivery
                        </p>
                    </div>

                    <Button uiType="primary" onClick={handleConfirm}>
                        Confirm Order
                    </Button>
                </>
            )}
        </div>
    );
};
