import { FC } from "react";
import styles from "./pagination.module.scss";
import leftarrow from "../../assets/icons/pagination/leftarrow.svg";
import rightarrow from "../../assets/icons/pagination/rightarrow.svg";
interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (currentPage: number) => void;
  setItemsPerPage: (itemPerPerPage: number) => void;
  pageNumbers: Array<number>;
}

const showable = (val: number, currentPage: number, lastpage: number): any => {
  if (val === currentPage) return true;
  if (lastpage - val <= 1) return true;
  if (val - currentPage <= 2) return true;
  return false;
};

const Pagination: FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  pageNumbers,
  setItemsPerPage,
  itemsPerPage,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value);
    setItemsPerPage(newValue);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination_showing}>
        <p className={styles.pagination_showing_p}>Showing</p>
        <select value={itemsPerPage} onChange={handleChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <p className={styles.pagination_showing_p}>Out of 100</p>
      </div>
      <div className={styles.pageNumbers}>
        <img
          src={leftarrow}
          onClick={() =>
            currentPage > pageNumbers.slice(0)[0] &&
            setCurrentPage(currentPage - 1)
          }
        />
        <div className={styles.scrollable}>
          {pageNumbers.map(
            (number) =>
            
              showable(number, currentPage, pageNumbers.slice(-1)[0]) && (
                <button
                  key={number}
                  className={`${styles.button} ${
                    number === currentPage ? styles.active : ""
                  }`}
                  onClick={() => setCurrentPage(number)}
                >
                  {number + 2 == currentPage ? number + "..." : number}
                </button>
              )
          )}
        </div>
        <img
          src={rightarrow}
          onClick={() =>
            currentPage < pageNumbers.slice(-1)[0] &&
            setCurrentPage(currentPage + 1)
          }
        />
      </div>
    </div>
  );
};

export default Pagination;
