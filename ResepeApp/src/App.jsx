import "./App.css";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import { styled } from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>deliciousss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.nav`
  padding: 4rem 0rem;
  display: flex;
  margin-left: 8.5rem;
  justify-content: start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
