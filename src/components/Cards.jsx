import "./card.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/actions/tableActions";

import CardSkeleton from "./skeletons/CardSkeleton";

const Cards = () => {
  const card1 = useSelector((state) => state.allData.card1);
  const loading = useSelector((state) => state.allData.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <CardSkeleton />
      ) : (
        <div className="cards-main flex flex-wrap-custom">
          {card1.map((data, id) => (
            <>
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
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;
