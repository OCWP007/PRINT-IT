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

let baliseImager = document.createElement("img");
//let baliseImage = document.getElementById("premiereImage");
baliseImager.setAttribute("src", "./assets/images/arrow_right.png");
baliseImager.setAttribute("alt", "Ceci est la nouvelle valeur de alt");
baliseImager.setAttribute("class", "arrow_right");

// Récupérer un élément parent existant
//let parentElement = document.getElementById("conteneur");

// Ajouter le nouvel élément au parent
//banner.appendChild(nouvelElement);
banner.appendChild(baliseImager);

let baliseImagel = document.createElement("img");
//let baliseImage = document.getElementById("premiereImage");
baliseImagel.setAttribute("src", "./assets/images/arrow_left.png");
baliseImagel.setAttribute("alt", "Ceci est la nouvelle valeur de alt");
baliseImagel.setAttribute("class", "arrow_left");

// Récupérer un élément parent existant
//let parentElement = document.getElementById("conteneur");

// Ajouter le nouvel élément au parent
//banner.appendChild(nouvelElement);
banner.appendChild(baliseImagel);



baliseImager.addEventListener("click", () => {
    console.log("Vous avez cliqué sur la flèche droite")
	console.log(indice)
	indice = indice+1
	console.log(indice)
});

baliseImagel.addEventListener("click", () => {
    console.log("Vous avez cliqué sur la flèche gauche")
	console.log(indice)
	indice = indice-1
	console.log(indice)
});