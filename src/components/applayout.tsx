import Navbar from './navbar';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

function Applayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Applayout;