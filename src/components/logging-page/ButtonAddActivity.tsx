import { getTodayDate } from "../helper/date";
import { calculateCarbonFootPrint } from "../helper/calculateCarbonFootprint";
import { useDataContext, useTodayContext} from "../context";

type AddActivityButtonProp = {
    selectedOption:string, 
    setSelectedOption:(arg:string) => void,
    selectedActivity: string,
    setSelectedActivity:(arg:string) => void,
    selectedDate: string,
    setSelectedDate:(arg:string) => void,
    input: string,
    setInput: (arg:string) => void
};

const AddActivityButton = ({ 
    selectedOption, 
    setSelectedOption, 
    selectedActivity, 
    setSelectedActivity,
    selectedDate, 
    setSelectedDate,
    input, 
    setInput
}:AddActivityButtonProp) => {

    const { data, setNewData } = useDataContext();
    const { todayData, setNewTodayData } = useTodayContext();

    //Takes care of add activity
    const addActivity = () => {
        //Check that all required input are inputed
        //Check that info field should be a numeric input
        if(selectedOption === "" || selectedActivity === "" || selectedDate === "" || input === ""){
            alert("Please make sure all fields are filled out correctly!");
            return;
        }
        //Add the input in object format to mockData
        //Calculate carbon footprint data
        const newData = {
            activity_name: selectedActivity,
            activity_type: selectedOption,
            carbon_footprint: calculateCarbonFootPrint(selectedOption, selectedActivity, Number(input)),
            date: new Date(selectedDate.replace('-', '/')).toLocaleDateString("en-US")
        };

        const updatedData = [...data, newData];
        setNewData([...updatedData]);

        //If add was sucessful, update mokDataToday array, and also update the associated state
        console.log('attempting to update today data')
        console.log("inputted",newData.date, "today",getTodayDate());
        if (newData.date === getTodayDate()){
            const updatedTodayData = [...todayData, newData];
            setNewTodayData([...updatedTodayData]); 
            console.log("updated today data THIS SHOULD PRINT WHEN TODAY DATA IS UPDATED")
        }
        console.log('updating data')
        console.log(updatedData)
        console.log(newData)
        //Clear out all the inputs 
        setSelectedOption("");
        setSelectedActivity("");
        setSelectedDate("");
        setInput("")


    };

    return(
        <>
            <button 
                className=" px-3 py-1 bg-lime-500 text-white rounded-full hover:bg-lime-600"
                onClick={() => addActivity()}
            >
                Add Activity
            </button>
        </>
    ); 
}

export { AddActivityButton };