import { Header } from "./Header";
import { Link } from "react-router-dom";
import sadsprout from "../assets/sadsrpout.png";

// In case user try to access invalid link. App will reroute to this page 

const PageNotFound = () => {
    return (
        <>
            <div className="relative w-screen h-screen">
                <Header/>
                <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] mt-8">
                    <h1 className="text-6xl font-extrabold text-gray-400 drop-shadow-lg ">
                        404 Page not found ...
                    </h1>
                    <img src={sadsprout} className="w-52 h-52"></img>
                    <Link to="/">
                        <button className="mt-6 px-6 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600">
                            Go back to Dashboard
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export { PageNotFound }