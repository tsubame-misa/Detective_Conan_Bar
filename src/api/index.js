export async function fetchRecipe(name) {
  const response = await fetch(
    `https://cocktail-f.com/api/v1/cocktails?word=${name}`
  );
  const data = await response.json();

  return data;
}
