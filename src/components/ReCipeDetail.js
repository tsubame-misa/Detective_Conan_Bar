function RecipeDetail(data) {
  console.log(data);
  return (
    <div className="m-4 border">
      <h1 className="text-2xl">{data.data.cocktail_name}</h1>
      <p className="p-3">{data.data.cocktail_desc}</p>
      <h2>材料</h2>
      <ul className="p-2">
        {data.data.recipes.map((item, key) => {
          if (item.amount !== "") {
            return (
              <li key={key}>
                {item.ingredient_name}&emsp;{item.amount}
                {item.unit}
              </li>
            );
          } else {
            return (
              <li key={key}>
                {item.ingredient_name}&emsp;
                {item.unit}
              </li>
            );
          }
        })}
      </ul>
      <p className="p-2">{data.data.recipe_desc}</p>
    </div>
  );
}

export default RecipeDetail;
