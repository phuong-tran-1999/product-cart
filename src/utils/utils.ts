import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currencyDisplay: "symbol",
});

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};
