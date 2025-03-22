import { ActivityTypeDropDown  } from "./ActivityTypeDropDown";
import { SelectActivity } from "./SelectActivity";
import DateSelector from "./DateSelector";
import { useState } from "react";
import { AddActivityButton } from "./ButtonAddActivity";

//This component opens up when log activity button is clicked 
type LogActivityPageProp = {
    isOpen: boolean,
    onClose: () => void
};

const LogActivityPage = ({ isOpen, onClose } : LogActivityPageProp) => {

    const [selectedOption, setSelectedOption] = useState<string>("");
    const [selectedActivity, setSelectedActivity] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [input, setInput] = useState("");


    if (!isOpen) return null; //Avoid rendering when component closed

    return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Overlay, for blurred background when popup opens */}
        <div className="absolute inset-0 bg-gray bg-opacity-10 backdrop-blur-[2px]"></div>
        
        <div className="relative bg-white shadow-lg p-6 rounded-lg border border-gray-300 w-120 h-160 z-10">
            <h2 className="text-left">Log Your Activity:</h2>
        
            {/* Select Activity Type */}
            <ActivityTypeDropDown 
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />

            {/* Date picker */}
            <DateSelector
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            {/* Select Activity: Use lifting to gain access to selectedOption*/}
            {selectedOption !== "" && 
                <SelectActivity 
                    activityType={selectedOption} 
                    selectedOption={selectedActivity}
                    input={input}
                    setSelectedOption={setSelectedActivity}
                    setInput={setInput}
                />}

            {/* Close Button */}
            <button
                onClick={() => {
                    onClose();
                    setSelectedOption("");
                    setSelectedDate("");
                    setSelectedActivity("");
                    setInput("");
                }}
                className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
                Close
            </button>
            <div className="text-left">
                <AddActivityButton 
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    selectedActivity={selectedActivity}
                    setSelectedActivity={setSelectedActivity}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    input={input}
                    setInput={setInput}
                />
            </div>
        </div>
    </div>
    );
    
};

export { LogActivityPage };