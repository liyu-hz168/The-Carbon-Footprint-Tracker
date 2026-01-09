import { getTodayDate } from "../helper/date";
import { calculateCarbonFootPrint } from "../helper/calculateCarbonFootprint";
import { useDataContext, useTodayContext, Activity} from "../context";
//import { useState } from "react";

type ActivityDB = {
  id: number;                // returned from DB
  user_id: number;
  emission_date: string;     // YYYY-MM-DD
  emission_type: string;
  amount: number;
  created_at: string;        // timestamp from DB
};

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


const addActivityToDB = async (
  activity: Activity,
  userId: number
): Promise<ActivityDB | null> => {
  try {
    const response = await fetch("http://localhost:5003/emission/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        emission: activity,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to add emission: ${errorText}`);
    }

    const savedEmission: ActivityDB = await response.json();
    return savedEmission;

  } catch (err) {
    console.error("Error adding emission to DB:", err);
    alert("Failed to save activity to database.");
    return null;
  }
};

// Button component that allows the user to add their inputed information as a new activity 
// Button will give warning if field not filled out correctly 
// Button will trigger carbon footprint calculation based on user input 
// If the inputed acitivty is from current day, it will be displayed on the TodaySummary list 

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
    
    //Prior to database integration
    // //Takes care of add activity
    // const addActivity = () => {
    //     //Check that all required input are inputed
    //     //Check that info field should be a numeric input
    //     if(selectedOption === "" || selectedActivity === "" || selectedDate === "" || input === ""){
    //         alert("Please make sure all fields are filled out correctly!");
    //         return;
    //     }
    //     //Add the input in object format to mockData
    //     //Calculate carbon footprint data
    //     const newData = {
    //         activity_name: selectedActivity,
    //         activity_type: selectedOption,
    //         carbon_footprint: calculateCarbonFootPrint(selectedOption, selectedActivity, Number(input)),
    //         date: new Date(selectedDate.replace('-', '/')).toLocaleDateString("en-US")
    //     };

    //     const updatedData = [...data, newData];
    //     setNewData([...updatedData]);

    //     //If add was sucessful, update mockDataToday array, and also update the associated state
    //     console.log('attempting to update today data')
    //     console.log("inputted",newData.date, "today",getTodayDate());
    //     if (newData.date === getTodayDate()){
    //         const updatedTodayData = [...todayData, newData];
    //         setNewTodayData([...updatedTodayData]); 
    //         console.log("updated today data THIS SHOULD PRINT WHEN TODAY DATA IS UPDATED")
    //     }
    //     console.log('updating data')
    //     console.log(updatedData)
    //     console.log(newData)
    //     //Clear out all the inputs 
    //     setSelectedOption("");
    //     setSelectedActivity("");
    //     setSelectedDate("");
    //     setInput("")
    // };

    // Note in dev, react strict mode makes the effect run twice
    const addActivity = async () => {

        if(selectedOption === "" || selectedActivity === "" || selectedDate === "" || input === ""){
            alert("Please make sure all fields are filled out correctly!");
            return;
        }

        const emission:Activity = {
            activity_name: selectedActivity,
            activity_type: selectedOption,
            carbon_footprint: calculateCarbonFootPrint(selectedOption, selectedActivity, Number(input)),
            activity_date: selectedDate, // YYYY-MM-DD, date representation in db
        };

        // Save to database
        
        const savedEmission = await addActivityToDB(emission, 1); //TODO: REMEMBER TO REPLACE 1
        if (!savedEmission) return;

        const updatedData = [...data, emission];
        setNewData([...updatedData]);

        if (emission.activity_date === getTodayDate()){
            const updatedTodayData = [...todayData, emission];
            setNewTodayData([...updatedTodayData]); 
            console.log("updated today data THIS SHOULD PRINT WHEN TODAY DATA IS UPDATED")
        }

        setSelectedOption("");
        setSelectedActivity("");
        setSelectedDate("");
        setInput("");

    };

    return(
        <>
            <button 
                className="px-3 py-1 bg-lime-500 text-white rounded-full hover:bg-lime-600"
                onClick={() => addActivity()}
            >
                Add Activity
            </button>
        </>
    ); 
}

export { AddActivityButton };