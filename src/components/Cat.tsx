import type { FC } from "react";

export type CatProps = {
    name: string;
    color: string;
};

export const Cat: FC<CatProps> = ({ name = 'Cat', color = 'black' }) => {
    return (
        <div>
            Cat
            <h1>{name}</h1>
            <p>{color}</p>
        </div>
    );
};
