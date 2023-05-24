import React from "react";
import "./table.css";
import arrow from "../graphics/content/arrow2.svg";
import TableCard1 from "./TableCard1";

const campaigns = [
  {
    id: 1,
    name: "Campaign 1024",
    activeTrucks: 23,
    inactiveTrucks: 4,
    placeholderTrucks: 2,
    remainingDays: 2,
    elapsedDays: 2,
  },
  {
    id: 2,
    name: "Campaign 1145",
    activeTrucks: 11,
    inactiveTrucks: 12,
    placeholderTrucks: 11,
    remainingDays: 11,
    elapsedDays: 11,
  },
  {
    id: 3,
    name: "Campaign 5507",
    activeTrucks: 10,
    inactiveTrucks: 25,
    placeholderTrucks: 7,
    remainingDays: 7,
    elapsedDays: 7,
  },
];
const Table1 = () => {
  return (
    <>
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
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b">
                <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                  {campaign.id}
                </td>
                <td className="py-2 pl-2 pr-4">{campaign.name}</td>
                <td className="py-2 pl-2 pr-4">{campaign.activeTrucks}</td>
                <td className="py-2 pl-2 pr-4">{campaign.inactiveTrucks}</td>
                <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                  {campaign.placeholderTrucks}
                </td>
                <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                  {campaign.remainingDays}
                </td>
                <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                  {campaign.elapsedDays}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TableCard1 />
    </>
  );
};

export default Table1;
