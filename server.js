const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Esto dice: "Sirve cualquier archivo que esté en la misma carpeta que el servidor"
// No necesitamos especificar index.html, Express lo buscará automáticamente
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});