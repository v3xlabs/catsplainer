import { Cat } from "../components/Cat";
import { Textbox } from "../components/Textbox";

export const Homepage = () => {

    return (
        <div className="space-y-4 px-4">
            <div>Catsplainer</div>
            <div className="w-full flex justify-center gap-4">
                <Cat name="Whiskers" color="white" />
                <Textbox text="Hello" />
            </div>
            <div className="w-full flex justify-center gap-4">
                <Textbox text="Hello" />
                <Cat name="Whiskers" color="white" />
            </div>
        </div>
    );
};