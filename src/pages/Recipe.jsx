import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY_TWO}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 7rem;
  margin-bottom: 3rem;
  display: flex;
  .active {
    background: white;
    color: rgb(24, 24, 24);
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    max-width: 400px;
    border-radius: 1.3rem;
  }
`;

const Button = styled.button`
  padding: 1rem 1rem;
  color: white;
  background: rgb(24, 24, 24);
  border: 2px solid white;
  margin-right: 1rem;
  font-weight: 600;
  margin: 0%;
  display: inline-block;
`;

const Info = styled.div`
  margin-left: 9rem;
  margin-right: 10rem;
`;

export default Recipe;
