import React from "react";
import MainTable from "../components/MainTable";
import { futureValue } from "../utils/formulas";

const Home = () => {
  const fv = futureValue(0.12, 12, -1000);
  return (
    <div>
      <MainTable />
      <h1>{fv}</h1>
    </div>
  );
};

export default Home;
