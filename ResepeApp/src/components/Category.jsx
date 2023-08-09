import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
function Category() {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>

      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  background: linear-gradient(35deg, #494949, #313131);
  transform: scale(0.8);
  margin-right: 2rem;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;

  h4 {
    font-size: 0.7rem;
    color: white;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
    transition: 0.2s ease;


    svg{
      color: white;
    }
    h4{
      color: white;
    }
  }
`;

export default Category;
