const emissionFactors = [
    {  
        activity_type: "transportation",
        activities: [
            { activity_name: "Gasoline Car", unit: "miles", emission_factor: 0.404 }, // kg CO₂ per mile
            { activity_name: "Diesel Car", unit: "miles", emission_factor: 0.453 },
            { activity_name: "Hybrid Car", unit: "miles", emission_factor: 0.200 },
            { activity_name: "Electric Car", unit: "miles", emission_factor: 0 },
            { activity_name: "Bus", unit: "miles", emission_factor: 0.18 },
            { activity_name: "Train", unit: "miles", emission_factor: 0.11 },
            { activity_name: "Metro/Subway", unit: "miles", emission_factor: 0.09 },
            { activity_name: "Tram/Light Rail", unit: "miles", emission_factor: 0.09 },
            { activity_name: "Ferry", unit: "miles", emission_factor: 0.25 },
            { activity_name: "Domestic Flight", unit: "miles", emission_factor: 0.25 },
            { activity_name: "International Flight", unit: "miles", emission_factor: 0.15 },
            { activity_name: "Walking", unit: "miles", emission_factor: 0 }, 
            { activity_name: "Biking", unit: "miles", emission_factor: 0 }, 
            { activity_name: "Electric Scooter", unit: "miles", emission_factor: 0.02 },
            { activity_name: "Standard Ground Shipping", unit: "miles", emission_factor: 0.06 }, 
            { activity_name: "Express Air Shipping", unit: "miles", emission_factor: 0.50 },
            { activity_name: "Freight Truck Shipping", unit: "miles", emission_factor: 0.25 }
        ]
        // Remember to prompt user for miles traveled 
        // Total carbon footprint = emission factor * miles 
    }, 
    {
        activity_type: "home energy",
        activities: [
            { activity_name: "Electricity Usage", unit: "kWh", emission_factor: 0.92 }, // kg CO₂ per kWh
            { activity_name: "Natural Gas Usage", unit: "therms", emission_factor: 5.3 }, // kg CO₂ per therm
            { activity_name: "Heating Oil", unit: "gallons", emission_factor: 10.16 },
            { activity_name: "Propane Usage", unit: "gallons", emission_factor: 5.75 },
            { activity_name: "Renewable Energy (Solar/Wind)", unit: "kWh", emission_factor: 0 }, 
            { activity_name: "LED Light Usage", unit: "hours", emission_factor: 0.02 }, 
            { activity_name: "Incandescent Light Usage", unit: "hours", emission_factor: 0.06 },
            { activity_name: "Appliance Usage (Washing Machine, Fridge, TV)", unit: "kWh", emission_factor: 0.15 }
        ]
        // Make more sense to ask for daily average

    },
    {
        activity_type: "food & diet",
        activities: [
            { activity_name: "Beef Consumption", unit: "kg", emission_factor: 27 },
            { activity_name: "Lamb Consumption", unit: "kg", emission_factor: 39 },
            { activity_name: "Chicken Consumption", unit: "kg", emission_factor: 6.9 },
            { activity_name: "Pork Consumption", unit: "kg", emission_factor: 12.1 },
            { activity_name: "Fish Consumption", unit: "kg", emission_factor: 6.0 },
            { activity_name: "Dairy (Milk)", unit: "kg", emission_factor: 3.2 },
            { activity_name: "Cheese Consumption", unit: "kg", emission_factor: 24 },
            { activity_name: "Egg Consumption", unit: "kg", emission_factor: 4.5 },
            { activity_name: "Rice Consumption", eunit: "kg", mission_factor: 2.7 },
            { activity_name: "Wheat & Grains", unit: "kg", emission_factor: 1.6 },
            { activity_name: "Vegetable Consumption", unit: "kg", emission_factor: 0.5 },
            { activity_name: "Fruit Consumption", unit: "kg", emission_factor: 0.4 },
            { activity_name: "Legumes (Beans, Lentils, etc.)", unit: "kg", emission_factor: 0.8 },
            { activity_name: "Nuts Consumption", unit: "kg", emission_factor: 0.4 },
            { activity_name: "Soy Products (Tofu, Soy Milk)", unit: "kg", emission_factor: 1.0 }
        ]
        // Remember to prompt user for weight (kg)
        //Total carbon foorpint = emission factor * weight
    },
    {  
        activity_type: "shopping",
        activities: [
            { activity_name: "Buying New Clothes", unit: "items", emission_factor: 5 }, 
            { activity_name: "Buying Shoes", unit: "pairs", emission_factor: 10 }, 
            { activity_name: "Buying Electronics (Phones, Laptops)", unit: "items", emission_factor: 50 }, 
            { activity_name: "Buying Furniture", unit: "items", emission_factor: 80 }, 
            { activity_name: "Plastic Packaging", unit: "kg", emission_factor: 6 }, 
            { activity_name: "Buying Fast Fashion", unit: "items", emission_factor: 8 },
            { activity_name: "Reusable Shopping (Second-hand / Thrifting)", unit: "items", emission_factor: 1 }
        ]
    },
    {  
        activity_type: "waste & recycling",
        activities: [
            { activity_name: "Landfilled Food Waste", unit: "kg", emission_factor: 0.5 },
            { activity_name: "Recycled Paper", unit: "kg", emission_factor: -1.2 },
            { activity_name: "Recycled Glass", unit: "kg", emission_factor: -0.5 },
            { activity_name: "Recycled Aluminum Can", unit: "can", emission_factor: -0.01 },
            { activity_name: "Plastic Waste", unit: "kg", emission_factor: 6 },
            { activity_name: "Glass Waste", unit: "kg", emission_factor: 0.5},
            { activity_name: "Paper Waste", unit: "kg", emission_factor: 1.5},
            { activity_name: "Composting Food Waste", unit: "kg", emission_factor: -0.2 } 
        ]
    },
    {
        activity_type: "water usage",
        activities: [
            { activity_name: "Bottled Water", unit: "liters", emission_factor: 0.5 },
            { activity_name: "Tap Water Usage", unit: "liters", emission_factor: 0.0015 }
        ]  
    },
  ];
  export default emissionFactors;





  