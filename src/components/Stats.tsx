import { YearBarGraph } from "./graphs/BarGraph";
import { DoughnutGraph } from "./graphs/DoughnutGraph";
import { SevenDayGraph } from "./graphs/SevenDayGraph";

const Stats = () => {
    return (
        <div className="relative bg-white shadow-lg p-6 rounded-lg border-4 border-lime-300 w-full h-[50vh] flex justify-between items-center">
            {/* Graph 1 */}
            <div className="w-1/3 h-full flex items-center justify-center rounded-lg p-4">
                <YearBarGraph />
            </div>

            {/* Graph 2 */}
            <div className="w-1/3 h-full flex items-center justify-center rounded-lg p-4">
                <SevenDayGraph />
            </div>

            {/* Graph 3 */}
            <div className="w-1/3 h-full flex items-center justify-center shadow-md rounded-lg p-4 border-4 border-lime-100">
                <DoughnutGraph />
            </div>
        </div>
);
    
};

export { Stats };