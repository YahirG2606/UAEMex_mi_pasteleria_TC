const express = require('express');
const axios = require('axios'); // 👈 cliente HTTP
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', async (req, res) => {
  try {
    // Hacemos petición al backend (por el nombre del servicio en docker-compose)
    const response = await axios.get('http://backend:5000/');
    res.send(`
      <h1>Frontend</h1>
      <p>Respuesta del backend:</p>
      <pre>${JSON.stringify(response.data, null, 2)}</pre>
    `);
  } catch (error) {
    res.send('Error al conectar con el backend 😢');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend corriendo en http://localhost:${PORT}`);
});
