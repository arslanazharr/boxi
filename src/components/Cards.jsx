import truck from "../graphics/card icons/truck.svg";
import increase from "../graphics/card icons/increase.svg";
import decrease from "../graphics/card icons/decrease.svg";
import "./card.css";
import speaker from "../graphics/card icons/speaker.svg";

const Cdata = [
  {
    title: "Trucks on Campaign",
    icon: truck,
    number: 24,
    arrowIcon: increase,
    percentage: "+15%",
  },
  {
    title: "Total Active Campaigns",
    icon: speaker,
    number: 45,
    arrowIcon: decrease,
    percentage: "-3.5%",
  },
  {
    title: "Total Expired Campaigns",
    icon: speaker,
    number: 5,
    arrowIcon: increase,
    percentage: "+02%",
  },
];

const Cards = () => {
  return (
    <>
      <div className="cards-main flex flex-wrap-custom">
        {Cdata.map((props, index) => (
          <>
            <div className="cards" key={index}>
              <div className="card">
                <div className="header">
                  <h2 className="title">{props.title}</h2>
                  <img className="icon" src={props.icon} />
                </div>
                <div className="content">
                  <div className="bottom-left">
                    <span className="number">{props.number}</span>
                  </div>
                  <div className="bottom-right">
                    <img className="arrowIcon" src={props.arrowIcon} />
                    <span className={`percentage card-${index + 1}`}>
                      {props.percentage}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Cards;
