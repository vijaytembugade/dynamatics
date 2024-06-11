import styled from "styled-components";
import IconGroupOutline from "../../assets/GroupIcon";
import IconHistory from "../../assets/HistoryIcon";
import IconUser from "../../assets/UserIcon";
import Navbar from "../atoms/NavBar";
import Sidebar from "../atoms/Sibdbar";
import OverviewSection from "../oraganism/OverviewSection";
import UserDetails from "../oraganism/UserDetails";

const tabs = [
  { name: TabRoutes.overview, icon: IconGroupOutline },
  { name: TabRoutes.users, icon: IconUser },
  { name: TabRoutes.timeline, icon: IconHistory },
];

const MainSection = styled.div`
  margin-left: 16rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { TabRoutes } from "../../types";

const Main = () => {
  return (
    <>
      <Navbar />
      <Sidebar tabs={tabs} />
      <MainSection>
        <Outlet />
      </MainSection>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "overview",
        element: <OverviewSection />,
      },
      {
        path: "timeline",
        element: <>This is timeline</>,
      },
      {
        path: "users",
        element: <UserDetails />,
      },
    ],
  },
]);

const Home = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Home;
