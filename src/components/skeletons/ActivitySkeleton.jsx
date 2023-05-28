import React from "react";

const ActivitySkeleton = () => {
  return (
    <div className="top-div">
      <h4 className="">Recent Activity</h4>
      <div className="main-activityDiv">
        <div className="activity-content">
          <div className="activity">
            <img
              className="icon mb-4 h-6 w-6 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"
              alt=""
            />
            <span className="mb-4 h-5 w-24 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></span>
          </div>
          <span className=""></span>
        </div>
        <div className="activity-content">
          <div className="activity">
            <img
              className="icon mb-4 h-6 w-6 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"
              alt=""
            />
            <span className="mb-4 h-5 w-24 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></span>
          </div>
          <span className=""></span>
        </div>
        <div className="activity-content">
          <div className="activity">
            <img
              className="icon mb-4 h-6 w-6 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"
              alt=""
            />
            <span className="mb-4 h-5 w-24 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></span>
          </div>
          <span className=""></span>
        </div>
        <div className="activity-content">
          <div className="activity">
            <img
              className="icon mb-4 h-6 w-6 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"
              alt=""
            />
            <span className="mb-4 h-5 w-24 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></span>
          </div>
          <span className=""></span>
        </div>

        <div className="mb-4 h-5 w-40 animate-pulse rounded-full bg-gray-200 dark:bg-gray-400"></div>
      </div>
    </div>
  );
};

export default ActivitySkeleton;
