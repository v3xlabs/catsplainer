import { Textbox } from "../components/Textbox";
import catInBath from "../assets/cats/cat-in-bath.jpg";
import catUpclose from "../assets/cats/cat-upclose.jpg";
import catLoaf from "../assets/cats/cat-loaf.jpg";
import catWithWine from "../assets/cats/cat-with-wine.jpg";

export const Homepage = () => {

    return (
        <div className="space-y-4 px-4 w-full max-w-screen-sm mx-auto">
            <div>Catsplainer</div>
            <div className="w-full flex justify-center gap-4">
                {/* <Cat name="Whiskers" color="white" /> */}
                <Textbox text="Ethereum cat" />
                <div className="h-48 w-48 flex justify-center items-center">
                <img className="w-full h-full rounded-md" src={catInBath} alt="cat" />
                </div>
            </div>
            <div className="w-full flex justify-center gap-4">
                <div className="h-48 w-48 flex justify-center items-center">
                <img className="w-full h-full rounded-md" src={catUpclose} alt="cat" />
                </div>
                <Textbox text="Privacy cat" />
                {/* <Cat name="Whiskers" color="white" /> */}
            </div>
            <div className="w-full flex justify-center gap-4">
                {/* <Cat name="Whiskers" color="white" /> */}
                <Textbox text="Steve" />
                <div className="h-48 w-48 flex justify-center items-center">
                <img className="w-full h-full rounded-md" src={catLoaf} alt="cat" />
                </div>
            </div>
            <div className="w-full flex justify-center gap-4">
                <div className="h-48 w-48 flex justify-center items-center">
                    <img className="w-full h-full rounded-md" src={catWithWine} alt="cat" />
                </div>
                <Textbox text="Hackathon cat" />
                {/* <Cat name="Whiskers" color="white" /> */}
            </div>

        </div>
    );
};