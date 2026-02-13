import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

const PORT = 3000;

const API_URL = "https://klinycs.center.emartim.com/Publico/Consulta?Identificador=iEPm7rsa64H3PJuXUSJuhahCBjBaBh62UDeP3ZDA6svvcFYCqgGC3AoKhPdmpcgF79CwCqtLdRBPmhFVycHBZaF2YqHpauYCMCBp";

app.get("/api", async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const text = await response.text();

    let data = text;

   
    while (typeof data === "string") {
      data = JSON.parse(data);
    }

    res.json(data);

  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao buscar dados da API" });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
