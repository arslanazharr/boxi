import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showDriveCards } from "../redux/actions/tableActions";
import { useEffect } from "react";

const DriveCards = () => {
  const DriveCard = useSelector((state) => state.allData.driveCard);
  const dispatch = useDispatch();

  const fetchDriveCard = async () => {
    try {
      const response = await axios.get(
        "https://6471f1e36a9370d5a41adaa8.mockapi.io/drivecard"
      );

      dispatch(showDriveCards(response.data));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDriveCard();
  }, []);

  useEffect(() => {
    console.log(DriveCard);
  }, [DriveCard]);

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
