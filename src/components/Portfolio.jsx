import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  companyAddressSet,
  companyNameSet,
  companyContactSet,
} from "../store/reducers/CompanyInfo";
const Portfolio = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.portfolio.companyName);
  const address = useSelector((state) => state.portfolio.companyAddress);
  const contact = useSelector((state) => state.portfolio.companyContact);

  React.useEffect(() => {
    dispatch(companyAddressSet("ESDS Software Solution Ltd"));
    dispatch(companyNameSet("Nashik"));
    dispatch(
      companyContactSet({
        email: " lokesh.wani@gmail.com",
        phone: "9158134553",
      })
    );
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "2px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1> My Portfolio </h1>
        <p> Welcome to my portfolio. </p>
        <p>
          Lokesh Wani
          <span>Position : Junior React Developer</span>
          <span>Experience: 2 years</span>
          <span>Skills: React, Node, Express, MongoDBssss</span>
          <span>Contact Details: 1234567890</span>
        </p>
        <p
          style={{
            borderRadius: "2px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span>Company Name : {name}</span>
          <span>Company Address : {address}</span>
          <span>Company Contact : {contact.phone}</span>
          <span>Company Email : {contact.email}</span>
        </p>
      </div>
    </>
  );
};

export default Portfolio;
