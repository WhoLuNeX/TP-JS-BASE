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
