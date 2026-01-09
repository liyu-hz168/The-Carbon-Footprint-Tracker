import { createContext, useContext } from "react";
// import { Activity } from "./graphs/mockData";
export type Activity = {
    activity_name: string,
    activity_type: string,
    carbon_footprint: number,
    activity_date: string;   // YYYY-MM-DD
};

type DataContextType = {
    data: Activity[],
    setNewData: (arg: Activity[]) => void
};

type TodayDataContextType = {
    todayData: Activity[],
    setNewTodayData: (arg: Activity[]) => void
};

type DateContextType = {
    currentDate: string,
    setCurrentDate: (arg: string) => void
}

// Setting up context for global data state
export const DataContext = createContext<DataContextType|undefined>(undefined);

export function useDataContext(){
    const context = useContext(DataContext); 

    if (context === undefined){
        throw new Error("useDataContext must be used with a DashboardContext");
    }
    return context; 
};

// Setting up context for today's data state
export const TodayContext =  createContext<TodayDataContextType|undefined>(undefined);

export function useTodayContext(){
    const context = useContext(TodayContext); 

    if (context === undefined){
        throw new Error("useDataContext must be used with a DashboardContext");
    }
    return context; 
};

// Setting up context for the date state 
export const DateContext = createContext<DateContextType|undefined>(undefined);

export function useDateContext(){
    const context = useContext(DateContext); 

    if (context === undefined){
        throw new Error("useDataContext must be used with a DashboardContext");
    }
    return context; 
};