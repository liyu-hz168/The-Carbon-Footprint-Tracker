import { LogActivityPage } from "./LogActivityPage.tsx";


type LogActivityButtonProps = {
    isPageOpen: boolean;
    setIsPageOpen: (open: boolean) => void;
};
// Button on the TodaySummary component that opens the pop up modual 
// Pop up modual allows user to input info and log activity
const LogActivityButton = ({ isPageOpen, setIsPageOpen }:LogActivityButtonProps) => {

    return (
        <div>
            <button onClick={() => setIsPageOpen(true)} className="mb-4 px-4 py-2 bg-lime-500 text-white rounded-lg  shadow-md hover:bg-lime-600">
                Log New Activity
            </button>
            <LogActivityPage isOpen={isPageOpen} onClose={() => setIsPageOpen(false)} />
        </div>
    );
  };
  
  export { LogActivityButton };
  