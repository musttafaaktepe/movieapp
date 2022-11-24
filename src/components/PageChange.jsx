import React from "react";
import back from "../assets/back.png";
import next from "../assets/next.png";


const PageChange = ({ pageNumber, setPageNumber, totalpages }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={back} alt="" onClick={() => pageNumber >=2 ? setPageNumber(pageNumber - 1) : setPageNumber(1)} />
      <p style={{ fontSize: "8rem" }}>{pageNumber}</p>
      <img
        src={next}
        alt=""
        onClick={() => pageNumber > 0 && pageNumber<totalpages ? setPageNumber(pageNumber + 1) : setPageNumber(1)}
      />
    </div>
  );
};

export default PageChange;
