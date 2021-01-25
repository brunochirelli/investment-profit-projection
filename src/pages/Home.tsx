import React from "react";
import { Link } from "react-router-dom";

import { Container, Typography, Box } from "@material-ui/core";

const Home = () => {
  return (
    <Container component={Box} py={2}>
      <Typography variant="h3" gutterBottom>
        Calculadoras de Investimentos
      </Typography>
      <Typography
        variant="h5"
        component={Link}
        to="/future-value"
        style={{ color: "inherit" }}
      >
        Future Value
      </Typography>
    </Container>
  );
};

export default Home;
