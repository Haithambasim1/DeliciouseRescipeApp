import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTap, setActiveTap] = useState("Instruction");
  const [showIngredients, setShowIngredients] = useState(false); // Add this state
  const params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=bce27c83ae264a16be4709384cf31cf2`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTap === "Instruction" ? "active" : ""}
          onClick={() => {
            setActiveTap("Instruction");
          }}
        >
          Instruction
        </Button>
        <Button
          className={activeTap === "Ingredients" ? "active" : ""}
          onClick={() => {
            setActiveTap("Ingredients");
            setShowIngredients(true); // Set the state to show ingredients
          }}
        >
          Ingredients
        </Button>
        {activeTap === "Instruction" && (
          <div>
            <h3
              style={{ fontSize: "16px" }}
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></h3>
            <h3
              style={{ fontSize: "16px" }}
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></h3>
          </div>
        )}

        {activeTap === "Ingredients" &&
          showIngredients && ( // Show ingredients based on the state
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li> // Note the typo fix in "original"
              ))}
            </ul>
          )}
      </Info>
    </DetailWrapper>
  );
}

// Rest of the code remains the same

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  margin-inline: 6rem;
  display: flex;

  h2 {
    margin-bottom: 2rem;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    border: none;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  img {
    width: 380px;
    object-fit: cover;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  color: #313131;
  border: 2px solid black;
  padding: 1rem 2rem;
  background: white;
  margin-right: 2rem;
  font-weight: 600;
  transition: cubic-bezier(0.95, 0.05, 0.795, 0.035);
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
