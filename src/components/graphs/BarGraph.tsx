import { useState, useEffect} from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartOptions } from "chart.js";
import { useDataContext } from "../context";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

type BarGraphDataType = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
    }[];
} | null;

const YearBarGraph = () => {
    //Rerender everytime new activity is logged 
    const { data } = useDataContext(); 
    const [barGraphData, setBarGraphData] = useState<BarGraphDataType>(null);
    // Chart formatting 
    const chartOptions:ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false, // Allows Tailwind to control size
        plugins: {
            title: {
                display: true, 
                text: "Overview of this year", 
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
                position: "top",
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
    // Create array that holds summary of monthly data from this current year 
    // Chart should update everytime data state updates
    useEffect(()=> {
        const curYear = new Date().getFullYear();
        const monthlyData = Array(12).fill(0);

        data.filter(activity => Number(activity.date.split("/")[2]) === curYear)
            .forEach(activity => {
                const monthIndex = Number(activity.date.split("/")[0]) - 1; 
                monthlyData[monthIndex] += activity.carbon_footprint;
            });
        //set bar graph with new data
        setBarGraphData({
            labels:[
                "January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"
            ],
            datasets: [{
                label: "This Year's Monthly Carbon Footprint (kg CO₂e)",
                data: monthlyData,
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,

            }]
        });
    }, [data]);

    return (
        <div className="w-full h-full flex items-center justify-center rounded-lg p-4">
            {barGraphData ? <Bar key={JSON.stringify(barGraphData)} data={barGraphData} options={chartOptions}/> : <p>Loading chart...</p>}
        </div>
      );
};

export { YearBarGraph };