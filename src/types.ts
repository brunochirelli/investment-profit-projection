/**
 * Actual shape for investment table
 */
export type InvestmentData = {
  investmentName: string;
  rate: number;
  initialInvestment: number;
  monthInvestment: number;
  futureValue: number;
  grossProfit: number;
  irPercent: number;
  irValue: number;
  netProfit: number;
};

export type InvestmentInputs = {
  investmentName: string;
  rate: number;
  initialInvestment: number;
  monthInvestment: number;
  presentValue: number;
  startDate: string;
  endDate: string;
};
