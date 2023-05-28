import { useSelector } from "react-redux";

const TableCard2 = () => {
  const TableCard2 = useSelector((state) => state.allData.TableCard2);
  return (
    <>
      <div className="tableCardMain">
        <h3 className="text-xl font-bold sm:hidden">Expired Campaigns</h3>
        <div className="flex flex-wrap tableCardsDiv">
          {TableCard2.map((data, id) => (
            <div
              className="bg-white rounded-lg shadow-lg p-4 w-64 sm:hidden tableCards"
              key={id}
            >
              <h2 className="text-xl font-bold mb-4">{data.title}</h2>

              <table className="w-full">
                <tbody>
                  <tr>
                    <th className="text-left">Active Trucks</th>
                    <td className="text-right">{data.Trucks}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Inactive Trucks</th>
                    <td className="text-right">{data.StartDate}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Placeholder Trucks</th>
                    <td className="text-right">{data.EndDate}</td>
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
