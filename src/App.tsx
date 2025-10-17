import type { FC } from "react";
import { Homepage } from "./pages/Homepage";

export const App: FC = () => {

  return (
    <>
      <div className="bg-red-500 min-h-screen">
        <Homepage />
      </div>
    </>
  );
};
