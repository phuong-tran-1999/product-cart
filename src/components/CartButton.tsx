export type TCartButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export const CartButton = ({ children, type = "button", ...props }: TCartButtonProps) => {
    return (
        <button
            type={type}
            {...props}
            className={
                "heading heading-3 group flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-theme-rose-400 bg-white p-3 text-theme-rose-900 hover:border-theme-red hover:text-theme-red"
            }
        >
            {children}
        </button>
    );
};
