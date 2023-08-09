import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "../App.css";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
function Veegie() {
  const [veeige, setVeeige] = useState([]);

  useEffect(() => {
    getVeegie();
  }, []);

  const getVeegie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeeige(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=bce27c83ae264a16be4709384cf31cf2&includeNutrition=true&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeeige(data.recipes);
    }
  };

  return (
    <>
      <div>
        <div className="wrapper">
          <h3>Our Vegetarian pics</h3>
          <Splide
            options={{
              perPage: 2,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {veeige.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <div key={recipe.id} className="card veggeCard">
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                  <Gradient />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
}

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veegie;
