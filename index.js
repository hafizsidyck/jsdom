const titre = document.querySelector("#titre"); //pour cibler un element
titre.innerHTML = "js";
console.log(titre);

const titreById = document.getElementById("titre");
console.log(titreById);
const sections = document.querySelectorAll("section"); //pour cibler plusieurs sections
console.log(sections [1]); //pour une section par le trois on ajoute son index
const pGreen = document.querySelectorAll(".green");
console.log(pGreen);
// pGreen[0].style.color = "green" //par contre on peut pas donné de color a plusieurs cible
// pGreen[1].style.color = "green" //il faut le faire 1 par 1 en ciblant [O ou 1 ou 2]

for (let i= 0; i < pGreen.length; i++) {
    pGreen[i].style.color = "green"
} // on utile le boucle pour cibler plusieur element du tableau 

const paragraphes = document.querySelectorAll("p");
paragraphes[2].classList.add("bleuecss"); //permet d'ajouter une class

titre.style.color = "yellow"; //changer la couleur du titre


const tableauEntiers = [0, 1, 2, 3, 4];
for (let i = 0; i < tableauEntiers.length; i++) {
    console.log(tableauEntiers[i]);
} // la boucle pour cible les elements de mon tableauEntiers
