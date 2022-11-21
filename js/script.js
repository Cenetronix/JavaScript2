// Домашна за објекти:
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa


var recipe = {
    title: "Kakao",
    servings: 1,
    ingredients: ['kakao', 'seker', 'voda']
};

console.log(recipe.title);
console.log("Servings:" + recipe.servings);
console.log("Ingredients:");
console.log(recipe.title);
console.log("Servings:" + recipe.servings);
console.log("Ingredients:");
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);


// Домашна за низи:
// Create an array called programming languages (remember, variable names can't have empty spaces between words) and store 8 programming languages as strings.
// In the console, output the length of the array
// Remove the last item of the array
// Remove the third item of the array, and in its position, store another programming language (as a string)

var programming_languages = [ "1"  , "2" , "3" , "4" , "5" , "6" , "7" , "8" ];
console.log(programming_languages.length);
console.log(programming_languages);
console.log(programming_languages.pop());
console.log(programming_languages);

var natigoDajmigo = programming_languages.splice(2,1, "10");
console.log(programming_languages);
