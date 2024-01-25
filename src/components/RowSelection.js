import React, { useMemo } from "react";
import { useTable, useRowSelect } from "react-table";
import { COLUMNS } from "./Column";
import MOCK_DATA from "./MOCK_DATA.json";
import { Checkbox } from "./Checkbox";
import BarChart from "./BarChart";
import "./table.css";

export const RowSelection = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <Checkbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows } = tableInstance;

  return (
      <div>
          <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
      
    </table>
    <BarChart data={selectedFlatRows.map((row) => row.original)} />
      </div>
  );
};
