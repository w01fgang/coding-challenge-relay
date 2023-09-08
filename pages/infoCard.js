import React from "react";
import InfoCard from "../components/InfoCard";
import { products } from "./api/products";

const InfoCardGeneral = () => {
  return (
    <>
      <InfoCard props={products} />
    </>
  );
};

export default InfoCardGeneral;
