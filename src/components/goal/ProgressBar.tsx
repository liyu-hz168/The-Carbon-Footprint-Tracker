import { truncateTo3DecimalPlaces } from "../helper/truncate";
// import awesome from "../../assets/awesome.png";
// import good from "../../assets/good.png";
// import uhh from "../../assets/uhh.png";
// import bad from "../../assets/bad.png";

type ProgressBarProps = {
    progress: number
};
  
const ProgressBar = ({ progress }:ProgressBarProps) => {
    const getColor = () => {
        if (progress >= 95) return "red";
        if (progress >= 75) return "orange";
        if (progress >= 60) return "yellow";
        return "green";
      };
    return (
        <div>
            <label><b>Progress:</b> {truncateTo3DecimalPlaces(progress)}%</label>
            <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                <div 
                    className={`h-full transition-all duration-500`} 
                    style={{ width: `${progress}%`, backgroundColor: `${getColor()}`}}>
                </div>
            </div>
        </div>
    );
};

export { ProgressBar };