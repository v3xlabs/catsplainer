import type { FC } from "react";

export type TextboxProps = {
    text: string;
};

export const Textbox: FC<TextboxProps> = ({ text = 'Hello' }) => {
    return (
        <div className="bg-white/20 border-white/50 border-2 text-white backdrop-blur-xs rounded-md p-4 w-full">
            <p>{text}</p>
        </div>
    );
};
