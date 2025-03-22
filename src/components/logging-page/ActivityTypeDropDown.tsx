const activityTypeList: string[] = [
    "transportation", 
    "home energy", 
    "food & diet",
    "shopping",
    "waste & recycling",
    "water usage",
    "other"
];

type ActivityTypeProp = {
    selectedOption: string, 
    setSelectedOption: (arg: string) => void,
};

// Drop down select component for user to record the type of activity they wish to log

const ActivityTypeDropDown = ({ selectedOption, setSelectedOption }:ActivityTypeProp) => {

    return (
        <div className="flex flex-col items-center p-6">
            <label className="text-lg font-semibold mb-2">select activity type:</label>
            <select
                className="p-3 border rounded-lg shadow-md bg-white"
                value={selectedOption}
                onChange={(event) => setSelectedOption(event.target.value)}
            >
                <option value="" disabled>Select one</option>
                {activityTypeList.map((type, index) => {
                    return (<option key={index} value={type}> 
                        {type}
                    </option>);
                
                })}
            </select>

        </div>
    );


};

export { ActivityTypeDropDown };