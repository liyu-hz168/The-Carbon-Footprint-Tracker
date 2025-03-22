import { useState, useEffect } from "react";
import { getTodayDate } from "./helper/date";
import { useDateContext } from "./context";
import { LogActivityButton } from "./logging-page/ButtonLogActivity";
import { useDataContext, useTodayContext } from "./context";
import { truncateTo3DecimalPlaces } from "./helper/truncate";

const TodaySummary = () => {

    const { currentDate, setCurrentDate } = useDateContext();
    const [isPageOpen, setIsPageOpen] = useState(false); // Lifting state for button to App.tsx
    const { todayData, setNewTodayData } = useTodayContext();
    const { data, setNewData } = useDataContext();

    //Mock data to put back into today array once data clears at the end of the day
    const generateMockDataToday = () => [
        { 
            activity_name: "Dairy (Milk)", 
            activity_type: "food & diet", 
            carbon_footprint: 3.6, 
            date: getTodayDate() 
        },
        { 
            activity_name: "Ferry", 
            activity_type: "transportation", 
            carbon_footprint: 12.0, 
            date: getTodayDate()
        },
        { 
            activity_name: "Egg Consumption", 
            activity_type: "food & diet", 
            carbon_footprint: 4.8, 
            date: getTodayDate()
        },
        { 
            activity_name: "Express Air Shipping", 
            activity_type: "transportation", 
            carbon_footprint: 25.0, 
            date: getTodayDate()
        },
    ];

    // Clear out component once date changes 
    useEffect(() => {
        const interval = setInterval(() => {
          const today = getTodayDate();
          if (today !== currentDate) {
            setCurrentDate(today);
            //This is the mock data that will always remain, date is always set to today 
            setNewTodayData([...generateMockDataToday()]);
            
          }
        }, 1000); // Check every second
    
        return () => clearInterval(interval);
      }, [currentDate, setNewTodayData, setCurrentDate]);

    const handleDelete = (indexToRemove: number) => {
        //remove for today data
        const info = todayData[indexToRemove];
        const newArr = todayData.filter((_, index) => index !== indexToRemove);
        setNewTodayData([...newArr]);

        //Also need to remove it from global 
        const newGlobalArr = [...data]; 
        const indexToRemoveGlobal = newGlobalArr.findIndex(activity => 
            activity.activity_name === info.activity_name &&
            activity.activity_type === info.activity_type &&
            activity.carbon_footprint === info.carbon_footprint &&
            activity.date === info.date
        );

        if (indexToRemove !== -1) {
            // Remove only the first match
            newGlobalArr.splice(indexToRemoveGlobal, 1)
            setNewData([...newGlobalArr]); 
        }
    };

    return (
        <div className="flex col-span-3">
            {/* List of activities from today */}
            <div className="relative bg-white shadow-lg p-6 rounded-lg border border-gray-300 w-screen h-auto border-6 border-lime-300">
                <label className="mt font-bold">Your activities today:</label>
                <div className="text-right">
                    <LogActivityButton isPageOpen={isPageOpen} setIsPageOpen={setIsPageOpen} />
                </div>
                <div className="mb-5 h-32 overflow-y-auto border p-4 rounded-lg shadow-md">
                    <ul>
                        {todayData.map((activity, index) => {
                            return (
                                <li key={`${activity.activity_name}-${activity.date}-${index}`}>
                                    <span className="hover:bg-gray-200">* {activity.activity_name}, {activity.carbon_footprint} kg CO₂e</span>
                                    {/* Delete Button - Hidden until hover */}
                                    <button 
                                        className="ml-2 px-2 py-1 text-xs bg-gray-200 hover:bg-gray-400 text-white rounded"
                                        onClick={() => handleDelete(index)}
                                    >
                                        X
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Total carbon footprint today */}
                <div className="mb-3">
                    <label className="font-bold">Total carbon footprint:</label>
                    <span className="bg-yellow-200 px-1">{truncateTo3DecimalPlaces(todayData.reduce((acc, activity)=> acc + activity.carbon_footprint, 0))} kg CO₂e</span>
                </div>
            </div>
        </div>
    );
};

export { TodaySummary }