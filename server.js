import express from "express";
import userRoutes from './src/routes/userRoutes.js'

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(userRoutes);


app.listen(PORT, () => {
  console.log("this is ruuning in port", PORT);
});
