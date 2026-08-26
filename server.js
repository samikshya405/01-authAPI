import express from "express";

const PORT = 3000;

const app = express();
const router = express.Router();
app.use(express.json());


app.listen(PORT, () => {
  console.log("this is ruuning in port", PORT);
});
