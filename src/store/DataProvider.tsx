import React, { useReducer } from "react";
import { InvestmentInputs } from "types";

type Actions = { type: "ADD_DATA"; payload: InvestmentInputs };

interface InitialState {
  state: any;
  dispatch: React.Dispatch<Actions>;
}

const initialState: any = {
  investmentName: "",
  rate: 0,
  initialInvestment: 0,
  monthInvestment: 0,
  futureValue: 0,
  profit: 0,
  irPercent: 0,
  irValue: 0,
  netProfit: 0,
  isCalculated: false,
  startDate: null,
  endDate: null,
  presentValue: 0,
};

const DataContext = React.createContext(initialState);

const reducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
};

type DataProviderProps = {
  children: React.ReactNode;
};

const DataProvider = ({ children }: DataProviderProps) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  const value = { state, dispatch };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
