import React from "react";
import back from "../assets/back.png";
import next from "../assets/next.png";
import Placeholder from 'react-bootstrap/Placeholder';

const PageChange = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent:"center"}}>
      
      <img src={back} alt=""  />
      <img src={next} alt=""  />
    </div>
  );
};

export default PageChange;
