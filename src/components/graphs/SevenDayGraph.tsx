import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, ChartOptions } from "chart.js";
import { useDateContext, useDataContext } from "../context";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

type LineGraphDataType = {
    labels: string[];
    datasets: {
        label: string,
        data: number[],
        borderColor: string,
        backgroundColor: string,
        pointBackgroundColor: string ,
        pointBorderColor:string,
    }[];
} | null;

const SevenDayGraph = () => {
    const { currentDate }= useDateContext();
    const { data } = useDataContext(); 
    const [lineGraphData, setLineGraphData] = useState<LineGraphDataType>(null);

    const chartOptions:ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false, // Allows Tailwind to control size
        plugins: {
            title: {
                display: true, 
                text: "Carbon Footprint Past 7 Days", 
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

    // When date changes this graph needs to update
    // When global data changes this graph also need to update
    // const getPastSevenDays = (): string[] => {
    //     const dates: string[] = [];
    //     const today = new Date();
    
    //     for (let i = 0; i < 7; i++) {
    //         const pastDate = new Date();
    //         pastDate.setDate(today.getDate() - i);
    
    //         const formattedDate = `${pastDate.getMonth() + 1}/${pastDate.getDate()}/${pastDate.getFullYear()}`;
    //         dates.push(formattedDate);
    //     }
    
    //     return dates;
    // };

    const getPastSevenDays = (): string[] => {
        const dates: string[] = [];
        const today = new Date();

        for (let i = 6; i >= 0; i--) { // 6 days ago → today
            const pastDate = new Date();
            pastDate.setDate(today.getDate() - i);
            const formattedDate = `${pastDate.getMonth() + 1}/${pastDate.getDate()}/${pastDate.getFullYear()}`;
            dates.push(formattedDate);
        }

        return dates;
    };


    useEffect(()=> {
        const sevenDayArr = getPastSevenDays();
        console.log(`seven day array ${sevenDayArr}`);

        const sevenDayData = Array(7).fill(0);

        const mapping: Record<string, number> = {};
        sevenDayArr.forEach((date, idx) => mapping[date] = idx);

        const formatDateToMMDDYYYY = (dateInput: string | Date) => {
            const date = new Date(dateInput);
            const month = date.getMonth() + 1; // 0-based month
            const day = date.getDate() + 1; // FIXME: figure out date bug 
            const year = date.getFullYear();
            return `${month}/${day}/${year}`;
        };

        data.filter(activity => sevenDayArr.includes(formatDateToMMDDYYYY(activity.activity_date)))
            .forEach(activity => { 
                console.log(`seven day line chart ${activity.activity_date}, after formatting ${formatDateToMMDDYYYY(activity.activity_date)}`);
                sevenDayData[mapping[formatDateToMMDDYYYY(activity.activity_date)]] += Number(activity.carbon_footprint);
            });
        //set line graph with new data
        setLineGraphData({
            labels: sevenDayArr,
            datasets: [{
                label: "Past 7 Day Carbon Footprint (kg CO₂e)",
                data: sevenDayData,
                borderColor: "rgb(177, 156, 217)",
                backgroundColor: "rgba(177, 156, 217, 0.3)",
                pointBackgroundColor: "rgb(177, 156, 217)",
                pointBorderColor: "#fff",
            }]
        });

    }, [data, currentDate]);

    return(
        <div className="w-full h-full flex items-center justify-center rounded-lg p-4">
        {lineGraphData ? (
            <Line 
                data={lineGraphData} 
                options={chartOptions} 
            />
        ) : (
            <p>Loading chart...</p>
        )}
    </div>
    ); 
};

export { SevenDayGraph };