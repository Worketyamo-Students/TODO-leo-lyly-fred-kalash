// variable pour input
let input=document.getElementById("input"); // input de la tâche
let inputCoché=document.getElementById("input_check"); // input de la tâche cochée
// variable pour la gestion des taches
let blocTache=document.getElementById("blocTache");
let conteneurTache=document.getElementById("taskcontainer")
let firstconteneurTacheChild=document.getElementById("newTask"); //conteneur du cercle et de la case a coché
let bordercircle=document.getElementById("circle_border"); // cercle de la tâche
let circle=document.getElementById("circle"); // cercle de la tâche
let imagecoché=document.getElementById("image_click"); // image de la tâche cochée
let text=document.getElementById("task_text"); // texte de la tâche
let secondconteneurTacheChild=document.getElementById("cross_container");// conteneur de la croix
let supprimer=document.getElementById("cross") // croix qui permet de supprimer une tâche




// condition pour faire apparaitre la validation de l'input
while (input.value.length>4) {
    // inputCoché.style.opacity="1"
    console.log("coche")
}
// evennement du clique sur la tache
let isClicked = false; // Variable pour suivre le clic
imagecoché.addEventListener("click", function () {
    if (!isClicked) {
        imagecoché.style.opacity = "1"; 
        imagecoché.style.transition = "opacity 0.5s ease-in-out"; // Ajout de la transition
        imagecoché.style.transform = "scale(1.1)"; // Ajout de l'effet de zoom
        text.style.textDecoration = "line-through"; 
        text.style.color = "#D1D2DA"; // Change la couleur du texte
        text.style.transition = "color 0.5s ease-in-out"; // Ajout de la transition 
    } else {
        imagecoché.style.opacity = "0";
        text.style.textDecoration = "none"; // Enlève le soulignement
        text.style.color = "black"; 
    }
    isClicked = !isClicked; 
});
// evenement du clique sur la croix
supprimer.addEventListener("click", function () {
    // supprime la tâche
    conteneurTache.remove()
    console.log("supprimé")
});
// coche la case de l'input lorsque on saisit 5 caracterere au moins
input.addEventListener("input", function () {
    if (input.value.length > 4) {
        inputCoché.style.opacity="1" // Affiche l'image
        inputCoché.style.transition = "opacity 0.5s ease-in-out"; // Ajout de la transition
        inputCoché.style.transform = "scale(1.1)"; // Ajout de l'effet de zoom
    } else {
        inputCoché.style.opacity="0" // Masque l'image
    }
});
