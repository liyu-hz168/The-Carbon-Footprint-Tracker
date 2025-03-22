import { useState, useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartOptions } from "chart.js";
import { useDataContext } from "../context";

ChartJS.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

type DoughnutGraphDataType = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
} | null;

const DoughnutGraph = () => {
    //Rerender everytime new activity is logged 
    const { data } = useDataContext(); 
    const [doughnutGraphData, setDoughnutGraphData] = useState<DoughnutGraphDataType>(null);
    // Chart formatting 
    const chartOptions:ChartOptions<"doughnut"> = {
        responsive: true,
        maintainAspectRatio: false, // Allows Tailwind to control size
        plugins: {
            title: {
                display: true, 
                text: "Summary of Your Carbon Footprint", 
                font: {
                    size: 16, 
                    weight: "bold", 
                },
                color: "#333",
                padding: {
                    top: 10,
                    bottom: 20, 
                },
            },
            legend: {
                display: true,
                position: "right",
                labels: {
                    font: {
                        size: 10, 
                    },
                    boxWidth: 10, 
                },
            },
            tooltip: {
                bodyFont: {
                    size: 10, 
                },
                titleFont: {
                    size: 12, 
                }
            }
        }
      };
    // Create array that holds summary from all of the user data 
    // Chart should update everytime data state updates
    useEffect(()=> {
        // Colors for the different categories 
        const backgroundColors = [
            "rgba(255, 179, 186, 0.5)", 
            "rgba(255, 223, 186, 0.5)", 
            "rgba(255, 255, 186, 0.5)",
            "rgba(186, 255, 201, 0.5)",
            "rgba(186, 225, 255, 0.5)",
            "rgba(205, 186, 255, 0.5)",
            "rgba(255, 186, 255, 0.5)" 
        ];
        // Mapping used to map all activity types to an index 
        const mapping = {
            "transportation": 0, 
            "home energy": 1, 
            "food & diet": 2,
            "shopping": 3,
            "waste & recycling": 4,
            "water usage": 5,
            "other": 6
        };
        const categoryData = Array(7).fill(0);
        data.forEach( activity => {
                const categoryIndex = mapping[activity.activity_type as keyof typeof mapping];
                categoryData[categoryIndex] += activity.carbon_footprint;
        });
        //set bar graph with new data
        setDoughnutGraphData({
            labels: Object.keys(mapping).map(key => key),
            datasets: [{
                label: "Summary of Your Carbon Footprint (kg CO₂e)",
                data: categoryData,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors.map(color => color.replace("0.5", "1")),
                borderWidth: 1,

            }]
        });
    }, [data]);

    return (
        <div>
            <div className="w-100 h-70">
                {doughnutGraphData ? <Doughnut key={JSON.stringify(doughnutGraphData)} data={doughnutGraphData} options={chartOptions}/> : <p>Loading chart...</p>}
            </div>
        </div>
      );
};

export { DoughnutGraph };