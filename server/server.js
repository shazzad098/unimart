import express from "express";
import dotenv from "dotenv";

//Load env server
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello from Unimart server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  console.log(`Client URL: ${process.env.CLIENT_URL}`);
  console.log(`Admin URL: ${process.env.ADMIN_URL}`);
  console.log(`API docs availabe at: http://localhost:${PORT}/api-docs`);
});
