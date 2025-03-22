import { getTodayDate } from "../helper/date";

//filtering for the most recent 7 days 
//Mock data
export type Activity = {
    activity_name: string;
    activity_type: string;
    carbon_footprint: number;
    date: string;
};

const mockData:Activity[]= [
    { 
        activity_name: "Gasoline Car", 
        activity_type: "transportation", 
        carbon_footprint: 40.4, 
        date: "1/05/2025" 
    },
    { 
        activity_name: "Bus", 
        activity_type: "transportation", 
        carbon_footprint: 9.0, 
        date: "1/20/2025" 
    },
    { 
        activity_name: "Domestic Flight", 
        activity_type: "transportation", 
        carbon_footprint: 120.0, 
        date: "2/10/2025" 
    },
    { 
        activity_name: "Electric Scooter", 
        activity_type: "transportation", 
        carbon_footprint: 1.2, 
        date: "11/1/2023" 
    },
    { 
        activity_name: "Metro/Subway", 
        activity_type: "transportation", 
        carbon_footprint: 4.5, 
        date: "7/25/2023" 
    },
    { 
        activity_name: "Ferry", 
        activity_type: "transportation", 
        carbon_footprint: 12.0, 
        date: "5/27/2024" 
    },
    { 
        activity_name: "Express Air Shipping", 
        activity_type: "transportation", 
        carbon_footprint: 25.0, 
        date: "3/18/2024" 
    },
    { 
        activity_name: "Electricity Usage", 
        activity_type: "home energy", 
        carbon_footprint: 92.0, 
        date: "3/10/2024" 
    },
    { 
        activity_name: "Natural Gas Usage", 
        activity_type: "home energy", 
        carbon_footprint: 53.0, 
        date: "12/15/2023" 
    },
    { 
        activity_name: "LED Light Usage", 
        activity_type: "home energy", 
        carbon_footprint: 2.0, 
        date: "9/25/2023" 
    },
    { 
        activity_name: "Incandescent Light Usage", 
        activity_type: "home energy", 
        carbon_footprint: 6.0, 
        date: "6/08/2024" 
    },
    { 
        activity_name: "Heating Oil", 
        activity_type: "home energy", 
        carbon_footprint: 101.6, 
        date: "1/03/2025" 
    },
    { 
        activity_name: "Beef Consumption", 
        activity_type: "food & diet", 
        carbon_footprint: 27.5, 
        date: "1/12/2025" 
    },
    { 
        activity_name: "Lamb Consumption", 
        activity_type: "food & diet", 
        carbon_footprint: 39.8, 
        date: "2/7/2024" 
    },
    { 
        activity_name: "Chicken Consumption", 
        activity_type: "food & diet", 
        carbon_footprint: 6.9, 
        date: "2/15/2025" 
    },
    { 
        activity_name: "Dairy (Milk)", 
        activity_type: "food & diet", 
        carbon_footprint: 3.2, 
        date: "3/5/2024" 
    },
    { 
        activity_name: "Rice Consumption", 
        activity_type: "food & diet", 
        carbon_footprint: 2.3, 
        date: "1/2/2023" 
    },
    { 
        activity_name: "Egg Consumption", 
        activity_type: "food & diet", 
        carbon_footprint: 4.8, 
        date: "8/4/2023" 
    },
    { 
        activity_name: "Cheese Consumption", 
        activity_type: "food & diet", 
        carbon_footprint: 18.4, 
        date: "9/29/2024" 
    },
    { 
        activity_name: "Buying New Clothes", 
        activity_type: "shopping", 
        carbon_footprint: 5.0, 
        date: "5/12/2023" 
    },
    { 
        activity_name: "Buying Shoes", 
        activity_type: "shopping", 
        carbon_footprint: 10.0, 
        date: "9/18/2024" 
    },
    { 
        activity_name: "Buying Electronics (Phones, Laptops)", 
        activity_type: "shopping", 
        carbon_footprint: 50.0, 
        date: "12/22/2024" 
    },
    { 
        activity_name: "Plastic Packaging", 
        activity_type: "shopping", 
        carbon_footprint: 6.0, 
        date: "4/30/2024" 
    },
    { 
        activity_name: "Buying Furniture", 
        activity_type: "shopping", 
        carbon_footprint: 80.0, 
        date: "7/7/2023" 
    },
    { 
        activity_name: "Reusable Shopping (Second-hand / Thrifting)", 
        activity_type: "shopping", 
        carbon_footprint: 1.0, 
        date: "3/21/2025" 
    },
    { 
        activity_name: "Landfilled Food Waste", 
        activity_type: "waste & recycling", 
        carbon_footprint: 5.0, 
        date: "10/15/2023" 
    },
    { 
        activity_name: "Recycled Paper", 
        activity_type: "waste & recycling", 
        carbon_footprint: -1.2, 
        date: "2/28/2024" 
    },
    { 
        activity_name: "Recycled Aluminum Can", 
        activity_type: "waste & recycling", 
        carbon_footprint: -0.5, 
        date: "5/5/2023" 
    },
    { 
        activity_name: "Plastic Waste", 
        activity_type: "waste & recycling", 
        carbon_footprint: 6.0, 
        date: "11/12/2024" 
    },
    { 
        activity_name: "Glass Waste", 
        activity_type: "waste & recycling", 
        carbon_footprint: 0.5, 
        date: "6/3/2025" 
    },
    { 
        activity_name: "Composting Food Waste", 
        activity_type: "waste & recycling", 
        carbon_footprint: -0.2, 
        date: "9/10/2023" 
    },
    { 
        activity_name: "Bottled Water", 
        activity_type: "water usage", 
        carbon_footprint: 5.0, 
        date: "8/17/2023" 
    },
    
     //Past 7 days relative to 03/21/2025, for testing purposes
    { 
        activity_name: "Vegan Meal", 
        activity_type: "food & diet", 
        carbon_footprint: 10, 
        date: "3/19/2025" 
    },
    { 
        activity_name: "Gasoline Car", 
        activity_type: "transportation", 
        carbon_footprint: 32.3, 
        date: "3/15/2025" 
    },
    { 
        activity_name: "Electricity Usage", 
        activity_type: "home energy", 
        carbon_footprint: 78.2, 
        date: "3/15/2025" 
    },
    { 
        activity_name: "Beef Consumption", 
        activity_type: "food & diet", 
        carbon_footprint: 27.0, 
        date: "3/16/2025" 
    },
    { 
        activity_name: "Buying New Clothes", 
        activity_type: "shopping", 
        carbon_footprint: 15.0, 
        date: "3/17/2025" 
    },
    { 
        activity_name: "Plastic Waste", 
        activity_type: "waste & recycling", 
        carbon_footprint: 6.0, 
        date: "3/18/2025" 
    },
    { 
        activity_name: "Tap Water Usage", 
        activity_type: "water usage", 
        carbon_footprint: 1.5, 
        date: "3/19/2025" 
    },
    { 
        activity_name: "Bus", 
        activity_type: "transportation", 
        carbon_footprint: 4.5, 
        date: "3/20/2025" 
    },
    { 
        activity_name: "Hybrid Car", 
        activity_type: "transportation", 
        carbon_footprint: 20.0, 
        date: "3/20/2025" 
    },
    { 
        activity_name: "Recycled Paper", 
        activity_type: "waste & recycling", 
        carbon_footprint: -2.4, 
        date: "3/20/2025" 
    }

];

const mockDataToday:Activity[] = [
    { 
        activity_name: "Mock data", 
        activity_type: "food & diet", 
        carbon_footprint: 0, 
        date: getTodayDate() 
    },
    { 
        activity_name: "Mock data", 
        activity_type: "transportation", 
        carbon_footprint: 0, 
        date: getTodayDate()
    }
];


export { mockData, mockDataToday };