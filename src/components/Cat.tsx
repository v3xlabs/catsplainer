import type { FC } from "react";

export type CatProps = {
    name: string;
    color: string;
};

export const Cat: FC<CatProps> = ({ name = 'Cat', color = 'black' }) => {
    return (
        <div className="relative pt-1 w-fit z-10">
            <div className="absolute w-12 h-12 rounded-md rotate-12 bg-white border left-1 top-0 -z-10"></div>
            <div className="absolute w-12 h-12 rounded-md -rotate-12 bg-white border right-1 top-0 -z-10"></div>
            <div className="bg-white border rounded-full p-4 aspect-square max-w-32 z-20">
                Cat
                <h1>{name}</h1>
                <p>{color}</p>
            </div>
        </div>
    );
};
