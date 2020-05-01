// 
const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = { title: 'Fresh tomato pasta', publisher: 'Leo Silva' };
            resolve(`${ID}: ${recipe.title} - Publish by: ${recipe.publisher}`);
        }, 1500, recID);
    });
}

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = { title: 'Italian Pizza', publisher: 'Leo Cardoso' };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

async function getRecipeAW() {

    const IDs = await getIds;
    console.log(IDs);

    const recipe = await getRecipe(IDs[3]);
    console.log(recipe);

    const related = await getRelated('Pri Cardoso');
    console.log(related);

    return recipe;
}

//const rec = getRecipeAW();
//console.log(rec);

getRecipeAW().then(result => console.log(`${result} is the best ever!`));