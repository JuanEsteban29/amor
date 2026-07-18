const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos desde la carpeta actual
app.use(express.static(__dirname));

// Asegurar la ruta absoluta al archivo index.html
app.get('/', (req, res) => {
    // __dirname es la carpeta donde vive server.js
    // path.join combina la ruta de forma segura para cualquier sistema operativo
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});