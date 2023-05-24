const card1Data = [
  {
    title: "Campaign 1024",
    ActiveTrucks: 23,
    InactiveTrucks: 4,
    PlaceholderTrucks: 2,
    DaysRemaining: 2,
    DaysElapsed: 2,
  },
  {
    title: "Campaign 1145",
    ActiveTrucks: 11,
    InactiveTrucks: 12,
    PlaceholderTrucks: 11,
    DaysRemaining: 11,
    DaysElapsed: 11,
  },
  {
    title: "Campaign 5507",
    ActiveTrucks: 10,
    InactiveTrucks: 25,
    PlaceholderTrucks: 7,
    DaysRemaining: 7,
    DaysElapsed: 7,
  },
];

const TableCard1 = () => {
  return (
    <>
      <div className="tableCardMain">
        <h3 className="text-xl font-bold sm:hidden">Active Campaigns</h3>
        <div className="flex flex-wrap tableCardsDiv">
          {card1Data.map((props, index) => (
            <div
              className="bg-white rounded-lg shadow-lg p-4 w-64 sm:hidden tableCards"
              key={index}
            >
              <h2 className="text-xl font-bold mb-4">{props.title}</h2>

              <table className="w-full">
                <tbody>
                  <tr>
                    <th className="text-left">Active Trucks</th>
                    <td className="text-right">{props.ActiveTrucks}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Inactive Trucks</th>
                    <td className="text-right">{props.InactiveTrucks}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Placeholder Trucks</th>
                    <td className="text-right">{props.PlaceholderTrucks}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Days Remaining</th>
                    <td className="text-right">{props.DaysRemaining}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Days Elapsed</th>
                    <td className="text-right">{props.DaysElapsed}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TableCard1;
