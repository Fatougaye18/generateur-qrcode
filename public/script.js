// Récupération des éléments HTML
const formulaire = document.getElementById('qrForm');
const champURL = document.getElementById('url');
const qrImage = document.getElementById('qrImage');
const message = document.getElementById('message');

// Cacher l'image au départ
qrImage.style.display = 'none';

// Événement du formulaire
formulaire.addEventListener('submit', async (event) => {

    event.preventDefault();

    const url = champURL.value.trim();

    message.textContent = "Génération en cours...";

    try {

        // Envoyer l'URL au serveur
        const reponse = await fetch('/generer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        const resultat = await reponse.json();

        if (!reponse.ok) {
            throw new Error(resultat.erreur);
        }

        // Afficher le QR Code
        qrImage.src = resultat.qrCode;
        qrImage.style.display = 'block';

        message.textContent = "QR Code généré avec succès !";

    } catch (erreur) {

        qrImage.style.display = 'none';
        message.textContent = erreur.message;

    }
});