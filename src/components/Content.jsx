import Cards from "./Cards";
import "./content.css";
import arrow from "../graphics/content/arrow.svg";
import plus from "../graphics/content/plus.svg";
import Table1 from "./Table1";
import Table2 from "./Table2";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import RecentActivity from "./RecentActivity";

const Content = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mainContent-div">
          <div>
            <div className="content-header">
              <div className="top-data flex flex-col lg:flex-row lg:items-center">
                <div className="flex campaignOverview">
                  <h4>Campaigns Overview</h4>
                  <div className="monthly-div ml-4">
                    <span>Monthly</span>
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
              <div className="add-button contentHeader-button">
                <button className="flex items-center">
                  <img className="plusIcon" src={plus} alt="" />
                  New Campaign
                </button>
              </div>
            </div>
            <Cards />
            <Table1 />
            <Table2 />
          </div>
          <div className="main-activity-div">
            <RecentActivity />
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
