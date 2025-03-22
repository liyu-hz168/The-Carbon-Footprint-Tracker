type DataSelectorProp = {
    selectedDate: string, 
    setSelectedDate: (arg: string) => void
}

const DateSelector = ({ selectedDate, setSelectedDate }:DataSelectorProp) => {

  return (
    <div className="flex flex-col items-center p-4">
      <label className="text-lg font-semibold mb-2">Select a Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="p-2 border rounded-md"
      />
    </div>
  );
};

export default DateSelector;