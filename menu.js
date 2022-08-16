const grillItems = [
    {
        "name": "Strip Steak", 
        "ingredients": "Steak, parsley, pineapple",
        "price": 105.00, 
        "url": "images/strip steak1.png"
    }, 
    {
        "name": "Flank Steak", 
        "ingredients": "Steak, thyme, dill",
        "price": 111.00, 
        "url": "images/flank steak1.png"
    }, 
    {
        "name": "NY Strip Steak", 
        "ingredients": "Steak, cheese, tomato",
        "price": 121.00, 
        "url": "images/new york strip steak1.png"
    }, 
    {
        "name": "Dakota Grill", 
        "ingredients": "Steak, potato",
        "price": 125.50, 
        "url": "images/dakota grill.png"
    }, 
    {
        "name": "Rib Eye Steak", 
        "ingredients": "Steak, bbq sause",
        "price": 135.75, 
        "url": "images/rib eye steak1.png"
    }, 
    {
        "name": "Skirt Steak", 
        "ingredients": "Steak, beans",
        "price": 137.50, 
        "url": "images/skirt steak1.png"
    }
]

setItems();

function setItems(){
    let blocks = `
    <div class="itemBlock">
    <img class="menuPic" src="${grillItems.url}" alt="">
    <h3 class="menuName">${grillItems.name} <span class="menuPrice"> SRD ${grillItems.price}</span></h3>
    <p class="menuIngredients">${grillItems.ingredients}</p>
    <button class="menuButton">Order</button>
    </div>
`

document.getElementsByClassName("items").innerHTML = blocks;
} 