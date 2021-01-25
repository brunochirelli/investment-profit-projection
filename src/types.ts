export type InvestmentData = {
  investmentName?: string;
  rate: number;
  initialInvestment: number;
  monthInvestment: number;
  futureValue: number;
  profit: number;
  irPercent: number;
  irValue: number;
  netProfit: number;
};

export interface InvestmentInputs extends InvestmentData {
  presentValue: number;
  startDate: Date;
  endDate: Date;
  isCalculated: boolean;
}

export type ResolverProps = {
  calculator: string;
  children?: React.ReactNode;
  state?: InvestmentInputs;
};
