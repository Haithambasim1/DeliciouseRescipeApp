import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormStyle>
        <div>
          <FaSearch />
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
      </FormStyle>
    </form>
  );
}

const FormStyle = styled.div`
  margin: 0 15rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    border-radius: 1rem;
    outline: none;
    padding: 1rem 3rem;
    color: white;
    width: 100%;


   
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
