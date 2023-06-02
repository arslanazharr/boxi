import "./header.css";
import "./table.css";
import search from "../graphics/header icons/search.svg";
import DriveTable1 from "./DriveTable1";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDriveTable } from "../redux/actions/tableActions";
import ReactPaginate from "react-paginate";

const DriveTable = () => {
  const DriveTable = useSelector((state) => state.allData.driveTable);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDriveTable());
  }, []);

  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 10;
  const pageVisited = pageNumber * dataPerPage;

  const displayData = DriveTable.slice(
    pageVisited,
    pageVisited + dataPerPage
  ).map((data) => {
    return (
      <tr key={data.id} className="border-b">
        <td className="py-2 pl-2 pr-4 sm:table-cell">{data.id}</td>
        <td className="py-2 pl-2 pr-4">{data.Vendor}</td>
        <td className="py-2 pl-2 pr-4">{data.TruckName}</td>
        <td className="py-2 pl-2 pr-4">{data.Campaign}</td>
        <td className="py-2 pl-2 pr-4 sm:table-cell">{data.StartDate}</td>
        <td className="py-2 pl-2 pr-4 sm:table-cell pmtSchedule">
          {/* <img src={data.icon} alt="" /> */}
          {data.PaymentSchedule}
        </td>
      </tr>
    );
  });

  const pageCount = Math.ceil(DriveTable.length / dataPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
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

        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          activeClassName={"paginationActive"}
        />
      </div>
      <DriveTable1 />
    </>
  );
};

export default DriveTable;
