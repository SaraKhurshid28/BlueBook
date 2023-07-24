import React from "react";
import ".././Home.css";
const Section4 = () => {
  const list1 = [
    {
      id: 1,
      value: "General Contractors",
    },
    {
      id: 2,
      value: "Home Builders",
    },
    {
      id: 3,
      value: "Subcontractors",
    },
    {
      id: 4,
      value: "Developers",
    },
    {
      id: 5,
      value: "Supplier",
    },
    {
      id: 6,
      value: "Remodeling Constructors",
    },

    {
      id: 7,
      value: "Vendors",
    },
    {
      id: 8,
      value: "Engineers",
    },
    {
      id: 9,
      value: "Home Owners",
    },
    {
      id: 10,
      value: "Architects",
    },
  ];
  return (
    <>
      <div className="sec4MainContainer">
        <h1 className="sec4Heading"> Our Clients</h1>
        <hr className="sec4HeadingLine" />
        <div className="sec4ClientContainer">
          {list1.map((item) => {
            return (
              <div className="sec4EachItem" key={item.id}>
                {item.value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section4;
