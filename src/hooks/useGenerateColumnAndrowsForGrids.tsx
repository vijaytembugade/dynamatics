import React from "react";
import { useGetData } from "../context/useGetData";
import { GridRow } from "../types";
import { ColDef } from "ag-grid-community";

const useGenerateColumnAndrowsForGrids = () => {
  const { data } = useGetData();
  const activityMeta = data?.AuthorWorklog?.activityMeta;
  const columns = activityMeta?.map((item) => {
    return { field: item.label, minWidth: 140 };
  });

  columns?.unshift({ field: "name", minWidth: 140 });
  columns?.push({ field: "activeDays", minWidth: 140 });

  const rows: GridRow[] = [];
  data?.AuthorWorklog?.rows?.forEach((item) => {
    const activity = item.totalActivity?.reduce((acc, curr) => {
      if (curr.value && curr.name) {
        return { ...acc, [curr.name]: curr.value };
      }
      return acc;
    }, {} as GridRow);

    rows.push({
      ...activity,
      name: item.name,
      activeDays: String(item.activeDays.days),
    });
  });

  console.log(columns);

  return [rows, columns];
};

export default useGenerateColumnAndrowsForGrids;
