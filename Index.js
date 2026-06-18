const express = require("express");
const app = express();

app.use(express.json());

const VERIFY_TOKEN = "LABQR2026";

app.get("/", (req, res) => {
  res.send("Webhook activo");
});

app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verificado");
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

app.post("/webhook", (req, res) => {
  console.log("========== EVENTO META ==========");
  console.log(JSON.stringify(req.body, null, 2));

  res.sendStatus(200);
});

app.listen(process.env.PORT || 10000, () => {
  console.log("Servidor iniciado");
});
