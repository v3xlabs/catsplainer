import { createFileRoute, Link } from '@tanstack/react-router';
import { Textbox } from '../components/Textbox';
import catGalaxy from '../assets/cats/cat-galaxy.jpg';
import catInBath from '../assets/cats/cat-in-bath.jpg';
import catUpclose from '../assets/cats/cat-upclose.jpg';
import catLoaf from '../assets/cats/cat-loaf.jpg';
import catWithWine from '../assets/cats/cat-with-wine.jpg';

export const Route = createFileRoute('/')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="min-h-screen relative">
            <img className="absolute inset-0 w-full h-full object-cover -z-10 filter-blur" src={catGalaxy} alt="background" />
            <div className="space-y-4 px-4 w-full max-w-screen-sm mx-auto">
                <div>Catsplainer</div>
                <div className="w-full flex justify-center gap-4">
                    {/* <Cat name="Whiskers" color="white" /> */}
                    <Textbox text="Ethereum cat" />
                    <Link to="/cat/ethereum">
                        <div className="h-48 w-48 flex justify-center items-center">
                            <img className="w-full h-full rounded-md object-cover" src={catInBath} alt="cat" />
                        </div>
                    </Link>
                </div>
                <div className="w-full flex justify-center gap-4">
                    <Link to="/cat/privacy">
                        <div className="h-48 w-48 flex justify-center items-center">
                            <img className="w-full h-full rounded-md object-cover" src={catUpclose} alt="cat" />
                        </div>
                    </Link>
                    <Textbox text="Privacy cat" />
                    {/* <Cat name="Whiskers" color="white" /> */}
                </div>
                <div className="w-full flex justify-center gap-4">
                    {/* <Cat name="Whiskers" color="white" /> */}
                    <Textbox text="Steve" />
                    <div className="h-48 w-48 flex justify-center items-center">
                        <img className="w-full h-full rounded-md object-cover" src={catLoaf} alt="cat" />
                    </div>
                </div>
                <div className="w-full flex justify-center gap-4">
                    <div className="h-48 w-48 flex justify-center items-center">
                        <img className="w-full h-full rounded-md object-cover" src={catWithWine} alt="cat" />
                    </div>
                    <Textbox text="Hackathon cat" />
                    {/* <Cat name="Whiskers" color="white" /> */}
                </div>
            </div>
        </div>
    );
}
