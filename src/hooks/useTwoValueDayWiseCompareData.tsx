import { useGetData } from "../context/useGetData";
import { Label } from "../types";

const useTwoValueDayWiseCompareData = (keyOne: Label, keyTwo: Label) => {
  const { data } = useGetData();

  const rows = data?.AuthorWorklog?.rows;

  const keyOneData = {};
  const keyTwoData = {};
  rows?.forEach((value) => {
    value.dayWiseActivity?.forEach((item) => {
      const date = item.date;
      item?.items?.children?.forEach((eachCount) => {
        if (eachCount.label === keyOne) {
          if (keyOneData[date] && keyOneData[date]?.count) {
            keyOneData[date] = {
              date,
              count: Number(keyOneData[date]?.count) + Number(eachCount.count),
            };
          } else {
            keyOneData[date] = {
              date,
              count: Number(eachCount.count),
            };
          }
        }
        if (eachCount.label === keyTwo) {
          if (keyTwoData[date] && keyTwoData[date]?.count) {
            keyTwoData[date] = {
              date,
              count: Number(keyTwoData[date]?.count) + Number(eachCount.count),
            };
          } else {
            keyTwoData[date] = {
              date,
              count: Number(eachCount.count),
            };
          }
        }
      });
    });
  });

  return [keyOneData, keyTwoData];
};

export default useTwoValueDayWiseCompareData;
