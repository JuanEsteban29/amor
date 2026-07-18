const express = require('express');
const path = require('path');
const app = express();

// Usamos __dirname para asegurarnos de que el servidor siempre 
// sepa dónde están los archivos, sin importar el sistema operativo.
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo principal index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Configuración del puerto, usa el que te proporcione el servicio en la nube 
// o el 8080 por defecto.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});