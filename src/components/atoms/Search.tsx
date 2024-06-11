import React from "react";
import styled from "styled-components";

const SearchBar = styled.div`
  padding: 5px;
  border-bottom: 1px solid #ccc;
  width: 300px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 4px;
  font-size: 16px;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

type PropsType = {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
};

function Search(props: PropsType) {
  const { placeholder = "Search", value, onChange } = props;
  return (
    <div>
      <SearchBar>
        <SearchInput
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        />
        {/* <SearchButton>Search</SearchButton> */}
      </SearchBar>
    </div>
  );
}

export default Search;
