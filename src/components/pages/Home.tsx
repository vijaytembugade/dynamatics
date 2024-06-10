import Navbar from "../atoms/NavBar";
import Sidebar from "../atoms/Sibdbar";
import IconHistory from "../../assets/HistoryIcon";
import IconGroupOutline from "../../assets/GroupIcon";
import IconUser from "../../assets/UserIcon";
import styled from "styled-components";
import OverviewSection from "../oraganism/OverviewSection";

const tabs = [
  { name: "overview", icon: IconGroupOutline },
  { name: "timelline", icon: IconHistory },
  { name: "users", icon: IconUser },
];

const MainSection = styled.div`
  margin-left: 16rem;
  margin-top: 3rem;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar tabs={tabs} />
      <MainSection>
        <OverviewSection />
      </MainSection>
    </>
  );
};

export default Home;
