import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import RecipeDetail from "../components/ReCipeDetail";

async function fetchRecipe(name) {
  console.log("in");
  const response = await fetch(
    `https://cocktail-f.com/api/v1/cocktails?word=${name}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

function Recipe() {
  const { name } = useParams();
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    fetchRecipe(name).then((data) => {
      setRecipe(data.cocktails);
    });
  }, [name]);
  return (
    <div className="has-text-white">
      <h1 className="p-5 text-3xl">{name}を使ったカクテル</h1>
      {recipe?.map((item, key) => {
        return <RecipeDetail data={item} key={key} />;
      })}
      <Link to="/home"></Link>
    </div>
  );
}

export default Recipe;
