import sprout from "../assets/sprout.png";
const Header = () => {
    // Header component that goes at the top of the application
    return (
      <header className="flex justify-center items-center bg-lime-500 text-white p-3 shadow-md w-full text-center" id="weather-header">
        <img src={sprout} className="w-10 h-10 mr-5"/>
        <h1 className="flex items-center text-2xl font-bold gap-3 md:text-3xl">
          <span>The Carbon Footprint Tracker</span>
        </h1>
      </header>
    );
  };
  
  export { Header };
  