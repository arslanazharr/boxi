import "./card.css";


const Cards = (props, index) => {
  return (
    <>
      <div>
        <div className="cards">
          <div className="card">
            <div className="header">
              <h2 className="title">{props.tit}</h2>
              <img className="icon" src={props.icn} />
            </div>
            <div className="content">
              <div className="bottom-left">
                <span className="number">{props.numb}</span>
              </div>
              <div className="bottom-right">
                <img className="arrowIcon" src={props.arw} />
                <span className="percentage">{props.prctg}</span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Cards;
