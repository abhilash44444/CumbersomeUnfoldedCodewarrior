import express from "express";
import db from "./db.js";
import bodyParser from "body-parser";
import Menu from "./models/menu.js";
import personRoutes from "./routes/personRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";

const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("server is running at the port 3000");
});

// post request for menu

app.use("/", personRoutes);
app.use("/", menuRoutes);

app.listen(3000, () => {
  console.log("Express server initialized");
});
