import { memo, useMemo, useState } from "react";
import useGenerateGridForAllData from "../../hooks/useGenerateGridForAllData";
import Grid from "../atoms/Grids";
import Search from "../atoms/Search";
import { FlexDiv, FlexVDiv } from "../oraganism/OverviewSection";
import { Heading } from "../typography/Heading";
import { SearchAndExport } from "./UserWiseTotalData";

const TotalUserData = () => {
  const [value, setValue] = useState<string>("");
  const [rows, columns] = useGenerateGridForAllData();

  const filterRows = useMemo(() => {
    return rows?.filter((item) => {
      if (item.name.includes(value)) {
        return true;
      }
      return false;
    });
  }, [value, rows]);

  return (
    <>
      <FlexVDiv>
        <Heading>Users with Date wise data</Heading>
        <SearchAndExport>
          <Search
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search by name..."
          />
        </SearchAndExport>
        <FlexDiv style={{ height: "50vh" }}>
          <Grid columns={columns} row={filterRows} />
        </FlexDiv>
      </FlexVDiv>
    </>
  );
};

export default memo(TotalUserData);
