import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import React from "react";

import { AgGridReact } from "ag-grid-react";

import RepoUrlRenderer from "./RepoUrlRenderer";

function ReposTable() {
  const state = {
    columnDefs: [
      {
        headerName: "Repo",
        field: "url",
        cellRenderer: 'repoUrlRenderer',
        filter: true,
        resizable: true,
        flex: 2,
      },
      {
        headerName: "Stars",
        field: "stars",
        sortable: true,
        sort: 'desc',
        resizable: true,
        type: "numericColumn",
        flex: 1,
      }
    ],
    frameworkComponents: {
      repoUrlRenderer: RepoUrlRenderer,
    },
    rowData: [
      {
        stars: 20,
        url: "https://github.com/PatrickJS/node-everything",
      },
      {
        stars: 7,
        url: "https://github.com/ZenithDevs/eclipse",
      },
      {
        stars: 36,
        url: "https://github.com/bradyhouse/house",
      },
    ],
  };

  return (
    <div
      className="ag-theme-balham"
      style={{
        width: "400px",
      }}
    >
      <AgGridReact
        columnDefs={state.columnDefs}
        rowData={state.rowData}
        frameworkComponents={state.frameworkComponents}
      ></AgGridReact>
    </div>
  );
}

export default ReposTable;
