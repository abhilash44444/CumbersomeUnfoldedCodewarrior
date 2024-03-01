import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is running at the port 3000");
});

app.listen(3000, () => {
  console.log("Express server initialized");
});
