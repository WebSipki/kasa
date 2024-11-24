const express = require('express');
const path = require('path');

const app = express();

// Servir les fichiers statiques du dossier build
app.use(express.static(path.join(__dirname, 'build')));

// Rediriger toutes les routes vers index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
