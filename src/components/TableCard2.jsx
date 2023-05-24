const card2Data = [
  {
    title: "Campaign 1024",
    Trucks: 23,
    StartDate: "10/01/2023",
    EndDate: "10/01/2023",
  },
  {
    title: "Campaign 1145",
    Trucks: 11,
    StartDate: "10/01/2023",
    EndDate: "10/01/2023",
  },
  {
    title: "Campaign 5507",
    Trucks: 10,
    StartDate: "10/01/2023",
    EndDate: "10/01/2023",
  },
];

const TableCard2 = () => {
  return (
    <>
      <div className="tableCardMain">
        <h3 className="text-xl font-bold sm:hidden">Expired Campaigns</h3>
        <div className="flex flex-wrap tableCardsDiv">
          {card2Data.map((props, index) => (
            <div
              className="bg-white rounded-lg shadow-lg p-4 w-64 sm:hidden tableCards"
              key={index}
            >
              <h2 className="text-xl font-bold mb-4">{props.title}</h2>

              <table className="w-full">
                <tbody>
                  <tr>
                    <th className="text-left">Active Trucks</th>
                    <td className="text-right">{props.Trucks}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Inactive Trucks</th>
                    <td className="text-right">{props.StartDate}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Placeholder Trucks</th>
                    <td className="text-right">{props.EndDate}</td>
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

export default TableCard2;
