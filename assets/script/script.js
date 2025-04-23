// variables declarer
let input = document.getElementById("input");
let blocTache = document.getElementById("blocTache");
let taskContainer = document.getElementById("taskcontainer");
let inputCoché=document.getElementById("input_check");
let hr=document.getElementById("hr");
let compteur=document.getElementById("compteur");
let count=0;
let clear=document.getElementById("clear");
    // let all=document.getElementById("all");
    // let active=document.getElementById("active");
    // let completed=document.getElementById("completed");
    // let tabCompleted = [];
    // let tabActive = [];
    // let tabAll = [];
    // supprimer le hr au debut du code 
hr.remove();
input.addEventListener("input", function () {
    // cet evenement se declenche a chaque fois que la valeur de l'input change
    if (input.value.length > 4) {
        inputCoché.style.opacity="1"
        inputCoché.style.transition = "opacity 0.5s ease-in-out"; 
        inputCoché.style.transform = "scale(1.1)";
    } else {
        inputCoché.style.opacity="0" 
    }
});
// Ajouter un écouteur d'événement pour la touche "Entrée"
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && input.value.trim() !=="" && input.value.length > 4) {
        // Cloner le conteneur de la tâche avec tous ses enfants
        let taskContainerClone = taskContainer.cloneNode(true);
        count++
        hr.style.opacity="0"
        let hrClone = hr.cloneNode(true);
        blocTache.appendChild(hrClone);
        blocTache.insertBefore(hrClone, blocTache.firstChild);
        hrClone.style.backgroundColor = "#D1D2DA";
        hr.remove();
        
        // Modifier le texte dans le clone
        let taskText = taskContainerClone.querySelector("#task_text");
        if (taskText) {
            taskText.textContent = input.value.trim(); // Attribuer la valeur de l'input
        }
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
                    count++
                    compteur.textContent = count
                } else {
                    imageClickClone.style.opacity = "1";
                    imageClickClone.style.transition = "opacity 0.5s ease-in-out"; 
                    imageClickClone.style.transform = "scale(1.1)";
                    taskText.style.textDecoration = "line-through";
                    taskText.style.color = "#D1D2DA";
                    taskText.style.transition = "color 0.5s ease-in-out";
                    compteur.textContent = count - 1
                    count--
                }
            });
        }
        // Gérer l'événement de clic sur la croix
        if (crossClone) {
            crossClone.addEventListener("click", function () {
                taskContainerClone.remove();
                hrClone.remove()
                compteur.textContent = count - 1
                count--
            });
        }
        // ceci c'est pour inserer chaque nouvelle tache au debut du parent
        blocTache.insertBefore(taskContainerClone, blocTache.firstChild);
        // Réinitialiser l'input
        input.value = "";
        inputCoché.style.opacity="0" 
        compteur.textContent=count
    } else if (event.key === "Enter") {
        alert("entez au moins 5 caractères");
    } 
});
taskContainer.remove(); 
// ajoutons l'option "clear"
clear.addEventListener("click", function () {
    // Réinitialiser le compteur    
    count = 0;
    compteur.textContent = count;
    // Supprimer toutes les tâches
    let taskContainers = blocTache.querySelectorAll("#taskcontainer");
    taskContainers.forEach(function (task) {
        task.remove();
    });
    // Supprimer tous les hr
    let hrs = blocTache.querySelectorAll("#hr");
    hrs.forEach(function (hr) {
        hr.remove();
    });
});

