import BuyerChart from "../../modules/BuyerChart/BuyerChart";
import DashboardStatsGrid from "../../modules/DashboardStatsGrid/DashboardStatsGrid";
import PopularProducts from "../../modules/PopularProducts/PopularProducts";
import ResentOrders from "../../modules/ResentOrders/ResentOrders";
import TransactionChart from "../../modules/TransactionChart/TransactionChart";

const DashboardTemplate = () => {
  return (
    <div className="flex gap-4 flex-col mt-4 px-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <ResentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};

export default DashboardTemplate;
