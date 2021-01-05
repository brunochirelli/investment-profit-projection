import { Box } from "@material-ui/core";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "store/DataProvider";
import { InvestmentInputs } from "types";
import { futureValue, incomeTaxCalculator } from "utils/formulas";
import { dayDiff, monthDiff } from "utils/utils";

import { FormStyled } from "./InvestmentForm.styled";

/**
 * @component
 * The Objective of this component is to
 * -  get input from the user
 * -  do the calculations
 * -  insert into the screen
 */

const DataForm = () => {
  const { dispatch } = useContext(DataContext);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: InvestmentInputs) => {
    // Data to calculate future value
    const rate = Number(data.rate) / 100;
    const nper = monthDiff(new Date(data.startDate), new Date(data.endDate));
    const pmt = data.monthInvestment * -1;
    const pv = data.presentValue * -1;

    const fv = futureValue(rate, nper, pmt, pv);

    // Data to calculate income tax
    const days = dayDiff(new Date(data.startDate), new Date(data.endDate));
    const irPercent = incomeTaxCalculator(days);
    const irValue = irPercent * fv;

    // Net profit
    const netProfit = fv - irValue;

    dispatch({
      type: "ADD_DATA",
      payload: { ...data, futureValue: fv, irPercent, irValue, netProfit },
    });
  };

  return (
    <div>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="investment-name">Nome do Investimento</label>
          <input
            type="text"
            name="investmentName"
            id="investment-name"
            ref={register({ required: true })}
          />
          {errors.investmentName && (
            <span data-testid="error-msg">Investment name is required</span>
          )}
        </div>

        <Box display="flex">
          <div>
            <label htmlFor="start-date">Data de início</label>
            <input
              type="date"
              name="startDate"
              id="start-date"
              ref={register({ required: true })}
            />
            {errors.startDate && (
              <span data-testid="error-msg-1">Start date is required</span>
            )}
          </div>

          <div>
            <label htmlFor="end-date">Data Final</label>
            <input
              type="date"
              name="endDate"
              id="end-date"
              ref={register({ required: true })}
            />
            {errors.endDate && (
              <span data-testid="error-msg">End date is required</span>
            )}
          </div>
        </Box>

        <div>
          <label htmlFor="rate">Taxa mensal em %</label>
          <input
            type="number"
            name="rate"
            step="0.01"
            min="0"
            max="100"
            id="rate"
            ref={register({ required: true })}
          />
          {errors.rate && <span data-testid="error-msg">Rate is required</span>}
        </div>

        <div>
          <label htmlFor="actual-value">Investimento mensal</label>
          <input
            type="number"
            name="monthInvestment"
            id="actual-value"
            ref={register({ required: true })}
          />
          {errors.monthInvestment && (
            <span data-testid="error-msg">Month investment is required</span>
          )}
        </div>

        <div>
          <label htmlFor="present-value">Valor atual</label>
          <input
            type="number"
            name="presentValue"
            id="present-value"
            ref={register}
          />
        </div>

        <div>
          <button disabled={!!Object.keys(errors).length}>Calculate</button>
        </div>
      </FormStyled>
    </div>
  );
};

export default DataForm;
