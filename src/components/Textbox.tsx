import type { FC } from "react";

export type TextboxProps = {
    text: string;
};

export const Textbox: FC<TextboxProps> = ({ text = 'Hello' }) => {
    return (
        <div className="bg-white border rounded-md p-4 w-full">
            <p>{text}</p>
        </div>
    );
};
