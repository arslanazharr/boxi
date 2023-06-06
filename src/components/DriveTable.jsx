import "./header.css";
import "./table.css";
import search from "../graphics/header icons/search.svg";
import DriveTable1 from "./DriveTable1";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDriveTable } from "../redux/actions/tableActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DriveTable = () => {
  const DriveTable = useSelector((state) => state.allData.driveTable);
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);

  const limit = 10;
  const pageVisited = (pageNumber - 1) * limit;

  useEffect(() => {
    dispatch(fetchDriveTable(pageNumber, limit));
  }, [pageNumber, limit]);

  const displayData = DriveTable.slice(pageVisited, pageVisited + limit).map(
    (data) => {
      return (
        <tr key={data.id} className="border-b">
          <td className="py-2 pl-2 pr-4 sm:table-cell">{data.id}</td>
          <td className="py-2 pl-2 pr-4">{data.Vendor}</td>
          <td className="py-2 pl-2 pr-4">{data.TruckName}</td>
          <td className="py-2 pl-2 pr-4">{data.Campaign}</td>
          <td className="py-2 pl-2 pr-4 sm:table-cell">{data.StartDate}</td>
          <td className="py-2 pl-2 pr-4 sm:table-cell pmtSchedule">
            {data.PaymentSchedule}
          </td>
        </tr>
      );
    }
  );

  const pageCount = Math.ceil(DriveTable.length / limit);

  const increasePage = () => {
    if (pageNumber < 10) {
      setPageNumber(pageNumber + 1);
    }
  };
  const decreasePage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

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
          <tbody>{displayData}</tbody>
        </table>

        <div className="flex justify-end mt-5 align-middle">
          <div className="flex space-x-2">
            <div className="buttonLeft">
              <button className="p-2 rounded-full bg-green-300 hover:bg-green-500 transition-all ">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="w-6 text-gray-500 arrowLeft"
                  onClick={decreasePage}
                />
              </button>
            </div>
            <div className="flex items-center">{`${pageNumber} - ${pageCount}`}</div>
            <div className="buttonRight">
              <button className="p-2 rounded-full bg-green-300 hover:bg-green-500 transition-all ">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-6 text-gray-500 arrowRight"
                  onClick={increasePage}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <DriveTable1 />
    </>
  );
};

export default DriveTable;
