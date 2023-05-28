import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/actions/tableActions";
import { useEffect } from "react";
import TableCard1Skeleton from "./skeletons/TableCard1Skeleton";

const TableCard1 = () => {
  const TableCard1 = useSelector((state) => state.allData.TableCard1);
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.allData.loading);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <TableCard1Skeleton />
      ) : (
        <div className="tableCardMain">
          <h3 className="text-xl font-bold sm:hidden">Active Campaigns</h3>
          <div className="flex flex-wrap tableCardsDiv">
            {TableCard1.map((data, id) => (
              <div
                className="bg-white rounded-lg shadow-lg p-4 w-64 sm:hidden tableCards"
                key={id}
              >
                <h2 className="text-xl font-bold mb-4">{data.title}</h2>

                <table className="w-full">
                  <tbody>
                    <tr>
                      <th className="text-left">Active Trucks</th>
                      <td className="text-right">{data.ActiveTrucks}</td>
                    </tr>
                    <tr>
                      <th className="text-left">Inactive Trucks</th>
                      <td className="text-right">{data.InactiveTrucks}</td>
                    </tr>
                    <tr>
                      <th className="text-left">Placeholder Trucks</th>
                      <td className="text-right">{data.PlaceholderTrucks}</td>
                    </tr>
                    <tr>
                      <th className="text-left">Days Remaining</th>
                      <td className="text-right">{data.DaysRemaining}</td>
                    </tr>
                    <tr>
                      <th className="text-left">Days Elapsed</th>
                      <td className="text-right">{data.DaysElapsed}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TableCard1;
