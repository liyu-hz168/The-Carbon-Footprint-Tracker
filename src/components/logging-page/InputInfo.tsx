type InputInfoProp = {
    activityType: string,
    selectedOption:string,
    input: string, 
    setInput: (arg: string) => void
};

// Field takes the required numeric value as user input
// This input is required for carbon footprint calculation 

const InputInfo = ({ activityType, selectedOption, input, setInput }: InputInfoProp) => {

    const getUnitPrompt = (activityType: string, selectedOption?: string): string => {
        if (activityType === "transportation") return "How many miles?";
        if (activityType === "food & diet") return "How many kg?";
        if (activityType === "waste & recycling") {
            return selectedOption === "Recycled Aluminum Can" ? "How many cans?" : "How many kg?";
        }
        if (activityType === "water usage") return "How many liters?";
        if (activityType === "home energy") {
            if (selectedOption === "Electricity Usage" || selectedOption === "Renewable Energy (Solar/Wind)" || selectedOption === "Appliance Usage (Washing Machine, Fridge, TV)") {
                return "How many kWh?";
            }
            if (selectedOption === "Natural Gas Usage") return "How many therms?";
            if (selectedOption === "Heating Oil") return "How many gallons?";
            if (selectedOption === "Propane Usage") return "How many gallons?";
            if (selectedOption === "LED Light Usage" || selectedOption === "Incandescent Light Usage") {
                return "How many hours?";
            }
        }
        if (activityType === "shopping") {
            if (selectedOption === "Buying Shoes") return "How many pairs?";
            return selectedOption === "Plastic Packaging" ? "How many kg?" : "How many items?";
        }
        return "How much kg CO₂e?";
    };

    return (
        <>
            {/* Input data should be different depending on what kind of data is inputed */}
            <div className="flex flex-col items-center p-6">
                        <label className="text-lg font-semibold mb-2">
                            {getUnitPrompt(activityType, selectedOption)}
                        </label>
                        <input 
                            className="p-3 border rounded-lg shadow-md bg-white"
                            placeholder="Enter a number"
                            value={input}
                            onChange= {(e) => setInput(e.target.value)}
                            type="number"
                        />
            </div> 
        </>
    );
};

export { InputInfo }