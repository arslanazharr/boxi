import speaker from "../graphics/recentActivity/speaker.svg";
import "./recentActivity.css";

const activities = [
  {
    icon: speaker,
    text: 'New Campaign added "Boxi Campaign 105"',
    activity: "5m ago",
    underline: false,
  },
  {
    icon: speaker,
    text: 'Payment scheduled for "Campaign 1024"',
    activity: "View Details",
    underline: true,
  },
  {
    icon: speaker,
    text: "12 New Trucks Added to Inventory",
    activity: "1:32 AM",
  },
  {
    icon: speaker,
    text: 'Truck Added to Campaign "Boxi Campaign 102"',
    activity: "1:32 AM",
  },
  {
    icon: speaker,
    text: 'Payment scheduled for "Campaign 1024"',
    activity: "View Details",
    underline: true,
  },
  {
    icon: speaker,
    text: "Sarah Johnson modified Campaign Boxi 1054",
    activity: "Last Thursday 3:34 AM",
  },
  {
    icon: speaker,
    text: "Sarah deleted Campaign 101",
    activity: "Last Thursday 3:34 AM",
  },
];

const RecentActivity = () => {
  return (
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
  );
};

export default RecentActivity;
