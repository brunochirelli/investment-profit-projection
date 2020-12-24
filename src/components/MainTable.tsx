import React, { useMemo } from "react";
import { useTable } from "react-table";
import { InvestmentData } from "../types";
import { TableStyled } from "./MainTable.styled";

const MainTable = () => {
  const data = useMemo(
    (): InvestmentData[] => [
      {
        investmentName: "Poupança",
        type: "Poupança",
        tax: "1%",
        initialInvestment: 0,
        monthInvestment: 1000,
        finalValue: 100000,
        grossProfit: 10000,
        irPercent: 0.1,
        irValue: 1000,
        netProfit: 10000,
      },
    ],
    []
  );

  const columns = useMemo(
    (): any[] => [
      {
        Header: "Investimento",
        accessor: "investmentName", // accessor is the "key" in the data
      },
      {
        Header: "Tipo",
        accessor: "type",
      },
      {
        Header: "Taxa",
        accessor: "tax",
      },
      {
        Header: "Valor Inicial",
        accessor: "initialInvestment",
      },
      {
        Header: "Investimento Mensal",
        accessor: "monthInvestment",
      },
      {
        Header: "Valor Final",
        accessor: "finalValue",
      },
      {
        Header: "Lucro Bruto",
        accessor: "grossProfit",
      },
      {
        Header: "Portcentagem de IR",
        accessor: "irPercent",
      },
      {
        Header: "Valor do IR",
        accessor: "irValue",
      },
      {
        Header: "Valor Líquido",
        accessor: "netProfit",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <TableStyled {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                  padding: "1rem",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </TableStyled>
  );
};

export default MainTable;
