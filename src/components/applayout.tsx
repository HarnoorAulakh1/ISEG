import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Applayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Applayout;
