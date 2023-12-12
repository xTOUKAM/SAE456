/* Récupération des éléments du formulaire */
var username = document.getElementById("username");
var password = document.getElementById("password");

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Comparaison avec les comptes prédéfinis
    if(username.value == "admin" && password.value == "admin") {
        window.location.href = "index.html";
    } else if(username.value == "entreprise" && password.value == "entreprise") {
        window.location.href = "forms-business.html";
    } else if(username.value == "association" && password.value == "association") {
        window.location.href = "forms-organization.html";
    } else if(username.value == "mairie" && password.value == "mairie") {
        window.location.href = "forms-city.html";
    } else if(username.value == "habitant" && password.value == "habitant") {
        window.location.href = "index.html";
    } else {
        alert("Identifiant ou mot de passe incorrect");
    }
});

