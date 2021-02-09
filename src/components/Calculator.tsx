import React, { useContext } from "react";
import styled from "styled-components";

import { Drawer, Typography, useMediaQuery, useTheme } from "@material-ui/core";

import { DataContext } from "store/DataProvider";

type CalculatorProps = {
  id: string;
  open: boolean;
  toggle: () => void;
  form: React.ElementType;
};

/**
 * Calculator
 *
 * This is the wrapper for every project calculator.
 *
 * @component
 */
const Calculator = ({ id, open, toggle, form: Form }: CalculatorProps) => {
  const { state } = useContext(DataContext);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <section id={id}>
      {mdUp ? (
        // form forward
        <Form state={state} toggle={toggle} />
      ) : (
        <CalculatorStyled>
          <BarStyled>
            <Typography className="text">Calculadora</Typography>
            <Typography className="text" onClick={toggle}>
              Editar
            </Typography>
          </BarStyled>
          <Drawer
            anchor="top"
            open={open}
            onClose={toggle}
            PaperProps={{ style: { background: theme.palette.secondary.main } }}
          >
            <Form state={state} toggle={toggle} />
          </Drawer>
        </CalculatorStyled>
      )}
    </section>
  );
};

const CalculatorStyled = styled.div`
  height: 100%;
`;

const BarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 1rem;

  .text {
    font-weight: bolder;
    font-family: "Roboto Mono", monospace;

    &:nth-of-type(1) {
      font-size: 1.1rem;
    }

    &:nth-of-type(2) {
      text-transform: uppercase;
    }
  }
`;

export default Calculator;
