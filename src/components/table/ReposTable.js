import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import React from "react";

import { AgGridReact } from "ag-grid-react";

import RepoUrlRenderer from "./RepoUrlRenderer";

function ReposTable({rowData}) {
  const columnDefs = [
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
  ];
  const frameworkComponents = {
    repoUrlRenderer: RepoUrlRenderer,
  }

  return (
    <div
      className="ag-theme-balham"
      style={{
        width: "400px",
        height: "calc(100vh - 100px)"
      }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        frameworkComponents={frameworkComponents}
      ></AgGridReact>
    </div>
  );
}

export default ReposTable;
