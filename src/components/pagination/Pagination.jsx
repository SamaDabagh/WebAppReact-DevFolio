import { useState } from "react";

const Pagination = ({ data }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  return (
    <div>
      <ul>
        {data.length > 0 &&
          data.map((todo, index) => {
            return <li key={index}>{todo.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default Pagination;
