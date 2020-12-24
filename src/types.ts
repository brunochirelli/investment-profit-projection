/**
 * Actual shape for investment table
 */
export type InvestmentData = {
  investmentName: string;
  type: string;
  tax: string;
  initialInvestment: number;
  monthInvestment: number;
  finalValue: number;
  grossProfit: number;
  irPercent: number;
  irValue: number;
  netProfit: number;
};
