import { createContext, useContext, useEffect, useState } from "react";
import { TResultDataType } from "../types";

interface ContextType {
  data?: TResultDataType | null;
}

const DataContext = createContext<ContextType>({ data: null });

export const DataContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [data, setData] = useState<TResultDataType | null>();

  useEffect(() => {
    const fetchData = async () => {
      // this is dummy data fetched through fetch api but if live api comes we can add here
      const res = await fetch("sample_data/sample_data.json");
      const result: TResultDataType = await res.json();

      if (result && result?.data) {
        setData(result?.data);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}> {children} </DataContext.Provider>
  );
};

export const useGetData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useGetData must be used inside of DataContextProvider");
  }

  return context;
};
