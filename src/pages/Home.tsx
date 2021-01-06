import React, { useContext, useEffect, useState } from "react";

import { Box, Button, Collapse, Container, useTheme } from "@material-ui/core";

import { DataContext } from "store/DataProvider";

import Investment from "components/Investment";
import InvestmentForm from "../components/InvestmentForm";
import Layout from "components/Layout";

const Home = () => {
  const [expanded, setExpanded] = useState(true);
  const context = useContext(DataContext);
  const { state } = context;
  const theme = useTheme();

  useEffect(() => {
    if (state.isCalculated) {
      setExpanded(false);
    }
  }, [state.isCalculated]);

  return (
    <Layout>
      <Container maxWidth="xs">
        {expanded ? null : (
          <Box
            width="100%"
            padding={1}
            marginBottom={2}
            borderRadius="0 0 0.5rem 0.5rem"
            bgcolor={theme.palette.secondary.main}
          >
            <Button fullWidth onClick={() => setExpanded(true)}>
              Editar
            </Button>
          </Box>
        )}
        <Collapse in={expanded}>
          <InvestmentForm collapseForm={setExpanded} />
        </Collapse>
        <Investment state={state} />
      </Container>
    </Layout>
  );
};

export default Home;
