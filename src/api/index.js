export async function fetchRecipe(name) {
  const response = await fetch(
    //`https://detective-conan-bar-api.netlify.app/api/v1/cocktails?word=${name}`
    //`https://cocktail-f.com/api/v1/cocktails?word=${name}`
    `/api/v1/cocktails?word=${name}`
  );
  const data = await response.json();

  return data;
}
