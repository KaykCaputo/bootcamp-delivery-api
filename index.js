import express from "express";
import registerRoutes from "./routes/index.js";

const app = express();
app.use(express.json());

registerRoutes(app);

app.listen(6000, () => {
  console.log("API started");
});
