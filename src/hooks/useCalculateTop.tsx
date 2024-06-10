import { useGetData } from "../context/useGetData";
import { Label } from "../types";

const useCalculateTop = (key: Label) => {
  const { data } = useGetData();

  const row = data?.AuthorWorklog?.rows;

  const countedObj = row?.reduce((acc, curr) => {
    const requiredObj = curr?.totalActivity.find((item) => item.name === key);
    if (requiredObj && requiredObj.value) {
      return {
        ...acc,
        [`${curr?.name}`]: { ...requiredObj, name: curr?.name },
      };
    }
    return acc;
  }, {});

  const sortedCountedArr =
    countedObj &&
    Object.keys(countedObj).sort(
      (a, b) => Number(countedObj[b]?.value) - Number(countedObj[a]?.value)
    );

  const toppersArry =
    sortedCountedArr &&
    sortedCountedArr.map((person) => {
      return {
        value: person,
        count: countedObj[person]?.value,
      };
    });

  console.log(toppersArry);
  return toppersArry;
};

export default useCalculateTop;
