// Variables globales pour suivre le nombre de tickets grattés, le prix total et les gains totaux
var nombreTicketsGrattes = 0;
var prixTotal = 0;
var gainsTotal = 0;

// Fonction pour afficher le message de victoire avec le montant gagné
function afficherMessage(message) {
    var messageDiv = document.getElementById("message");
    messageDiv.textContent = message; // Affiche le message
    messageDiv.classList.remove("hidden"); // Affiche le message
}

// Fonction pour mettre à jour et afficher les informations sur les tickets grattés, le prix total et les gains totaux
function mettreAJourInfos() {
    var infosDiv = document.getElementById("infos");
    infosDiv.textContent = "Nombre de tickets grattés : " + nombreTicketsGrattes + ", Prix total : " + prixTotal + " euros, Gains total : " + gainsTotal + " euros";
}

// Fonction pour simuler le jeu à gratter
function jouer() {
    var chanceGagner5Euros = Math.floor(Math.random() * 9); // Génère un nombre aléatoire entre 0 et 8
    var chanceGagner10Euros = Math.floor(Math.random() * 20); // Génère un nombre aléatoire entre 0 et 19
    var chanceGagner50Euros =Math.floor(Math.random()*100); //Génère un nombre aléatoire entre 0 et 99

    if (chanceGagner5Euros === 0) {
        afficherMessage("Bravo, vous avez gagné 5 euros.");
        gainsTotal += 5; // Ajoute le gain au gains total
        prixTotal += 5; // Ajoute le prix du ticket gagné au prix total
    } else if (chanceGagner10Euros === 0) {
        afficherMessage("Bravo, vous avez gagné 10 euros.");
        gainsTotal += 10; // Ajoute le gain au gains total
        prixTotal += 5; // Ajoute le prix du ticket gagné au prix total
    } else if (chanceGagner50Euros === 0) {
        afficherMessage("Bravo, vous avez gagné 50 euros.");
        gainsTotal += 50; // Ajoute le gain au gains total
        prixTotal += 5; // Ajoute le prix du ticket gagné au prix total
    } else {
        afficherMessage("Désolé, vous n'avez pas gagné cette fois-ci.");
        prixTotal += 5; // Ajoute le prix du ticket non gagné au prix total
    }

    nombreTicketsGrattes++; // Incrémente le nombre de tickets grattés
    mettreAJourInfos(); // Met à jour et affiche les informations
}

// Fonction principale exécutée lorsque le bouton est cliqué
function onClickButton() {
    jouer(); // Joue le jeu à gratter
}

// Attacher la fonction onClickButton à un bouton HTML
document.getElementById("monBouton").addEventListener("click", onClickButton);
