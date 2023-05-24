import React from "react";
import "./table.css";
import arrow from "../graphics/content/arrow2.svg";
import dots from "../graphics/content/dots.svg";
import TableCard2 from "./TableCard2";

const campaigns = [
  {
    id: 1,
    name: "Campaign 1024",
    Trucks: 23,
    startDate: "10/01/2023",
    endDate: "10/01/2023",
    dots: dots,
  },
  {
    id: 2,
    name: "Campaign 1145",
    Trucks: 11,
    startDate: "10/01/2023",
    endDate: "10/01/2023",
    dots: dots,
  },
  {
    id: 3,
    name: "Campaign 5507",
    Trucks: 10,
    startDate: "10/01/2023",
    endDate: "10/01/2023",
    dots: dots,
  },
];
const Table2 = () => {
  return (
    <>
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
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b">
                <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                  {campaign.id}
                </td>
                <td className="py-2 pl-2 pr-4">{campaign.name}</td>
                <td className="py-2 pl-2 pr-4 hidden sm:table-cell">
                  {campaign.Trucks}
                </td>
                <td className="py-2 pl-2 pr-4">{campaign.startDate}</td>
                <td className="py-2 pl-2 pr-4">
                  <div className="">
                    <span>{campaign.endDate}</span>
                    {/* <span className="ml-auto">
                      <img src={dots} alt="" />
                    </span> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TableCard2 />
    </>
  );
};

export default Table2;
