const express = require('express');
const QRCode = require('qrcode');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Route pour générer le QR Code
app.post('/generer', async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({
                erreur: 'Veuillez fournir une URL'
            });
        }

        const adresse = new URL(url);

        if (!['http:', 'https:'].includes(adresse.protocol)) {
            return res.status(400).json({
                erreur: 'Veuillez fournir une URL valide'
            });
        }

        const qrCode = await QRCode.toDataURL(url);

        res.json({ qrCode });

    } catch (error) {
        res.status(400).json({
            erreur: 'Veuillez saisir une URL valide'
        });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});