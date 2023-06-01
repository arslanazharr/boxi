import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDriveCard } from "../redux/actions/tableActions";

const DriveCards = () => {
  const DriveCard = useSelector((state) => state.allData.driveCard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDriveCard());
  }, []);

  return (
    <>
      <div className="cards-main flex flex-wrap-custom">
        {DriveCard.map((data, id) => (
          <div className="cards" key={id}>
            <div className="card">
              <div className="header">
                <h2 className="title">{data.title}</h2>
                <img className="icon" src={data.icon} />
              </div>
              <div className="content">
                <div className="bottom-left">
                  <span className="number">{data.number}</span>
                </div>
                <div className="bottom-right">
                  <img className="arrowIcon" src={data.arrowIcon} />
                  <span className={`percentage card-${id + 1}`}>
                    {data.percentage}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DriveCards;
