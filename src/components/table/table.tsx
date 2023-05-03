import { FC, useState, useEffect } from "react";
import tableStyle from "./table.module.scss";
import { userProps } from "../user/user";
import headerDropdownIcon from "../../assets/icons/users/headerdropdown.svg";
import { getUsers } from "../../api";
import User from "../user/user";
import moment from "moment";
import Pagination from "../Pagination/Pagination";
interface tableheaderprops {
  name: string;
}

const formatName = (value: string): string => {
  if (value.length > 20) {
    return value.slice(0, 17).concat("...");
  }
  return value;
};

const checkCondition = (
  condition: boolean,
  result1: string,
  result2: string
): string => {
  return condition ? result1 : result2;
};
const getDate = (data: any): string => {
  return moment(data.createdAt).format("MMM D YYYY, h:mm:ss A");
};

const getStatus = (data: any) => {
  return data.createdAt > data.lastActiveDate
    ? "INACTIVE"
    : checkCondition(
        Date.parse(data.lastActiveDate) - Date.parse(data.createdAt) >
          ONE_YEAR &&
          Date.parse(data.lastActiveDate) - Date.parse(data.createdAt) <
            ONE_YEAR * 3,
        "PENDING",
        "ACTIVE"
      );
};

const tableHeaders: Array<tableheaderprops> = [
  { name: "ORGANZATION" },
  { name: "USERNAME" },
  { name: "EMAIL" },
  { name: "PHONE NUMBER" },
  { name: "DATE JOINED" },
  { name: "STATUS" },
];

const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;
const Table: FC = (): JSX.Element => {
  const [users, setUsers] = useState<Array<userProps>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();

      const fetchedUsers: Array<userProps> = response.map((data: any) => {
        return {
          id: data.id,
          organization: formatName(data.orgName),
          username: formatName(data.userName),
          email: formatName(data.email),
          phoneNumber: formatName(data.phoneNumber),
          status: getStatus(data),
          dateJoined: getDate(data),
        };
      });
      setUsers(fetchedUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div className={tableStyle.table}>
      <div className={tableStyle.table_header}>
        {tableHeaders.map((header) => (
          <div key={header.name} className={tableStyle.table_header_content}>
            <p className={tableStyle.table_header_content_name}>
              {header.name}
            </p>
            <img src={headerDropdownIcon} alt="table header icon" />
          </div>
        ))}
      </div>
      <div className={tableStyle.table_body}>
        {currentItems.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        lastPage={pageNumbers.length}
        maxLength={7}
        setItemsPerPage={setItemsPerPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Table;
