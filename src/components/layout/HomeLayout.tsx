import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";


const HomeLayout = () => {
  return <div>

    <Header/>
    <div>
      <Outlet/>
    </div>
  </div>;
};

export default HomeLayout;
