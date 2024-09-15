import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { useCartStore } from "../store/store";
import { currencyFormatter } from "../utils/utils";
import { Button } from "./Button";
import { Icon } from "./Icon";

export type TConfirmDialogProps = {
    handleClose: () => void;
    handleConfirm: () => void;
};

export const ConfirmDialog = forwardRef<HTMLDialogElement, TConfirmDialogProps>(
    ({ handleClose, handleConfirm }, ref) => {
        const items = useCartStore((state) => state.items);
        const total = items.reduce((acc, item) => acc + (item.total ?? 0), 0);

        const handleClick = (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) {
                handleClose();
            }
        };

        return createPortal(
            <dialog
                ref={ref}
                className="animate-slideUp sm:animate-fadeInUp mx-0 mb-0 mt-auto w-full max-w-full gap-y-8 rounded-lg backdrop:bg-black/75 sm:m-auto sm:max-w-max md:min-w-[592px]"
                onClose={handleClose}
                onClick={(e) => handleClick(e)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex w-full flex-col gap-y-4 rounded-lg bg-white px-6 py-10 sm:p-10"
                >
                    <div className="flex flex-col items-start gap-y-6">
                        <Icon width={48} height={48} id="checkmark" type="icon"></Icon>

                        <div>
                            <h1 className="heading heading-1 mb-2">Order Confirmed</h1>
                            <p className="text-theme-rose-500">We hope you enjoy your food!</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-theme-rose-50 p-6">
                        <ul>
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between gap-x-2 border-b border-b-theme-rose-100 py-4 first-of-type:pt-0"
                                >
                                    <span className="flex items-center gap-x-4">
                                        <img src={item.imageUrl} alt={item?.imageAlt ?? item.name} className="w-12" />
                                        <span className="heading heading-4">
                                            <span className="font-semibold">{item.name}</span>
                                            <span className="mt-2 flex gap-x-2">
                                                <span className="text-theme-red">{item.quantity}x</span>
                                                <span className="text-theme-rose-500">
                                                    @ {currencyFormatter.format(item.price)}
                                                </span>
                                            </span>
                                        </span>
                                    </span>

                                    <span className="heading heading-3 text-theme-rose-900">
                                        {currencyFormatter.format(item.total)}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex items-center justify-between">
                            <span>Order Total</span>
                            <span className="heading heading-2">{currencyFormatter.format(total)}</span>
                        </div>
                    </div>

                    <Button uiType="primary" onClick={handleConfirm}>
                        Start New Order
                    </Button>
                </div>
            </dialog>,
            document.getElementById("dialog-root")!,
        );
    },
);
