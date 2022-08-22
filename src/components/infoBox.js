import React from "react";

function InfoBox(props) {
  let order = props.order;
  var clasOrder1;
  var clasOrder2;
  if (order === "2") {
    console.log("order work");
    clasOrder1 = "order-2";
    clasOrder2 = "order-1";
  } else {
    clasOrder1 = "order-1";
    clasOrder2 = "order-2";
  }
  return (
    <div className="detail-box">
      <div className={`${clasOrder1}`}> 
      <img src={props.boximage} alt="no found" />
      </div>
      <div className={`${clasOrder2}`}>
        <h5>
        {props.heading}
        </h5>
        <p>
        {props.text}
        </p>
        <button>{props.textButton}</button>
      </div>
    </div>
  );
}

export default InfoBox;
