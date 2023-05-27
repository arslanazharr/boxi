import React from "react";
import "./table.css";
import arrow from "../graphics/content/arrow2.svg";
import TableCard2 from "./TableCard1";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/actions/tableActions";
import TableSkeleton from "./skeletons/TableSkeleton";

const Table2 = () => {
  const table2 = useSelector((state) => state.allData.table2);

  const loading = useSelector((state) => state.allData.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <TableSkeleton />
      ) : (
        <div className="table1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Expired Campaigns</h2>
            <div className="viewAllBtn">
              <button className="text-sm text-blue-500">View All</button>
              <img src={arrow} alt="" />
            </div>
          </div>
          <table className="table w-full">
            <thead>
              <tr>
                <th className="py-2 pl-2 pr-4 hidden sm:table-cell">#</th>
                <th className="py-2 pl-2 pr-4">Campaign Name</th>
                <th className="py-2 pl-2 pr-4 hidden sm:table-cell">Trucks</th>
                <th className="py-2 pl-2 pr-4">Start Date</th>
                <th className="py-2 pl-2 pr-4">End Date</th>
              </tr>
            </thead>
            <tbody>
              {table2.map((data, id) => (
                <tr key={id} className="border-b">
                  <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                    {data.id}
                  </td>
                  <td className="py-2 pl-2 pr-4">{data.name}</td>
                  <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                    {data.Trucks}
                  </td>
                  <td className="py-2 pl-2 pr-4">{data.startDate}</td>
                  <td className="py-2 pl-2 pr-4">
                    <div className="">
                      <span>{data.endDate}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <TableCard2 />
    </>
  );
};

export default Table2;
