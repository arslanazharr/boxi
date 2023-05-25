import truck from "../graphics/card icons/truck.svg";
import increase from "../graphics/card icons/increase.svg";
import decrease from "../graphics/card icons/decrease.svg";
import caseIcon from "../graphics/driveIcons/case.svg";
import "./card.css";

const DCdata = [
  {
    title: "Trucks on Campaign",
    icon: truck,
    number: 1,
    arrowIcon: increase,
    percentage: "+15%",
  },
  {
    title: "Truck Inventory",
    icon: caseIcon,
    number: 345,
    arrowIcon: decrease,
    percentage: "-3.5%",
  },
];

const DriveCards = () => {
  return (
    <>
      <div className="cards-main flex flex-wrap-custom">
        {DCdata.map((props, index) => (
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

export default DriveCards;
