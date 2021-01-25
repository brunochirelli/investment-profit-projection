import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "store/DataProvider";

type ResultsProps = {
  id: string;
  result: React.ElementType;
};

const Results = ({ id, result: Result }: ResultsProps) => {
  const { state } = useContext(DataContext);

  return (
    <Container component="main" id={id}>
      <Result state={state} />
    </Container>
  );
};

export default Results;
