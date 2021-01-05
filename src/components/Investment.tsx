import { Box, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DataContext } from "store/DataProvider";
import { numberToCurrency } from "utils/utils";

const Investment = () => {
  const context = useContext(DataContext);
  const { state } = context;
  return (
    <Box>
      {!!state.investmentName && (
        <Box>
          <Typography variant="caption">Nome do Investimento</Typography>
          <Typography variant="h6" gutterBottom>
            {state.investmentName}
          </Typography>
        </Box>
      )}

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
          <Typography variant="caption">Investimento Mensal</Typography>
          <Typography variant="h6" gutterBottom>
            {numberToCurrency(state.futureValue)}
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
          <Typography variant="caption">Lucro total</Typography>
          <Typography variant="h6" gutterBottom>
            {numberToCurrency(state.netProfit)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Investment;
