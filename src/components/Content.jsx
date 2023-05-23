import Cards from "./Cards";
import "./content.css";
import arrow from "../graphics/content/arrow.svg";
import plus from "../graphics/content/plus.svg";
import Table1 from "./Table1";
import Table2 from "./Table2";
import RecentActivity from "./RecentActivity";

const Content = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
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
            <div
              className="add-button contentHeader-button"
              style={{ maxWidth: "346px", display: "flex-end" }}
            >
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
    </>
  );
};

export default Content;
