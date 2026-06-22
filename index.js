const express = require('express');

const app = express();

const clientes = {
  "123456789": {
    cedula: "123456789",
    tipodoc: "CC", 
    nombre: "Juan",
    apellido: "Marin",
    telefono: "3505711995"
  },
  "2222": {
    cedula: "2222",
    tipodoc: "CC",
    nombre: "Pedro",
    apellido: "Gomez",
    telefono: "3135569745"
  }
};

app.get('/cliente/:cedula', (req, res) => {

  const cedula = req.params.cedula;

  const cliente = clientes[cedula];

  if (!cliente) {
    return res.status(404).json({
      encontrado: false
    });
  }

  res.json({
    encontrado: true,
    ...cliente
  });

});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor iniciado');
});
