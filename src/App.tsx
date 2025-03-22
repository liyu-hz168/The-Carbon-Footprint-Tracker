import { Header }from "./components/Header.tsx";
import { Stats } from "./components/Stats.tsx";
import { TodaySummary } from "./components/TodaySummary.tsx";
import { Goal } from "./components/Goals.tsx";
import { useState, useEffect } from "react";
import { DataContext, TodayContext, DateContext} from "./components/context.ts";
import { mockData, mockDataToday } from "./components/graphs/mockData.ts";
import { getTodayDate } from "./components/helper/date.ts";
import point_down from "./assets/point-down.gif";
import tree from "./assets/tree.png";

function App() {

  // used to reset local memory, keep for debugging 
  // localStorage.setItem("data", JSON.stringify(mockData));
  // localStorage.setItem("todayData", JSON.stringify(mockDataToday));

  const [data, setNewData] = useState(() => {
    return JSON.parse(localStorage.getItem("data") ||  JSON.stringify(mockData));
  });
  
  const [todayData, setNewTodayData] = useState(() => {
    const temp = JSON.parse(localStorage.getItem("todayData") || JSON.stringify(mockDataToday));
    console.log("temp",temp)
    return temp
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data]);

  useEffect(() => {
    localStorage.setItem('todayData', JSON.stringify(todayData));
  }, [todayData]);

  const [currentDate, setCurrentDate] = useState(getTodayDate());
  
  return (
    <div className="relative w-screen h-screen">
      <Header/>
      <div className="grid grid-rows-2 gap-2 w-full h-full">
        <DataContext.Provider value={{ data, setNewData }}>
          <TodayContext.Provider value={{ todayData, setNewTodayData }}>
            <DateContext.Provider value={{currentDate, setCurrentDate}}>
                <div className=" justify-center items-center w-screen min-h-1/2">
                  <Stats/>
                </div>
                <div className="grid grid-cols-8 gap-2">
                  <TodaySummary/> 
                  <Goal/>
                  <div className="grid grid-rows-3">
                      {/* gif */}
                      <div className=" flex items-center gap-2 row-span-1">
                        <img src={point_down} className="scale-75"></img>
                      </div>
                       {/* Resource button */}
                      <div className=" flex flex-col items-start row-span-2">
                        <label className="text-lg font-semibold"> More Resources!</label>
                        <button className="flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                          <img src={tree}></img>
                        </button>
                      </div>
                  </div>
                  
                </div>
            </DateContext.Provider>
          </TodayContext.Provider>
        </DataContext.Provider>
      </div>
    </div>
  );
};

export default App;
