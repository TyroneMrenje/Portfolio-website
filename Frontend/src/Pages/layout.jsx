
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import App from "../ui/particle";


const Layout = () => {
  const location = useLocation();

  return (
    <>
      <App/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
