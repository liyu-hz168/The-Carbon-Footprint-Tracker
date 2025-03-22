import emissionFactors from "../graphs/emissio-data";
import { InputInfo } from "./InputInfo";

// This component will appear after a selection is made in select activity type 

type selectedActivityProp = {
    activityType: string
    selectedOption: string, 
    input: string,
    setSelectedOption: (arg: string) => void,
    setInput: (arg: string) => void
};
const SelectActivity = ({ activityType, selectedOption, input, setSelectedOption, setInput}: selectedActivityProp) => {

    // With render a dropdown list of activities for the user to select from
    // Drop down search
    // Items in the drop down menu will come from the corresponding list of activity types

    return (
        <>
            <div className="flex flex-col items-center p-6">
                <label className="text-lg font-semibold mb-2">Input Activity:</label>
                {activityType === "other" 
                    ?(<div className="flex flex-col items-center p-2">
                        <input 
                            className="p-3 border rounded-lg shadow-md bg-white"
                            value={selectedOption}
                            onChange={(event) => setSelectedOption(event.target.value)}
                        />
                    </div>)
                    :<select
                        className="p-3 border rounded-lg shadow-md bg-white"
                        value={selectedOption}
                        onChange={(event) => setSelectedOption(event.target.value)}
                    >
                        <option value="" disabled>Select one</option>
                        {emissionFactors.find(obj => obj.activity_type === activityType)
                            ?.activities.map(activity => (
                                <option key={activity.activity_name} value={activity.activity_name}>
                                    {activity.activity_name}
                                </option>
                            ))
                        }
                    </select>
                }
            </div>
            {selectedOption !== "" 
            && <InputInfo 
                    activityType={activityType}
                    selectedOption={selectedOption}
                    input={input}
                    setInput={setInput}
                />
            }

        </>
    );
};

export { SelectActivity };