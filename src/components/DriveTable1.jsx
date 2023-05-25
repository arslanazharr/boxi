import plusIcon from "../graphics/content/plus.svg";
import "./table.css";
const DTD = [
  {
    title: "SHANICK TRANSPORT LLC",
    TruckName: "Marvin #1",
    Campaign: "N/A",
    StartDate: "10/01/2022",
    icon: plusIcon,
    PaymentSchedule: "Payment Schedule",
  },
  {
    title: "MARIO GUILLEN",
    TruckName: "Mario 24' White Cab",
    Campaign: "N/A",
    StartDate: "10/01/2022",
    icon: plusIcon,
    PaymentSchedule: "Payment Schedule",
  },
  {
    title: "MARIO GUILLEN",
    TruckName: "Hansen #4",
    Campaign: "N/A",
    StartDate: "10/01/2022",
    icon: plusIcon,
    PaymentSchedule: "Payment Schedule",
  },
  {
    title: "MV TRADING CORP",
    TruckName: "Mario 24'",
    Campaign: "N/A",
    StartDate: "10/01/2022",
    icon: plusIcon,
    PaymentSchedule: "Payment Schedule",
  },
  {
    title: "MARIO GUILLEN",
    TruckName: "Mario 24' Gray Cab",
    Campaign: "N/A",
    StartDate: "10/01/2022",
    icon: plusIcon,
    PaymentSchedule: "Payment Schedule",
  },
  {
    title: "DOUGLAS ARGUMEDO",
    TruckName: "Amilcar",
    Campaign: "N/A",
    StartDate: "10/01/2022",
    icon: plusIcon,
    PaymentSchedule: "Payment Schedule",
  },
  {
    title: "RUBEN CALI SERVICES",
    TruckName: "Ruben 24'",
    Campaign: "N/A",
    StartDate: "10/01/2022",
    icon: plusIcon,
    PaymentSchedule: "Payment Schedule",
  },
  {
    title: "SHANICK TRANSPORT LLC",
    TruckName: "Mario 24' White Cab",
    Campaign: "N/A",
    StartDate: "10/01/2022",
    icon: plusIcon,
    PaymentSchedule: "Payment Schedule",
  },
  {
    title: "SHANICK TRANSPORT LLC",
    TruckName: "Mario 24' White Cab",
    Campaign: "N/A",
    StartDate: "10/01/2022",
    icon: plusIcon,
    PaymentSchedule: "Payment Schedule",
  },
];

const DriveTable1 = () => {
  return (
    <>
      <div className="tableCardMain">
        <h3 className="text-xl font-bold sm:hidden">Needs Attention</h3>
        <div className="flex flex-wrap tableCardsDiv">
          {DTD.map((props, index) => (
            <div
              className="bg-white rounded-lg shadow-lg p-4 w-64 sm:hidden tableCards"
              key={index}
            >
              <h2 className="text-xl font-bold mb-4">{props.title}</h2>

              <table className="w-full">
                <tbody>
                  <tr>
                    <th className="text-left">Truck Name</th>
                    <td className="text-right">{props.TruckName}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Campaign</th>
                    <td className="text-right">{props.Campaign}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Start Date</th>
                    <td className="text-right">{props.StartDate}</td>
                  </tr>
                  <tr>
                    <th className="text-left">Payment Scehdule</th>
                    <td className="text-right">
                      <div style={{ display: "flex", justifyContent: "end" }}>
                        <img
                          style={{ marginRight: "5px" }}
                          src={props.icon}
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
