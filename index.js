const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const clicker = document.getElementById("btn_clicker");
const Example = document.getElementById("Example");
let health = 3;
const words = ["Кликай ещё","ещё!!","Давай же","Есть!!!"]

window.addEventListener("DOMContentLoaded",function(){
    one.classList.remove("Clouse");
    setTimeout(function(){
        one.classList.remove("SpawnWords");
        one.classList.add("DestroyWords");
    },2000);
    setTimeout(function(){
        one.classList.add("Clouse");
        two.classList.remove("Clouse");
    },3000);
});

clicker.onclick = function(){
    if(health > 0){
        clicker.classList.add("click_on_btn");
        health -= 1;
        Example.innerText = words[3-health-1];
        setTimeout(function(){
            clicker.classList.remove("click_on_btn");
        },500)
    }
    else{
        document.getElementById("Button").classList.add("DestroyButton");
        document.getElementById("Example").classList.add("DestroyWords");
        setTimeout(function(){
            two.classList.add("Clouse");
            three.classList.remove("Clouse");
        },1000);   
    }
}