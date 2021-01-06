import { Button, Grid, InputAdornment, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "store/DataProvider";
import { InvestmentInputs } from "types";
import { futureValue, incomeTaxCalculator } from "utils/formulas";
import { dayDiff, monthDiff } from "utils/utils";

import { FormStyled } from "./InvestmentForm.styled";

/**
 * @component
 */

type DataFormProps = {
  collapseForm: (expanded: boolean) => void;
};

const DataForm = ({ collapseForm }: DataFormProps) => {
  const { dispatch } = useContext(DataContext);

  const { register, handleSubmit, errors } = useForm<InvestmentInputs>({
    defaultValues: { presentValue: 0 },
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

    collapseForm(false);
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="investmentName"
              label="Nome do Investimento"
              inputRef={register({ required: true })}
              variant="outlined"
              size="small"
              fullWidth
              error={!!errors.investmentName}
              id="investment-name"
            />
          </Grid>

          <Grid item container xs={12} spacing={1}>
            <Grid item xs={6}>
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

            <Grid item xs={6}>
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
          </Grid>

          <Grid item container xs={12} spacing={1}>
            <Grid item xs={4}>
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
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
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

            <Grid item xs={8}>
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
          </Grid>
        </Grid>
      </FormStyled>
    </>
  );
};

export default DataForm;
