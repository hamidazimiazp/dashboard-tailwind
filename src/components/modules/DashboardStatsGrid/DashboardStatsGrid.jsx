import { DASHBOARD_STATS } from "../../../constant/dashboardStats";

/* eslint-disable react/prop-types */
const DashboardStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      {DASHBOARD_STATS.map((item) => (
        <BoxWrapper key={item.key}>
          <div
            className={`rounded-full h-12 w-12 flex items-center justify-center ${item.bgColor}`}
          >
            {item.icon}
          </div>
          <div className="pl-4">
            <span className="text-sm  text-gray-500 font-light">
              {item.label}
            </span>
            <div className="flex items-center gap-2">
              <strong className="text-xl text-gray-700 font-semibold">
                {item.value}
              </strong>
              <span
                className={`text-sm ${
                  item.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.change}
              </span>
            </div>
          </div>
        </BoxWrapper>
      ))}
    </div>
  );
};

export default DashboardStatsGrid;

const BoxWrapper = ({ children }) => {
  return (
    <div className="bg-white h-20 p-2 rounded flex-1 border border-gray-300 flex items-center">
      {children}
    </div>
  );
};
