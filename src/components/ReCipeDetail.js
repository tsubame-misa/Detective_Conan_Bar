function RecipeDetail(data) {
  //console.log(data);
  return (
    <div className="m-4 border p-4">
      <h1 className="text-2xl">{data.data.cocktail_name}</h1>
      <p className="p-3">{data.data.cocktail_desc}</p>
      <h2 className="text-xl pt-4">材料・作り方 </h2>
      <div className="">
        <ul className="p-2" style={{ minWidth: "30%" }}>
          {data.data.recipes.map((item, key) => {
            if (item.amount !== "") {
              return (
                <li
                  key={key}
                  style={{
                    backgroundColor: key % 2 === 0 ? "#1b1b1b" : "black",
                  }}
                >
                  {item.ingredient_name}&emsp;{item.amount}
                  {item.unit}
                </li>
              );
            } else {
              return (
                <li
                  key={key}
                  style={{
                    backgroundColor: key % 2 === 0 ? "#1b1b1b" : "black",
                  }}
                >
                  {item.ingredient_name}&emsp;
                  {item.unit}
                </li>
              );
            }
          })}
        </ul>
        <p className="p-2 origin-center">{data.data.recipe_desc}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
