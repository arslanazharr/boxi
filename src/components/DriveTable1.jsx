import { useSelector } from "react-redux";
import "./table.css";

const DriveTable1 = () => {
  const DriveTableCard = useSelector((state) => state.allData.driveTableCard);

  return (
    <>
      <div className="tableCardMain">
        <h3 className="text-xl font-bold sm:hidden">Needs Attention</h3>
        <div className="flex flex-wrap tableCardsDiv">
          {DriveTableCard.map((data, id) => (
            <div
              className="bg-white rounded-lg shadow-lg p-4 w-64 sm:hidden tableCards"
              key={id}
            >
              <h2 className="text-xl font-bold mb-4">{data.title}</h2>

              <table className="w-full">
                <tbody>
                  <tr>
                    <th className="text-left">Truck Name</th>
                    <td className="text-right">{data.TruckName}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Campaign</th>
                    <td className="text-right">{data.Campaign}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Start Date</th>
                    <td className="text-right">{data.StartDate}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Payment Scehdule</th>
                    <td className="text-right">
                      <div style={{ display: "flex", justifyContent: "end" }}>
                        <img
                          style={{ marginRight: "5px" }}
                          src={data.icon}
                          alt=""
                        />
                      </div>
                    </td>
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

export default DriveTable1;
