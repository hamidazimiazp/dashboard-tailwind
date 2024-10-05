import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineLogout,
} from "react-icons/hi";

const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid size={18} />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube size={18} />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart size={18} />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <HiOutlineUser size={18} />,
  },
  {
    key: "transaction",
    label: "Transaction",
    path: "/transaction",
    icon: <HiOutlineDocumentText size={18} />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <HiOutlineAnnotation size={18} />,
  },
];

const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog size={18} />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle size={18} />,
  },
  {
    key: "logout",
    label: "Logout",
    path: "/logout",
    icon: <HiOutlineLogout size={18} className="text-red-500" />,
  },
];

export { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS };
