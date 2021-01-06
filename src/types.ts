export type InvestmentData = {
  investmentName: string;
  rate: number;
  initialInvestment: number;
  monthInvestment: number;
  futureValue: number;
  profit: number;
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
  startDate: Date;
  endDate: Date;
  futureValue: number;
  profit: number;
  irPercent: number;
  irValue: number;
  netProfit: number;
  isCalculated: boolean;
};
