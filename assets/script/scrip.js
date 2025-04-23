// variables declarer
let input = document.getElementById("input");
let blocTache = document.getElementById("blocTache");
let taskContainer = document.getElementById("taskcontainer");
let inputCoché=document.getElementById("input_check");
let compteur=document.getElementById("compteur");
let clear=document.getElementById("clear");
let tabConteneurTache=[];
let tableAll=[];
let tableActive=[];
let tableComplete=[];






document.addEventListener('DOMContentLoaded', function () {
    input.value="";
    inputCoché.style.opacity="0" ;
});
// evenement de cochage sur l'input en temps reel
input.addEventListener("input", function () {
    if (input.value.length > 4 && input.value.trim() !=="") {
        inputCoché.style.opacity="1";
        inputCoché.style.transition = "opacity 0.5s ease-in-out"; 
        inputCoché.style.transform = "scale(1.1)";
    } else {
        inputCoché.style.opacity="0" ;
    }
});
// evenement du bouton enter
input.addEventListener("keypress", function (event) {
if (event.key === "Enter" && input.value.trim() !=="" && input.value.length > 4) {
    let taskContainerClone=taskContainer.cloneNode(true);
    blocTache.appendChild(taskContainerClone);
    blocTache.insertBefore(taskContainerClone, blocTache.firstChild);
    tabConteneurTache.push(taskContainerClone)
    // Modifier le texte dans le clone
    let taskText = taskContainerClone.querySelector("#task_text");
    if (taskText) {
        taskText.textContent = input.value.trim(); // Attribuer la valeur de l'input
    }
    input.value="";
    inputCoché.style.opacity="0" ;
     // ajouter les événements au clone
     let imageClickClone = taskContainerClone.querySelector("#image_click");
     let crossClone = taskContainerClone.querySelector("#cross");
    if (imageClickClone) {
        imageClickClone.addEventListener("click", function () {
            // Gérer l'événement de clic sur la nouvelle tache
            if (imageClickClone.style.opacity === "1") {
                imageClickClone.style.opacity = "0";
                taskText.style.textDecoration = "none";
                taskText.style.color = "black";
                const index = tableComplete.indexOf(imageClickClone.parentNode.parentNode.parentNode.parentNode);
                if (index !== -1) {
                  tableComplete.splice(index, 1);
                }
                // count++
                // compteur.textContent = count
            } else {
                imageClickClone.style.opacity = "1";
                imageClickClone.style.transition = "opacity 0.5s ease-in-out"; 
                imageClickClone.style.transform = "scale(1.1)";
                taskText.style.textDecoration = "line-through";
                taskText.style.color = "#D1D2DA";
                taskText.style.transition = "color 0.5s ease-in-out";
                tableComplete.push(imageClickClone.parentNode.parentNode.parentNode.parentNode)
                // compteur.textContent = count - 1
                // count--
            }
        });
    }
    // Gérer l'événement de clic sur la croix
    if (crossClone) {
       crossClone.addEventListener("click", function () {
           taskContainerClone.remove();
        //    compteur.textContent = count - 1
        //    count--
       });
    }

    
    
}

});
taskContainer.remove()
  // ajoutons l'option "clear complete"
  clear.addEventListener("click", function () {
    console.log(tableComplete)
        for (let i = 0; i < tableComplete.length; i++) {
            tableComplete[i].remove()
        }
});


















































// option all
let all = document.getElementById("all")
all.addEventListener("click",()=>{
all.style.color="#3A7CFD"
active.style.color="#9495A5"
complete.style.color="#9495A5"
// option de clonnage des taches
})

// option active
let active = document.getElementById("active")
active.addEventListener("click",()=>{
    active.style.color="#3A7CFD"
    all.style.color="#9495A5"
    complete.style.color="#9495A5"
} )

// option Complete
let complete = document.getElementById("completed")
complete.addEventListener("click",()=>{
    complete.style.color="#3A7CFD"
    all.style.color="#9495A5"
    active.style.color="#9495A5"
} )