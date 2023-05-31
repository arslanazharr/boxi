import "./header.css";
import "./table.css";
import search from "../graphics/header icons/search.svg";
import DriveTable1 from "./DriveTable1";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { showTables } from "../redux/actions/tableActions";

const DriveTable = () => {
  const DriveTable = useSelector((state) => state.allData.driveTable);
  const dispatch = useDispatch();

  const fetchDriveTable = async () => {
    try {
      const response = await axios.get(
        "https://6471f1e36a9370d5a41adaa8.mockapi.io/drivetable"
      );

      dispatch(showTables(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDriveTable();
  }, []);
  
  return (
    <>
      <div className="table1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Needs Attention</h2>
          <div>
            <form className="relative flex flex-1" action="#">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>

              <img
                className="search-icon pointer-events-none absolute left-0 h-full w-4 "
                aria-hidden="true"
                src={search}
                alt=""
              />
              <input
                id="search-field"
                className="driveTableSearch block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </form>
          </div>
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th className="py-2 pl-2 pr-4 sm:table-cell">#</th>
              <th className="py-2 pl-2 pr-4">Vendor</th>
              <th className="py-2 pl-2 pr-4">Truck Name</th>
              <th className="py-2 pl-2 pr-4">Campaign</th>
              <th className="py-2 pl-2 pr-4 sm:table-cell">Start Date</th>
              <th className="py-2 pl-2 pr-4 sm:table-cell">Payment Schedule</th>
            </tr>
          </thead>
          <tbody>
            {DriveTable.map((props) => (
              <tr key={props.id} className="border-b">
                <td className="py-2 pl-2 pr-4 sm:table-cell">{props.id}</td>
                <td className="py-2 pl-2 pr-4">{props.Vendor}</td>
                <td className="py-2 pl-2 pr-4">{props.TruckName}</td>
                <td className="py-2 pl-2 pr-4">{props.Campaign}</td>
                <td className="py-2 pl-2 pr-4 sm:table-cell">
                  {props.StartDate}
                </td>
                <td className="py-2 pl-2 pr-4 sm:table-cell pmtSchedule">
                  <img src={props.icon} alt="" />
                  {props.PaymentSchedule}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DriveTable1 />
    </>
  );
};

export default DriveTable;
