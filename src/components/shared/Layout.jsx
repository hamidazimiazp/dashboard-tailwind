import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="bg-sky-200">sidebar</div>
      <div className="bg-teal-200">header</div>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
