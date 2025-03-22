import sprout from "../assets/sprout.png";
const Header = () => {
    return (
      <header className="flex justify-center items-center bg-lime-500 text-white p-3 shadow-md w-full text-center" id="weather-header">
        <img src={sprout} className="w-10 h-10 mr-5"/>
        <h1 className="flex items-center text-2xl font-bold gap-3 md:text-3xl">
          {/*<img src={headerImage} className={styles.weatherIcon} alt="Weather Icon" />*/}
          <span>The Carbon Footprint Tracker</span>
        </h1>
      </header>
    );
  };
  
  export { Header };
  