// for my test to add value in the task section
let input=document.getElementById("input") 
let check=document.getElementById("input_check") 
let blocTache=document.getElementById("task_bloc") 
let sousBloc=document.getElementById("taskcontainer")
let crossContainer=document.getElementById("cross_container")
let cross=document.getElementById("cross")
let tnouvelleTache=document.getElementById("newtask")
let circle_border=document.getElementById("circle_border") 
let circle=document.getElementById("circle")
let imageClick=document.getElementById("image_click")
let newtext=document.getElementById("task_text")
let tab=[] // tableau qui contiendra toutes les taches
input.addEventListener("keypress",function(event){
    if(event.key==="Enter" && input.value.trim()!==""){
        tab.push(input.value.trim())// trim() permet de supprimer les espaces avant et après la chaîne de caractères afin de ne pas avoir de valeur vide dans les taches
        newtext.innerText=input.value
        let sousBlocClone=sousBloc.cloneNode(true) 
        blocTache.appendChild(sousBlocClone)
        sousBlocClone.style.display="flex" 
        blocTache.insertBefore(sousBlocClone, blocTache.firstChild);
        console.log(tab) 
        input.value=""
        check.style.opacity="0"
    }
    if(input.value.length>3){
        check.style.opacity="1"
    }   
}
)





