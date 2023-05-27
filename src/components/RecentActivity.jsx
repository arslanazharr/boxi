import { useSelector } from "react-redux";
import "./recentActivity.css";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/actions/tableActions";
import { useEffect } from "react";
import ActivitySkeleton from "./skeletons/ActivitySkeleton";

const RecentActivity = () => {
  const activities = useSelector((state) => state.allData.activities);
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
        <ActivitySkeleton />
      ) : (
        <div className="top-div">
          <h4>Recent Activity</h4>
          <div className="main-activityDiv">
            {activities.map((activity, index) => (
              <div key={index} className="activity-content">
                <div className="activity">
                  <img className="icon" src={activity.icon} alt="" />
                  <span>{activity.text}</span>
                </div>
                <span className={`activityDetail activityDetail-${index + 1}`}>
                  {activity.activity}
                </span>
              </div>
            ))}
            <div className="viewAll">
              <span>View All</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentActivity;
