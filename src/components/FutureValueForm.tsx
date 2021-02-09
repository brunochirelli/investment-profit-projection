import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Container,
  Grid,
  Hidden,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";

import { DataContext } from "store/DataProvider";
import { InvestmentInputs } from "types";
import { futureValue, incomeTaxCalculator } from "utils/formulas";
import { dayDiff, monthDiff } from "utils/utils";

import { FormStyled } from "./FutureValueForm.styled";

/**
 * @component
 */

type FutureValueProps = {
  toggle: () => void;
};

const FutureValueForm = ({ toggle }: FutureValueProps) => {
  const { dispatch, state } = useContext(DataContext);

  const { register, handleSubmit, errors } = useForm<InvestmentInputs>({
    defaultValues: { ...state, presentValue: 0 },
  });

  const onSubmit = (data: InvestmentInputs) => {
    // Data to calculate future value
    const rate = Number(data.rate) / 100;
    const nper = monthDiff(new Date(data.startDate), new Date(data.endDate));
    const pmt = data.monthInvestment * -1;
    const pv = data.presentValue * -1;

    const fv = futureValue(rate, nper, pmt, pv);

    // Data to calculate income tax
    const profit = fv - futureValue(0, nper, pmt, pv);
    const days = dayDiff(new Date(data.startDate), new Date(data.endDate));
    const irPercent = incomeTaxCalculator(days);
    const irValue = profit * irPercent;

    // Net profit
    const netProfit = fv - irValue;

    // Toggle the menu...
    toggle();

    // ...and dispatch the data
    dispatch({
      type: "ADD_DATA",
      payload: {
        ...data,
        futureValue: fv,
        irPercent,
        irValue,
        netProfit,
        profit,
        isCalculated: true,
      },
    });
  };

  const handleFormClose = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggle();
  };

  return (
    <Container style={{ paddingTop: "1rem" }}>
      <Typography variant="h4" gutterBottom>
        Future Value
      </Typography>
      <Typography>
        Calcule o valor de um investimento em determinado período.
      </Typography>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="date"
              name="startDate"
              label="Data de Início"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={register({ required: true })}
              variant="outlined"
              size="small"
              fullWidth
              error={!!errors.startDate}
              id="start-date"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="date"
              name="endDate"
              label="Data Final"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={register({ required: true })}
              variant="outlined"
              size="small"
              fullWidth
              error={!!errors.endDate}
              id="end-date"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="number"
              name="rate"
              label="Taxa mensal"
              inputProps={{
                step: "0.01",
                min: "0",
                max: "100",
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={register({ required: true })}
              variant="outlined"
              size="small"
              fullWidth
              error={!!errors.rate}
              id="rate"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="number"
              name="monthInvestment"
              label="Investimento Mensal"
              inputRef={register({ required: true })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
              variant="outlined"
              size="small"
              fullWidth
              error={!!errors.monthInvestment}
              id="month-investment"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="number"
              name="presentValue"
              label="Valor atual (opcional)"
              inputRef={register}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
              variant="outlined"
              size="small"
              fullWidth
              id="present-value"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disableElevation
            >
              Calcular
            </Button>
            <Hidden mdUp>
              <Button
                color="primary"
                size="large"
                fullWidth
                onClick={handleFormClose}
              >
                Cancelar
              </Button>
            </Hidden>
          </Grid>
        </Grid>
      </FormStyled>
    </Container>
  );
};

export default FutureValueForm;
