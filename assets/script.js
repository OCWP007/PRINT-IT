const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let indice = 0;
let banner = document.querySelector("#banner");
//banner.setAttribute("src", slides[indice]);
console.log(banner);

let bannerimg = document.querySelector("#banner img");
bannerimg.setAttribute("src", "./assets/images/slideshow/"+ slides[indice].image);
banner.setAttribute("p", slides[indice].tagLine);
console.log(bannerimg);

let tagLineElement = banner.querySelector("p"); // Sélectionner le <p> à l'intérieur de #banner

let baliseImager = document.createElement("img");
//let baliseImage = document.getElementById("premiereImage");
baliseImager.setAttribute("src", "./assets/images/arrow_right.png");
baliseImager.setAttribute("alt", "Ceci est la nouvelle valeur de alt");
baliseImager.setAttribute("class", "arrow_right");
//banner.appendChild(nouvelElement);
banner.appendChild(baliseImager);

let baliseImagel = document.createElement("img");
//let baliseImage = document.getElementById("premiereImage");
baliseImagel.setAttribute("src", "./assets/images/arrow_left.png");
baliseImagel.setAttribute("alt", "Ceci est la nouvelle valeur de alt");
baliseImagel.setAttribute("class", "arrow_left");
//banner.appendChild(nouvelElement);
banner.appendChild(baliseImagel);

// Création des bullets points
//const dotsContainer = document.createElement("div");
//dotsContainer.classList.add("dots");
//banner.appendChild(dotsContainer);

//----------------------------------------------------- Ajout des bullets points ----------------------
//récupération de la classe des bullets points pour les positionner sur l'image
const dots = document.querySelector(".dots");

//BOUCLE FOR pour créer autant de bullets points que d'éléments dans la liste
for (let i = 0; i< slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");	
	dots.appendChild(dot);	
	
	//SI LE POINT CORRESPOND A LA PREMIERE IMAGE DU TABLEAU(i=0) ALORS ON LE MET BLANC
	//if (i === 0) {
	//	dot.classList.add("dot_selected");
	//}

	// Ajout d'un gestionnaire d'événements pour chaque bullet point
    dot.addEventListener("click", () => {
        indice = i; // Met à jour l'indice en fonction du bullet cliqué
        changeban(); // Change l'image et le texte
    });


}

function changedots() {
	const dotspoints = document.querySelectorAll(".dot");
    dotspoints.forEach((dot, index) => {
        dot.classList.remove("dot_selected"); // Retire la classe sélectionnée de tous les dots
        if (index === indice) {
            dot.classList.add("dot_selected"); // Ajoute la classe sélectionnée au dot correspondant
        }
    });
}

function changeban() {
	if (indice === slides.length) { indice = 0 };
	if (indice < 0) { indice = (slides.length - 1) };
	bannerimg.setAttribute("src", "./assets/images/slideshow/" + slides[indice].image);
	tagLineElement.innerHTML = slides[indice].tagLine; // Utilisez innerHTML pour les balises HTML

	// Gérer le cycle de l'indice
    //indice = (indice + 1) % slides.length; // Incrémente l'indice et le remet à 0 si nécessaire
	changedots();

}

changeban();

baliseImager.addEventListener("click", () => {
    console.log("Vous avez cliqué sur la flèche droite")
	console.log(indice)
	indice = indice+1
	console.log(indice)
	console.log(slides.length)
	changeban()
});

baliseImagel.addEventListener("click", () => {
    console.log("Vous avez cliqué sur la flèche gauche")
	console.log(indice)
	indice = indice-1
	console.log(indice)
	changeban()
});

// Défilement automatique toutes les 10 secondes (10000 ms)
setInterval(() => {
    indice = (indice + 1) % slides.length; // Incrémente l'indice et le remet à 0 si nécessaire
    changeban();
}, 10000);

// Initialisation
changeban();