import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="md:min-h-[calc(100vh-256px)] min-h-[calc(100vh-192px)]">
        <div className="md:m-25 md:mt-15 m-5 mt-5 mb-0">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
