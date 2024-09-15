import spriteUrl from "../assets/sprite.svg";
import { TIcon } from "../types/icon.type";

export type TIconProps = React.ComponentPropsWithoutRef<"svg"> & {
    id: TIcon;
    width?: number;
    height?: number;
    type?: "button" | "icon";
};

export const Icon = ({ id, width = 24, height = 24, type = "icon", ...props }: TIconProps) => {
    const classes = type === "button" ? "cursor-pointer" : "";

    if (type === "icon") {
        return (
            <svg width={width} height={height} {...props} className={"group " + classes}>
                <use href={`${spriteUrl}#${id}`} />
            </svg>
        );
    }

    return (
        <svg width={width} height={height} {...props} className={"group " + classes}>
            <use className="group-hover:hidden" href={`${spriteUrl}#${id}-default`} />
            <use className="hidden group-hover:block" href={`${spriteUrl}#${id}-hover`} />
        </svg>
    );
};
