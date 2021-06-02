import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import RecipeDetail from "../components/ReCipeDetail";
import { fetchRecipe } from "../api";

function Recipe() {
  const { name } = useParams();
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    fetchRecipe(name).then((data) => {
      setRecipe(data.cocktails);
    });
  }, []);
  console.log(recipe);

  if (recipe === undefined) {
    return (
      <div style={{ height: "90vh", padding: "20vh" }}>
        <div className="pageloader"></div>
        <h1 className="has-text-white has-text-centered">loading...</h1>
      </div>
    );
  }
  return (
    <div className="has-text-white">
      {name === "キール" ? (
        <h1 className="p-4 text-3xl">{name}のレシピ</h1>
      ) : (
        <h1 className="p-4 text-3xl">{name}を使ったカクテル</h1>
      )}
      {recipe.map((item, key) => {
        return <RecipeDetail data={item} key={key} />;
      })}
      <Link to="/home"></Link>
    </div>
  );
}

export default Recipe;
