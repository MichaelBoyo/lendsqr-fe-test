import { FC, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import dashbordStyle from "./dashboard.module.scss";
import UserDetails from "../../components/userDetails/userDetals";
import Users from "../../components/users/users";
const Dashboard: FC = (): JSX.Element => {
  const [usersActive, setUsersActive] = useState(true);
  
  return (
    <div className={dashbordStyle.dashboard}>
      <Navbar />
      <div className={dashbordStyle.dashboard_body}>
        <Sidebar />
        {usersActive ? <Users /> : <UserDetails />}
      </div>
    </div>
  );
};

export default Dashboard;
