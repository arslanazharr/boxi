import React from "react";
import arrow from "../graphics/content/arrow.svg";
import plus from "../graphics/content/plus.svg";
import "./content.css";
import DriveCards from "./DriveCards";
import DriveTable from "./DriveTable";

const Drive = () => {
  return (
    <>
      <div className="content-header">
        <div className="top-data flex flex-col lg:flex-row lg:items-center">
          <div className="flex campaignOverview">
            <h4 style={{ maxWidth: "164px" }}>Truck Vendors</h4>
            <div className="monthly-div ml-4">
              <span>Monthly</span>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="add-button contentHeader-button "
          style={{ marginRight: "32px" }}
        >
          <button className="flex items-center">
            <img className="plusIcon" src={plus} alt="" />
            New Vendor
          </button>
        </div>
      </div>

      <DriveCards />
      <DriveTable />
    </>
  );
};

export default Drive;
