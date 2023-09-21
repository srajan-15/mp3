import fooddata from './food.json' assert {type: 'json'};
function listfooditems(fooditem){
    return fooditem.map(items=>items.foodname);
}
console.log("The Food items are",listfooditems(fooddata));



//Task2: list all the food items with category vegetables
function listvegitem(vegitem){
    return vegitem.filter(items=>items.category==='Vegetable').map(items=>items.foodname);
}
console.log("Food items with category vegetables",listvegitem(fooddata));



//Task3:list all the food items with category fruit
function listfruititem(fruitsitem){
    return fruitsitem.filter(items=>items.category==='Fruit').map(items=>items.foodname);
}
console.log("Food items with category fruit",listfruititem(fooddata));



//Task4:list all the food items with category protein
function listprotienitem(protienitem){
    return protienitem.filter(item=>item.category==='Protein').map(item=>item.foodname);
}
console.log("Food items with category protein",listprotienitem(fooddata));



//Task5:list all the food items with category nuts
function listnutsitem(nutsitem){
    return nutsitem.filter(item=>item.category==='Nuts').map(item=>item.foodname);
}
console.log("Food items with category nuts",listnutsitem(fooddata));



//Task6:list all the food items with category grains
function listgrainsitem(grainsitem){
    return grainsitem.filter(item=>item.category==='Grain').map(item=>item.foodname);
}
console.log("Food items with category grains",listgrainsitem(fooddata));



//Task7:list all the food items with category dairy
function listdairyitem(dairyitem){
    return dairyitem.filter(item=>item.category==='Dairy').map(item=>item.foodname);
}
console.log("Food items with category dairy",listdairyitem(fooddata));



//Task8:list all the food items with calorie above 100
function calorieabv(caloriea){
    return caloriea.filter(item=>item.calorie > 100).map(item=>item.foodname);
}
console.log("Food items with calorie above 100",calorieabv(fooddata));



//Task9:list all the food items with calorie below 100
function calorieblw(calorieb){
    return calorieb.filter(item=>item.calorie < 100).map(item=>item.foodname);
}
console.log("Food items with calorie below 100",calorieblw(fooddata));



//Task10:list all the food items with highest protien content to lowest
console.log("Food items with highest protein content to lowest");
fooddata.sort((a,b)=>b.protein-a.protein);
fooddata.forEach((items)=>{
    console.log(items.foodname);
});



//Task11:list all the food items with lowest cab content to highest
console.log("food items with lowest cab content to highest");
fooddata.sort((a,b)=>a.cab-b.cab);
fooddata.forEach((item)=>{
    console.log(item.foodname);
});