import { FC } from "react";
import Card, { cardProps } from "../Card/card";
import usersIcon from "../../assets/icons/users/users.svg";
import usersPageStyle from "./users.module.scss";
import Table from "../table/table";
const stats: Array<cardProps> = [
  {
    title: "USERS",
    icon: usersIcon,
    value: "2,453",
  },
  {
    title: "ACTIVE USERS",
    icon: usersIcon,
    value: "12,453",
  },
  {
    title: "USERS WITH LOANS",
    icon: usersIcon,
    value: "12,453",
  },
  {
    title: "USERS WITH SAVINGS",
    icon: usersIcon,
    value: "102,453",
  },
];
const Users: FC = (): JSX.Element => {
  return (
    <div className={usersPageStyle.users}>
      <p className={usersPageStyle.users_heading}>Users</p>
      <div className={usersPageStyle.users_stat}>
        {stats.map((stat) => (
          <Card
            key={stat.title}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>
      <Table />
    </div>
  );
};

export default Users;
