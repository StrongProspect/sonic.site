import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = () => {
  return (
    <div>
      <Header />
      <div className="md:min-h-[calc(100vh-256px)] min-h-[calc(100vh-192px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
