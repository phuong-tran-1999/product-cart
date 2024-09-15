import { cn } from "../utils/utils";

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    uiType?: "primary" | "compact";
};

export const Button = ({ uiType = "primary", className, children, type = "button", ...props }: TButtonProps) => {
    return (
        <button
            type={type}
            {...props}
            className={cn(
                "heading heading-3 rounded-full bg-theme-red px-6 py-4 text-white hover:brightness-75",
                className,
                uiType === "compact" && "p-3",
            )}
        >
            {children}
        </button>
    );
};
