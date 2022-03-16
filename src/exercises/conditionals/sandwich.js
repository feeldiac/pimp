const prompt = require("prompt-sync")({ sigint: true });
const sandwich = {
    base: [
        {name: 'chicken', price: 150},
        {name: 'beef', price: 200},
        {name: 'veggie', price: 100}
    ],
    bread: [
        {name: 'white', price: 50},
        {name: 'black', price: 60},
        {name: 'n/gluten', price: 75}
    ],
    additionals: [
        {name: 'cheese', price: 20}, 
        {name: 'tomato', price: 15},
        {name: 'lettuce', price: 10},
        {name: 'onion', price: 15},
        {name: 'mayonnaise', price: 15},
        {name: 'mustard', price: 5}
    ]
}

const base = prompt('Type your base |chicken|beef|veggie| ');
const bread = prompt('Type your bread |white|black|n/gluten| ');

//Saved the price of the additionals depending on the costumer order
const additionals = sandwich.additionals.map((add) => {
    return prompt(`Additional - ${add.name}? |Type y if yes or click on Enter| `) ? add.price: 0;
});

function sandwichOrder(base, bread, ...additionals) {
    let total = 0;
    const selectedBase = sandwich.base.findIndex((baseObj) => baseObj.name === base);
    const selectedBread = sandwich.bread.findIndex((breadObj) => breadObj.name === bread);
    const totalAdditionals = additionals.reduce((total, current) => total + current);    
    
    total = sandwich.base[selectedBase].price + sandwich.bread[selectedBread].price + totalAdditionals;
    
    //Optional details of the order
    console.log(`
    Base - ${base} | ${sandwich.base[selectedBase].price}
    Bread - ${bread} | ${sandwich.bread[selectedBread].price}
    Additionals | ${totalAdditionals}
    Total | ${total}
    `);

    return total;
}

console.log(sandwichOrder(base, bread, ...additionals));