import { Outlet } from "react-router-dom";
import SideBar from "../modules/SideBar/SideBar";
import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <SideBar />
      <div className="flex-1 overflow-y-scroll flex-col gap-5 ">
        <Header />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
