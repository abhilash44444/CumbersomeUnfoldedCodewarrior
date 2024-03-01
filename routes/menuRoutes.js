import express from "express";

const router = express.Router();
import Menu from "./..//models/menu.js";

router.post("/menu", async (req, res) => {
  try {
    const data = req.body;

    const newMenu = new Menu(data);

    const response = await newMenu.save();

    console.log("menu data is saved to the database");

    res.status(200).json(response);
  } catch (error) {
    console.log("menu data not send to the database");

    res.status(500).json({ message: "menu data interanal server error" });
  }
});

router.get("/menu", async (req, res) => {
  try {
    const data = await Menu.find();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

router.get("/menu/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
      console.log("taste types are");

      const response = await Menu.find({ taste: tasteType });

      res.status(200).json(response);
    }
  } catch (error) {
    console.log("error occured at menu ", error);

    res.status(500).json({ message: "interanl server error at menu" });
  }
});

export default router;
