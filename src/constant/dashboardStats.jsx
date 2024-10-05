import {
  IoBagHandle,
  IoCart,
  IoPeopleSharp,
  IoPieChartSharp,
} from "react-icons/io5";

const DASHBOARD_STATS = [
  {
    key: "TotalSales",
    label: "Total Sales",
    value: "$34525.60",
    change: "+234",
    bgColor: "bg-blue-500",
    icon: <IoBagHandle className="text-2xl text-white" />,
  },
  {
    key: "TotalExpenses",
    label: "Total Expenses",
    value: "$34525.60",
    change: "+234",
    bgColor: "bg-orange-500",
    icon: <IoPieChartSharp className="text-2xl text-white" />,
  },
  {
    key: "TotalCustomers",
    label: "Total Customers",
    value: "1800",
    change: "-11",
    bgColor: "bg-yellow-500",
    icon: <IoPeopleSharp className="text-2xl text-white" />,
  },
  {
    key: "TotalOrders",
    label: "Total Orders",
    value: "313",
    change: "+15",
    bgColor: "bg-green-500",
    icon: <IoCart className="text-2xl text-white" />,
  },
];

export { DASHBOARD_STATS };
