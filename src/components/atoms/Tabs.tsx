import React, { memo, useState } from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

type TabItemProps = {
  active: boolean;
};

const TabItem = styled.li<TabItemProps>`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.active ? "2px solid var(--primaryColor)" : "none"};
  color: ${(props) => (props.active ? "var(--primaryColor)" : "#333")};
  font-size: 1rem;
`;

const TabPanel = styled.div`
  padding: 2rem;
  width: 100%;
`;

const Tabs = ({ children }: { children: JSX.Element }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <TabsContainer>
      <TabList>
        {React.Children.map(children, (child, index) => (
          <TabItem
            key={index}
            active={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </TabItem>
        ))}
      </TabList>
      <TabPanel>{React.Children.toArray(children)[activeTab]}</TabPanel>
    </TabsContainer>
  );
};

export default memo(Tabs);
