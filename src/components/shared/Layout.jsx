import { Outlet } from "react-router-dom";
import SideBar from "../modules/SideBar/SideBar";
import Header from "../modules/Header/Header";

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <SideBar />
      <div className="flex-1">
        <Header />
        <main className="overflow-scroll h-full pb-16">
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>
    </div>
  );
};

export default Layout;
