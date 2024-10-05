import { Route, Routes } from "react-router-dom";
import Layout from "../components/shared/Layout";
// import Invoices from "../pages/invoices/invoices";
import Dashboard from "../pages/dashboard/dashboard";
import Products from "../pages/products/Products";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="login" element={<div>Login Page</div>} />
    </Routes>
  );
};

export default Router;
