import React from "react";
import back from "../assets/back.png";
import next from "../assets/next.png";

const PageChange = ({ pageNumber, setPageNumber, totalpages }) => {
  const nextPage = () => {
    pageNumber > 0 && pageNumber < totalpages
      ? setPageNumber(pageNumber + 1)
      : setPageNumber(1);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    pageNumber >= 2 ? setPageNumber(pageNumber - 1) : setPageNumber(1);
    window.scrollTo(0, 0);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={back} alt="" onClick={previousPage} />
      <p style={{ fontSize: "8rem" }}>{pageNumber}</p>
      <img src={next} alt="" onClick={nextPage} />
    </div>
  );
};

export default PageChange;
