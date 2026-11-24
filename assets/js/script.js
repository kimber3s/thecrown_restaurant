// reference all buttons
let btns = document.getElementsByClassName("card-recipe");

// reference all recipe containers
let recipes = document.getElementsByClassName("recipe");


for(let btn of btns){
    btn.addEventListener("click",()=>{
        // 1 -> hide all recipes
        for(let recipe of recipes){
            recipe.style.display="none"
        }
        //2 display only the target recipe
        // Get the data target
        let target = btn.dataset.target;

        document.getElementById(target).style.display="block";
    })
}