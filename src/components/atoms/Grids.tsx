import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component

import { ColDef } from "ag-grid-community";
type GridProps = {
  row: unknown[];
  columns: ColDef<unknown>[];
};

const Grid = (props: GridProps) => {
  const { row = [], columns = [] } = props;

  const defaultColDef: ColDef = {
    flex: 1,
  };

  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "100%", height: "100%" }}
    >
      <AgGridReact
        alwaysShowHorizontalScroll={true}
        rowData={row}
        columnDefs={columns}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Grid;
