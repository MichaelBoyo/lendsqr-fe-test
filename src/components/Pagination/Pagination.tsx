import { FC } from "react";
import { getPaginationItems } from "./lib/pagination";
import PageLink from "./pagelink/PageLink";
import paginationStyle from "./pagination.module.scss";
import leftarrow from "../../assets/icons/pagination/leftarrow.svg";
import rightarrow from "../../assets/icons/pagination/rightarrow.svg";
export type PaginationProps = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (page: number) => void;
  itemsPerPage: number;
};

const Pagination: FC<PaginationProps> = ({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage,
  setItemsPerPage,
  itemsPerPage,
}) => {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value);
    setItemsPerPage(newValue);
  };
  return (
    <div className={paginationStyle.pagination}>
      <div className={paginationStyle.pagination_showing}>
        <p className={paginationStyle.pagination_showing_p}>Showing</p>
        <select
          className={paginationStyle.pagination_showing_select}
          value={itemsPerPage}
          onChange={handleChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <p className={paginationStyle.pagination_showing_p}>Out of 100</p>
      </div>
      <div className={paginationStyle.pageNumberDiv}>
        <nav
          className={paginationStyle.pagination_pageNumbers}
          aria-label="Pagination"
        >
          <img
            className={paginationStyle.pagination_pageNumbers_arrow}
            src={leftarrow}
            onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
          />

          {pageNums.map((pageNum, idx) => (
            <PageLink
              key={idx}
              active={currentPage === pageNum}
              disabled={isNaN(pageNum)}
              onClick={() => setCurrentPage(pageNum)}
            >
              {!isNaN(pageNum) ? pageNum : "..."}
            </PageLink>
          ))}

          <img
            className={paginationStyle.pagination_pageNumbers_arrow}
            src={rightarrow}
            onClick={() =>
              currentPage !== lastPage && setCurrentPage(currentPage - 1)
            }
          />
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
