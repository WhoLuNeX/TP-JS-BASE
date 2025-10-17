const nom = "Pascal";
console.log(nom); // affiche Pascal

const age = "11";
console.log(age); // affiche 18


if (age < 13) { // Si la moyenne est inférieur à 13  
    console.log("Accès interdit au moins de 13"); // Affiche le texte écris
} else if (age < 18) { // si la moyenne est inférieur a 18
    console.log("Vous pouvez accéder à la section ado") // Accès a la section ado  
}   else {
        console.log("Bienvenue dans l'espace adulte")
}


for (let i = 0; i <= 10 ;i++ ) {
  console.log("7*" + (i) + "=" + (7*i))
    
}

const parler = (nom) => {
    const saluer = ("bonjour " + nom + " comment vas tu ?");
    return saluer;
};
const saluer = parler(nom);
console.log(saluer)



// Pseudo Code :
//  1. Formater des données brutes correctement pour les afficher à l'utilisateur.
// 2.   Prénom en minuscules de base, résultat on doit les retourner pour qu'il donne les prénom en avec une majuscules au début
// nom.slice =  Le reste du mot ('lice') peut être obtenu avec
// Pour appliquer cette logique à chaque nom du tableau, la méthode .map() est parfaite.

const nom = ["alice","bob","charlie"];

  const nom1 = ["alice","bob","charlie"];


const nameToUpperCase = (names) =>{
    for (let i = 0; i < names.length; i++) {
        const name = names[i]
        nom.split()
        nom(0) toUpperCase(0) + nom.slice(1)
    } 
}

        
let monTableau = maRegexp.exec("Alice");
let monTableau = maRegexp.exec("Bob");
let monTableau = maRegexp.exec("Charlie");
}
console.log(monTableau);

console.log(filtreTexte(names, "a")); // ['alice'];
console.log(filtreTexte(names, "b")); // ['bob'];
console.log(filtreTexte(names, "c")); // ['Charlie'];



        console.log(nom.length);

    let first = nom[0];

    let last = nom[nom.length - 2];

const words = ["alice", "bob", "charlie"];

const result = words.filter((word) => word.length > 3);

console.log(result);

arr.filter(callback); 
var nouveauTableau = arr.filter(callback, thisArg);

var nom = ["alice", "bob", "charlie"];

function filtreTexte(arr, requete) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(requete.toUpperCase()) !== -1;
  });
}

console.log(filtreTexte(fruits, "a")); // ['alice'];
console.log(filtreTexte(fruits, "b")); // ['bob'];
console.log(filtreTexte(fruits, "c")); // ['Charlie'];

arr.slice();
arr.slice(0);
arr.slice(0, 2);


var nom = ["Alice", "Bob", "Charlie"];
var .map() = nom.slice(0, 2);

