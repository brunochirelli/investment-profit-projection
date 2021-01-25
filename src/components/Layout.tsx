/**
 * TODO   Should reset isCalculated value to false on every mount
 */

import React, { useContext, useState } from "react";
import styled from "styled-components";

import Calculator from "components/Calculator";
import Header from "components/Header";
import Results from "components/Results";
import { DataContext } from "store/DataProvider";

type LayoutProps = {
  form: React.ElementType;
  result: React.ElementType;
  children?: React.ReactNode;
};

/**
 * Layout
 * Tooks a form and a result component wrapping it in a grid layout.
 * Also, handles de state of each component to be or not shown.
 *
 * @component
 */
const Layout = ({ form, result }: LayoutProps) => {
  const { state } = useContext(DataContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(!state.isCalculated);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setCalcOpen(false);
  };

  const toggleCalc = () => {
    setCalcOpen(!calcOpen);
    setMenuOpen(false);
  };

  return (
    <LayoutStyled>
      <Header toggleMenu={toggleMenu} open={menuOpen} />

      <Calculator
        form={form}
        open={calcOpen}
        toggle={toggleCalc}
        id="calculator"
      />
      <Results result={result} id="results" />
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: 60px 45px 1fr;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 960px) {
    grid-template-rows: 1fr;
    grid-template-columns: 30% 30% 1fr;
  }

  @media screen and (min-width: 1280px) {
    grid-template-rows: 1fr;
    grid-template-columns: 300px 400px 1fr;
  }

  #header {
    overflow-y: auto;
    color: ${({ theme }) => theme.palette.secondary.main};
    background: ${({ theme }) => theme.palette.primary.main};
  }

  #calculator {
    overflow-y: auto;
    color: ${({ theme }) => theme.palette.primary.main};
    background: ${({ theme }) => theme.palette.secondary.main};
  }

  #results {
    overflow: auto;
  }
`;
