const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080; // Railway suele preferir 8080 o process.env.PORT

// Esto sirve todo lo que esté en la carpeta raíz
app.use(express.static(__dirname));

// Y esta línea garantiza que SIEMPRE sirva index.html al entrar
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});