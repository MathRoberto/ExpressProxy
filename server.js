import express from "express";
import cors from "cors";
import router from "./router.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path"; // Importe a função join do módulo path

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// Obtenha o caminho do diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Defina o diretório onde o arquivo Interface.html está localizado.
const interfaceDirectory = join(__dirname, "public"); // Use a função join para criar o caminho

// Crie uma rota para servir o arquivo Interface.html quando /interface for acessado.
app.get("/interface", (req, res) => {
  res.sendFile("Interface.html", { root: interfaceDirectory });
});

const port = process.env.PORT || 5000; // Usará a porta definida no ambiente ou a porta 5000 por padrão
app.listen(port, () => {
  console.log(`Server iniciado corretamente e hospedado na porta ${port}`);
});
