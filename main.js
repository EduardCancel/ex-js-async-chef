/* 

Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}


*/

async function getChefBirthday(id) {
  const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await recipeResponse.json();
  const chefResponse = await fetch(
    `https://dummyjson.com/users/${recipe.userId}`
  );
  const chef = await chefResponse.json();
  return chef.birthDate;
}

(async () => {
  try {
    const birthday = await getChefBirthday(1);
    console.log("Chef's birthday:", birthday);
  } catch (error) {
    console.error("Error:", error);
  }
})();
