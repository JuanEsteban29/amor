const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la raíz
app.use(express.static(path.resolve(__dirname)));

app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, 'index.html');
    console.log("Intentando servir archivo desde: " + filePath); // Esto aparecerá en los Logs de Railway
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});