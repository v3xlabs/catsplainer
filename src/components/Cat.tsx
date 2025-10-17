import type { FC } from "react";

export type CatProps = {
    name: string;
    color: string;
};

export const Cat: FC<CatProps> = ({ name = 'Cat', color = 'black' }) => {
    return (
        <div>
            <div className="bg-white border rounded-full p-4 aspect-square max-w-32"> 
                Cat
                <h1>{name}</h1>
                <p>{color}</p>
            </div>
        </div>
    );
};
