import { ProgressBar } from "./goal/ProgressBar"
import { useState, useEffect } from "react";
import { useDataContext } from "./context";
import { truncateTo3DecimalPlaces } from "./helper/truncate";
import awesome from "../assets/awesome.png";
import good from "../assets/good.png";
import uhh from "../assets/uhh.png";
import bad from "../assets/bad.png";


const Goal = () => {
    // Goal bar also need to rerender as new activities are added
    // This tracks a monthly goal
    // Goal is linked to local storage
   
    const [goal, setGoal] = useState(() => {
        return Number(JSON.parse(localStorage.getItem("goal") || "500"));
    });
    useEffect(()=>{
        localStorage.setItem('goal', JSON.stringify(goal));
    }, [goal]);

    const [newGoal, setNewGoal] = useState("");
    const { data } = useDataContext();
    const monthlyEmission = data.filter(
        data => {
            const now = new Date();
            return(Number(data.date.split("/")[0]) === now.getMonth() + 1 
                && Number(data.date.split("/")[2]) === now.getFullYear()
            );
        }
    ).reduce((acc, emission) => emission.carbon_footprint + acc, 0);

    const curProgress = (monthlyEmission/goal) * 100;

    const [progress, updateProgress] = useState(curProgress);

    const handleSetGoal = () => {
        if (newGoal !== "") {
            setGoal(Number(newGoal)); 
            setNewGoal(""); // Clear input after setting the goal
        }
    };

    useEffect(() => {
        const totalEmissions = data.filter(activity => Number(activity.date.split("/")[0]) === new Date().getMonth() + 1)
                                .reduce((acc, activity) => acc + activity.carbon_footprint, 0);
        const newProgress = (totalEmissions / goal) * 100; // Convert to percentage
        updateProgress(Math.min(newProgress, 100)); // Cap at 100%
    }, [data, goal]);

    return (
        <div className="relative bg-white shadow-lg p-6 rounded-lg col-span-4 w-auto h-auto border-6 border-lime-300">
            <div className="grid grid-cols-2 gap-3">
                {/* Grid 1 */}
                <div>
                    <div className='mb-2'><b>Your monthly goal:</b> {goal} kg CO₂e</div>
                    <div className='mb-2'>
                        <b>Carbon footprint this month:</b> {
                                    truncateTo3DecimalPlaces(data.filter(activity => Number(activity.date.split("/")[0]) === new Date().getMonth() + 1)
                                        .reduce((acc, activity) => acc + activity.carbon_footprint, 0))
                                        } kg CO₂e
                    </div>
                    <div className='mb-2'><ProgressBar progress={progress}/></div>
                    <div className='mb-2'>
                        <b>Set a new monthly goal:</b>
                        <input 
                            className="p-2 border rounded-lg shadow-md bg-white"
                            placeholder="kg CO₂e/Month"
                            type="number"
                            value={newGoal ?? ""} // Bind input to state
                            onChange={(e) => setNewGoal(e.target.value)} 
                        />
                        <button 
                            className="ml-4 px-4 py-2 bg-lime-500 text-white rounded-lg  shadow-md hover:bg-lime-600"
                            onClick={() => handleSetGoal()}
                        >
                            Set
                        </button>
                    </div>
                </div>
                {/* Grid 2 */}
                <div className="center justify-center">
                    <div className="mt-2 mb-2">
                        {
                            progress >= 80 && progress < 95
                            ? "Uh oh, you are approaching your limit..." 
                            : progress >= 95
                            ? "You are about to exceed your monthly limit : ("
                            : "Awesome! You are under your monthly goal!"
                        }
                    </div>
                    <div className="center justify-center">
                        {
                            progress >= 60 && progress < 75  
                            ? (<img src={good} className="w-52 h-52"/>)
                            : progress >= 75 && progress < 95  
                            ? (<img src={uhh} className="w-52 h-52"/>)
                            :progress >= 95
                            ? (<img src={bad} className="w-52 h-52"/>)
                            :  (<img src={awesome} className="w-52 h-52"/>)
                        }
                    </div>

                </div>
            </div>
        </div>

    );

};

export { Goal }