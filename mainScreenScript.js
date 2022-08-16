let steak = document.getElementById("steak");
let grill = document.getElementById("grill");
let meal = document.getElementById('meal');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;

    grill.style.right = value * -0.5 + '%';
    steak.style.bottom = value * 0.3 + '%'; 
    steak.style.opacity = 1 + value;
    meal.style.right = -70 + value * 0.2 + '%';
});

