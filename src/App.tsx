import type { FC } from "react";
import { Homepage } from "./pages/Homepage";
import catGalaxy from "./assets/cats/cat-galaxy.jpg";

export const App: FC = () => {

  return (
    <>
      <div className="min-h-screen relative">
        <img className="absolute inset-0 w-full h-full object-cover -z-10 filter-blur" src={catGalaxy} alt="background" />
        <Homepage />
      </div>
    </>
  );
};
