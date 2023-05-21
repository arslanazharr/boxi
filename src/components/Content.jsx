import Cards from "./Cards";
import Cdata from "./Cdata";
import "./content.css";
import arrow from "../graphics/content/arrow.svg";
import plus from "../graphics/content/plus.svg";
import Table1 from "./Table1";
import Table2 from "./Table2";
import RecentActivity from "./RecentActivity";

const Content = () => {
  return (
    <>
      <div className="top-data flex flex-col lg:flex-row lg:items-center">
        <div className="flex">
          <h4>Campaigns Overview</h4>
          <div className="monthly-div ml-4">
            <span>Monthly</span>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="add-button mt-4 lg:mt-0 " style={{ maxWidth: "346px" }}>
          <button className="flex items-center">
            <img className="plusIcon" src={plus} alt="" />
            New Campaign
          </button>
        </div>
      </div>

      <div className="cards-main">
        {Cdata.map((val) => {
          return (
            <Cards
              tit={val.title}
              icn={val.icon}
              numb={val.number}
              arw={val.arrowIcon}
              prctg={val.percentage}
            />
          );
        })}
      </div>
      <Table1 />
      <Table2 />
      <RecentActivity />
    </>
  );
};

export default Content;
