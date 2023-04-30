import { FC } from "react";
import userStyle from "./user.module.scss";
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
      <p className={userStyle.user_username}>{user.username}</p>
      <p className={userStyle.user_email}>{user.email}</p>
      <p className={userStyle.user_data}>{user.phoneNumber}</p>
      <p className={userStyle.user_data}>{user.dateJoined}</p>
      <p className={userStyle.user_data}>{user.status}</p>
    </div>
  );
};

export default User;
