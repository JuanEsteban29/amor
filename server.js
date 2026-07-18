const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir TODO el contenido de la carpeta actual como estático
app.use(express.static(__dirname));

// Si entran a la raíz, enviar index.html explícitamente
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});