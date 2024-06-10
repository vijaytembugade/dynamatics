import styled from "styled-components";
import { Text } from "../typography/Text";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  position: fixed;
  top: 0;
`;

const NavbarTitle = styled.a`
  color: var(--primaryColor);
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTitle href="#">
        <Text>Dynamics</Text>
      </NavbarTitle>
      {/* Add additional navbar items if needed */}
    </NavbarContainer>
  );
};

export default Navbar;
