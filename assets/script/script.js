// variable pour input
let input = document.getElementById("input"); // input de la tâche
let inputCoche = document.getElementById("input_check"); // input de la tâche cochée
// variable pour la gestion des taches
let blocTache = document.getElementById("blocTache");
let conteneurTache = document.getElementById("taskcontainer");
let firstconteneurTacheChild = document.getElementById("newTask"); //conteneur du cercle et de la case a coché
let bordercircle = document.getElementById("circle_border"); // cercle de la tâche
let circle = document.getElementById("circle"); // cercle de la tâche
let imagecoche = document.getElementById("image_click"); // image de la tâche cochée
let text = document.getElementById("task_text"); // texte de la tâche
let secondconteneurTacheChild = document.getElementById("cross_container"); // conteneur de la croix
let supprimer = document.getElementById("cross"); // croix qui permet de supprimer une tâche
// condition pour faire apparaitre la validation de l'input
// while (input.value.length>4) {
//     // inputCoché.style.opacity="1"
//     console.log("coche")
// }
// evennement du clique sur la tache
let isClicked = false; // Variable pour suivre le clic
imagecoche.addEventListener("click", function () {
  if (!isClicked) {
    imagecoche.style.opacity = "1";
    imagecoche.style.transition = "opacity 0.5s ease-in-out"; // Ajout de la transition
    imagecoche.style.transform = "scale(1.1)"; // Ajout de l'effet de zoom
    text.style.textDecoration = "line-through";
    text.style.color = "#D1D2DA"; // Change la couleur du texte
    text.style.transition = "color 0.5s ease-in-out"; // Ajout de la transition
  } else {
    imagecoche.style.opacity = "0";
    text.style.textDecoration = "none"; // Enlève le soulignement
    text.style.color = "black";
  }
  isClicked = !isClicked;
});
// evenement du clique sur la croix
supprimer.addEventListener("click", function () {
  // supprime la tâche
  conteneurTache.remove();
  console.log("supprimé");
});
// coche la case de l'input lorsque on saisit 5 caracterere au moins
input.addEventListener("input", function () {
  if (input.value.length > 4) {
    inputCoche.style.opacity = "1"; // Affiche l'image
    inputCoche.style.transition = "opacity 0.5s ease-in-out"; // Ajout de la transition
    inputCoche.style.transform = "scale(1.1)"; // Ajout de l'effet de zoom
  } else {
    inputCoche.style.opacity = "0"; // Masque l'image
  }
});
// Récupération de la valeur de l'input et ajout à la listeTODO
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // Empêche le rechargement de la page
    event.preventDefault();
    // Récupère la valeur de l'input
    let taskText = input.value;
    // Vérifie si la valeur de l'input n'est pas vide
    if (taskText.trim() !== "") {
      // Clone la structure HTML de la tâche existante
      let newTaskContainer = conteneurTache.cloneNode(true);
      newTaskContainer.classList.remove("hidde"); // Supprime la classe "hidde" pour afficher la tâche
      // Modifie le texte de la nouvelle tâche
      let taskTextSpan = newTaskContainer.querySelector("#task_text");
      taskTextSpan.textContent = taskText;
      // Récupère les éléments de la nouvelle tâche
      let circle = newTaskContainer.querySelector("#circle");
      let imageClick = newTaskContainer.querySelector("#image_click");
      let cross = newTaskContainer.querySelector("#cross");
      // Ajoute un event listener pour cocher la tâche
      circle.addEventListener("click", function () {
        if (!isClicked) {
          imageClick.style.opacity = "1";
          imageClick.style.transition = "opacity 0.5s ease-in-out";
          imageClick.style.transform = "scale(1.1)";
          taskTextSpan.style.textDecoration = "line-through";
          taskTextSpan.style.color = "#D1D2DA";
          taskTextSpan.style.transition = "color 0.5s ease-in-out";
        } else {
          imageClick.style.opacity = "0";
          taskTextSpan.style.textDecoration = "none";
          taskTextSpan.style.color = "black";
        }
        isClicked = !isClicked;
      });
      // Ajoute un event listener pour supprimer la tâche
      cross.addEventListener("click", function () {
        newTaskContainer.remove();
      });
      // Ajoute la nouvelle tâche au bloc de tâches
      blocTache.appendChild(newTaskContainer);
      // Efface le texte de l'input
      input.value = "";
      inputCoche.style.opacity = "0";
    }
  }
});
