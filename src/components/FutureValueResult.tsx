import React from "react";

import { Box, Typography } from "@material-ui/core";

import { InvestmentInputs } from "types";
import { numberToCurrency } from "utils/utils";

type InvestmentProps = {
  state: InvestmentInputs;
};

const Investment = ({ state }: InvestmentProps) => {
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

export default Investment;
