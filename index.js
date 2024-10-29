const obj = {
  pseudo: "From scratch",
  ville: "Bordeaux",
  admin: false,
  direBonjour: function () {
    console.log("bonjour je suis " + this.pseudo);
  },
  //   direBonjour() {
  //     console.log("bonjour je suis " + obj.pseudo);
  //   },
};

// Ajouter
obj.age = 24;
obj["admin"] = true;

//Modifier
obj.pseudo = "Fs";

//supprimer
// delete obj.ville;

// obj.age = 32;
// console.log(obj);

// checker si une propriete existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//Parcourir un objet
for (const key in obj) {
  //console.log(key + " : " + obj[key]);
}

//console.log(obj.direBonjour());

//obtenir les clees
const keys = Object.keys(obj);
// console.log(keys);

//Obtenir les valeures
const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
};

//fussionner Objects
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

//Empecher les modifications
//const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);
newObj.pseudo = "test";
newObj.adresse = "42 rue du code";

console.log(newObj);
