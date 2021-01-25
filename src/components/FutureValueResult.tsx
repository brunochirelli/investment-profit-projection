import React, { useContext } from "react";

import { Box, Typography } from "@material-ui/core";

import { numberToCurrency } from "utils/utils";
import { DataContext } from "store/DataProvider";

const FutureValueResult = () => {
  const { state } = useContext(DataContext);

  return (
    <Box>
      {!!state.monthInvestment && (
        <Box>
          <Typography variant="caption">Investimento Mensal</Typography>
          <Typography variant="h6" gutterBottom>
            {numberToCurrency(state.monthInvestment)}
          </Typography>
        </Box>
      )}

      {!!state.futureValue && (
        <Box>
          <Typography variant="caption">Valor Final</Typography>
          <Typography variant="h6" gutterBottom>
            {numberToCurrency(state.futureValue)}
          </Typography>
        </Box>
      )}

      {!!state.profit && (
        <Box>
          <Typography variant="caption">Lucro</Typography>
          <Typography variant="h6" gutterBottom>
            {numberToCurrency(state.profit)}
          </Typography>
        </Box>
      )}

      {!!state.irPercent && (
        <Box>
          <Typography variant="caption">% Imposto de Renda</Typography>
          <Typography variant="h6" gutterBottom>
            {state.irPercent * 100}%
          </Typography>
        </Box>
      )}

      {!!state.irValue && (
        <Box>
          <Typography variant="caption">Montante Imposto de Renda</Typography>
          <Typography variant="h6" gutterBottom>
            {numberToCurrency(state.irValue)}
          </Typography>
        </Box>
      )}

      {!!state.netProfit && (
        <Box>
          <Typography variant="caption">
            Valor Total Menos Imposto de Renda
          </Typography>
          <Typography variant="h6" gutterBottom>
            {numberToCurrency(state.netProfit)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FutureValueResult;
