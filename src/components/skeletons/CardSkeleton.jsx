const CardSkeleton = () => {
  return (
    <div className="cards-main flex flex-wrap-custom">
      <>
        <div className="cards">
          <div className="card ">
            <div className="header">
              <h2 className="title  mb-4 h-5 w-40 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></h2>
              <img className="icon  mb-4 h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400" />
            </div>
            <div className="content">
              <div className="bottom-left">
                <span className="number h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></span>
              </div>
              <div className="bottom-right">
                <img className="arrowIcon  mb-4 h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400" />
                <span className=" mb-4 h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card ">
            <div className="header">
              <h2 className="title  mb-4 h-5 w-40 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></h2>
              <img className="icon  mb-4 h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400" />
            </div>
            <div className="content">
              <div className="bottom-left">
                <span className="number h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></span>
              </div>
              <div className="bottom-right">
                <img className="arrowIcon  mb-4 h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400" />
                <span className=" mb-4 h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card ">
            <div className="header">
              <h2 className="title  mb-4 h-5 w-40 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></h2>
              <img className="icon  mb-4 h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400" />
            </div>
            <div className="content">
              <div className="bottom-left">
                <span className="number h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></span>
              </div>
              <div className="bottom-right">
                <img className="arrowIcon  mb-4 h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400" />
                <span className=" mb-4 h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></span>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CardSkeleton;
