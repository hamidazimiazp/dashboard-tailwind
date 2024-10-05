import { Route, Routes } from "react-router-dom";
import Layout from "../components/shared/Layout";
import Invoices from "../pages/invoices/invoices";
import Dashboard from "../pages/dashboard/dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="invoices" element={<Invoices />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
