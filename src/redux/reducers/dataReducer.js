import { ActionTypes } from "../constants/actionTypes";
import speakerCircled from "../../graphics/recentActivity/speaker.svg";
import speaker from "../../graphics/card icons/speaker.svg";
import truck from "../../graphics/card icons/truck.svg";
import increase from "../../graphics/card icons/increase.svg";
import plusIcon from "../../graphics/content/plus.svg";
import decrease from "../../graphics/card icons/decrease.svg";

const initialState = {
  loading: true,
  table1: [
    {
      id: 1,
      name: "Campaign 1024",
      activeTrucks: 23,
      inactiveTrucks: 4,
      placeholderTrucks: 2,
      remainingDays: 2,
      elapsedDays: 2,
    },
    {
      id: 2,
      name: "Campaign 1145",
      activeTrucks: 11,
      inactiveTrucks: 12,
      placeholderTrucks: 11,
      remainingDays: 11,
      elapsedDays: 11,
    },
    {
      id: 3,
      name: "Campaign 5507",
      activeTrucks: 10,
      inactiveTrucks: 25,
      placeholderTrucks: 7,
      remainingDays: 7,
      elapsedDays: 7,
    },
  ],
  table2: [
    {
      id: 1,
      name: "Campaign 1024",
      Trucks: 23,
      startDate: "10/01/2023",
      endDate: "10/01/2023",
    },
    {
      id: 2,
      name: "Campaign 1145",
      Trucks: 11,
      startDate: "10/01/2023",
      endDate: "10/01/2023",
    },
    {
      id: 3,
      name: "Campaign 5507",
      Trucks: 10,
      startDate: "10/01/2023",
      endDate: "10/01/2023",
    },
  ],
  activities: [
    {
      icon: speakerCircled,
      text: 'New Campaign added "Boxi Campaign 105"',
      activity: "5m ago",
      underline: false,
    },
    {
      icon: speakerCircled,
      text: 'Payment scheduled for "Campaign 1024"',
      activity: "View Details",
      underline: true,
    },
    {
      icon: speakerCircled,
      text: "12 New Trucks Added to Inventory",
      activity: "1:32 AM",
    },
    {
      icon: speakerCircled,
      text: 'Truck Added to Campaign "Boxi Campaign 102"',
      activity: "1:32 AM",
    },
    {
      icon: speakerCircled,
      text: 'Payment scheduled for "Campaign 1024"',
      activity: "View Details",
      underline: true,
    },
    {
      icon: speakerCircled,
      text: "Sarah Johnson modified Campaign Boxi 1054",
      activity: "Last Thursday 3:34 AM",
    },
    {
      icon: speakerCircled,
      text: "Sarah deleted Campaign 101",
      activity: "Last Thursday 3:34 AM",
    },
  ],
  card1: [
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
  ],
  driveTableCard: [
    {
      title: "SHANICK TRANSPORT LLC",
      TruckName: "Marvin #1",
      Campaign: "N/A",
      StartDate: "10/01/2022",
      icon: plusIcon,
      PaymentSchedule: "Payment Schedule",
    },
    {
      title: "MARIO GUILLEN",
      TruckName: "Mario 24' White Cab",
      Campaign: "N/A",
      StartDate: "10/01/2022",
      icon: plusIcon,
      PaymentSchedule: "Payment Schedule",
    },
    {
      title: "MARIO GUILLEN",
      TruckName: "Hansen #4",
      Campaign: "N/A",
      StartDate: "10/01/2022",
      icon: plusIcon,
      PaymentSchedule: "Payment Schedule",
    },
    {
      title: "MV TRADING CORP",
      TruckName: "Mario 24'",
      Campaign: "N/A",
      StartDate: "10/01/2022",
      icon: plusIcon,
      PaymentSchedule: "Payment Schedule",
    },
    {
      title: "MARIO GUILLEN",
      TruckName: "Mario 24' Gray Cab",
      Campaign: "N/A",
      StartDate: "10/01/2022",
      icon: plusIcon,
      PaymentSchedule: "Payment Schedule",
    },
    {
      title: "DOUGLAS ARGUMEDO",
      TruckName: "Amilcar",
      Campaign: "N/A",
      StartDate: "10/01/2022",
      icon: plusIcon,
      PaymentSchedule: "Payment Schedule",
    },
    {
      title: "RUBEN CALI SERVICES",
      TruckName: "Ruben 24'",
      Campaign: "N/A",
      StartDate: "10/01/2022",
      icon: plusIcon,
      PaymentSchedule: "Payment Schedule",
    },
    {
      title: "SHANICK TRANSPORT LLC",
      TruckName: "Mario 24' White Cab",
      Campaign: "N/A",
      StartDate: "10/01/2022",
      icon: plusIcon,
      PaymentSchedule: "Payment Schedule",
    },
    {
      title: "SHANICK TRANSPORT LLC",
      TruckName: "Mario 24' White Cab",
      Campaign: "N/A",
      StartDate: "10/01/2022",
      icon: plusIcon,
      PaymentSchedule: "Payment Schedule",
    },
  ],
  TableCard1: [
    {
      title: "Campaign 1024",
      ActiveTrucks: 23,
      InactiveTrucks: 4,
      PlaceholderTrucks: 2,
      DaysRemaining: 2,
      DaysElapsed: 2,
    },
    {
      title: "Campaign 1145",
      ActiveTrucks: 11,
      InactiveTrucks: 12,
      PlaceholderTrucks: 11,
      DaysRemaining: 11,
      DaysElapsed: 11,
    },
    {
      title: "Campaign 5507",
      ActiveTrucks: 10,
      InactiveTrucks: 25,
      PlaceholderTrucks: 7,
      DaysRemaining: 7,
      DaysElapsed: 7,
    },
  ],
  TableCard2: [
    {
      title: "Campaign 1024",
      Trucks: 23,
      StartDate: "10/01/2023",
      EndDate: "10/01/2023",
    },
    {
      title: "Campaign 1145",
      Trucks: 11,
      StartDate: "10/01/2023",
      EndDate: "10/01/2023",
    },
    {
      title: "Campaign 5507",
      Trucks: 10,
      StartDate: "10/01/2023",
      EndDate: "10/01/2023",
    },
  ],
  driveTable: [],
  driveCard: [],
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_TABLES:
      return { ...state, driveTable: payload };
    case ActionTypes.SHOW_DRIVE_CARDS:
      return { ...state, driveCard: payload };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
