import { FC } from "react";
import userStyle from "./user.module.scss";
import threedots from "../../assets/icons/users/threedots.svg";
export interface userProps {
  id: string;
  organization: string;
  email: string;
  username: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

const User: FC<userProps> = (user): JSX.Element => {
  return (
    <div className={userStyle.user}>
      <p className={userStyle.user_data}>{user.organization}</p>
      <p className={userStyle.user_data}>{user.username}</p>
      <p className={userStyle.user_data}>{user.email}</p>
      <p className={userStyle.user_data}>{user.phoneNumber}</p>
      <p className={userStyle.user_data}>{user.dateJoined}</p>
      <p
        style={{
          backgroundColor: `${user.status === "ACTIVE" ? "green" : "red"}`,
        }}
        className={`${userStyle.user_data}  ${userStyle.user_data_bg}`}
      >
        {user.status}
      </p>
      <img className={userStyle.user_info} src={threedots} />
    </div>
  );
};

export default User;
