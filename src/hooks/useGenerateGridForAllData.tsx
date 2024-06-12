import React from "react";
import { useGetData } from "../context/useGetData";

const useGenerateGridForAllData = () => {
  const { data } = useGetData();

  const activityMeta = data?.AuthorWorklog?.activityMeta;
  const columns = activityMeta?.map((item) => {
    return { field: item.label, minWidth: 140 };
  });

  columns?.unshift({ field: "name", minWidth: 140 });
  columns?.unshift({ field: "date", minWidth: 140 });

  const rows = [];
  data?.AuthorWorklog?.rows.forEach((item) => {
    item?.dayWiseActivity?.forEach((activity) => {
      const emptyObj = {};
      activity?.items?.children.forEach((child) => {
        emptyObj[child.label] = child.count;
      });
      rows.push({
        ...emptyObj,
        name: item.name,
        date: activity.date,
      });
    });
  });

  return [rows, columns];
};

export default useGenerateGridForAllData;
