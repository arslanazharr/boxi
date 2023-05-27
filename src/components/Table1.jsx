import React from "react";
import "./table.css";
import arrow from "../graphics/content/arrow2.svg";
import TableCard1 from "./TableCard1";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/actions/tableActions";
import TableSkeleton from "./skeletons/TableSkeleton";

const Table1 = () => {
  const table1 = useSelector((state) => state.allData.table1);

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
            <h2 className="text-xl font-bold">Active Campaigns</h2>
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
                <th className="py-2 pl-2 pr-4">Active Trucks</th>
                <th className="py-2 pl-2 pr-4">Inactive Trucks</th>
                <th className="py-2 pl-2 pr-4 hidden sm:table-cell">
                  Placeholder Trucks
                </th>
                <th className="py-2 pl-2 pr-4 hidden sm:table-cell">
                  Days Remaining
                </th>
                <th className="py-2 pl-2 pr-4 hidden sm:table-cell">
                  Days Elapsed
                </th>
              </tr>
            </thead>
            <tbody>
              {table1.map((data, id) => (
                <tr key={id} className="border-b">
                  <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                    {data.id}
                  </td>
                  <td className="py-2 pl-2 pr-4">{data.name}</td>
                  <td className="py-2 pl-2 pr-4">{data.activeTrucks}</td>
                  <td className="py-2 pl-2 pr-4">{data.inactiveTrucks}</td>
                  <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                    {data.placeholderTrucks}
                  </td>
                  <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                    {data.remainingDays}
                  </td>
                  <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                    {data.elapsedDays}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <TableCard1 />
    </>
  );
};

export default Table1;
