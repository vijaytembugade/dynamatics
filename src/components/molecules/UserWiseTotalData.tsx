import { useMemo, useState } from "react";
import useGenerateColumnAndrowsForGrids from "../../hooks/useGenerateColumnAndrowsForGrids";
import Button from "../atoms/Button";
import Grid from "../atoms/Grids";
import Search from "../atoms/Search";
import { FlexDiv, FlexVDiv } from "../oraganism/OverviewSection";
import { Heading } from "../typography/Heading";
import styled from "styled-components";

export const SearchAndExport = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UserWiseTotalData = () => {
  const [value, setValue] = useState<string>("");
  const [rows, columns] = useGenerateColumnAndrowsForGrids();

  const filterRows = useMemo(() => {
    return rows?.filter((item) => {
      if (item.name.includes(value)) {
        return true;
      }
      return false;
    });
  }, [value, rows]);
  return (
    <FlexVDiv>
      <Heading>User wise total data </Heading>
      <SearchAndExport>
        <Search
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search by name..."
        />
        <Button bg="#93bbfa">Export</Button>
      </SearchAndExport>
      <FlexDiv style={{ height: "50vh" }}>
        <Grid columns={columns} row={filterRows} />
      </FlexDiv>
    </FlexVDiv>
  );
};

export default UserWiseTotalData;
