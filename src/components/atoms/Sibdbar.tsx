import { useState } from "react";
import styled from "styled-components";
import IconHistory from "../../assets/HistoryIcon";
import { Text } from "../typography/Text";

const SidebarContainer = styled.div`
  margin-top: 2.5rem;
  margin-left: 9rem;
  background-color: #f1f1f1;
  height: 100vh;
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px;
`;

const TabButton = styled.button`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: ${({ active }) =>
    active ? "var(--primaryColor)" : "#e7e7e7"};
  color: ${({ active }) => (active ? "white" : "black")};
  border: none;
  text-align: left;
  cursor: pointer;
  margin-bottom: 10px;
  align-items: center;
  gap: 1rem;
  text-transform: capitalize;
`;

interface Tab {
  name: string;
  icon: React.ElementType;
}

interface Props {
  tabs: Tab[];
}

const Sidebar: React.FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab.name);
  };

  return (
    <SidebarContainer>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <TabButton
            key={tab.name}
            active={activeTab === tab.name}
            onClick={() => handleTabClick(tab)}
          >
            <Icon width="1.3rem" height="1.3rem" />
            <Text>{tab.name}</Text>
          </TabButton>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
