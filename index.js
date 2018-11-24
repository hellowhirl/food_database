'use strict';
import { recipes } from './recipes.json';


var section = document.querySelector('section');

showRecipes(recipes);

function showRecipes(jsonObj) {
  var masterList = jsonObj;
  console.log({masterList});
  for (var i = 0; i < masterList.length; i++) {
    var mainPage = document.createElement('article');
    var recipeName = document.createElement('h2');
    var recipeImage = document.createElement('img');
    var recipeInstructions = document.createElement('p');
    var recipeList = document.createElement('p');
    var recipeIngredients = document.createElement('p');


    recipeName.textContent = masterList[i].name;

    // recipeImage.src = `recipe_images/${masterList[i].image}.jpg`;
    recipeImage.src = "/recipe_images/egg_avocado_salad.jpg";



    recipeInstructions.textContent = masterList[i].instructions;
    recipeList.textContent = masterList[i].list;
    recipeIngredients.textContent = "Ingredients:";

    var ingredientList = masterList[i].ingredients;
    for (var j = 0; j < ingredientList.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = ingredientList[j];
      recipeIngredients.appendChild(listItem);
    }

    mainPage.appendChild(recipeName);
    mainPage.appendChild(recipeImage);
    mainPage.appendChild(recipeIngredients);

    section.appendChild(mainPage);
  }

}
