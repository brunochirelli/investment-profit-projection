import { Container } from "@material-ui/core";
import Investment from "components/Investment";
import React from "react";
import InvestmentForm from "../components/InvestmentForm";

const Home = () => {
  return (
    <Container maxWidth="sm">
      <InvestmentForm />
      <Investment />
    </Container>
  );
};

export default Home;
