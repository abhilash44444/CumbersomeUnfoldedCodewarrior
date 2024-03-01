import express from "express";
import Person from "./..//models/person.js";

const router = express.Router();

router.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data sent to the database"); // corrected message
    res.status(200).json(response);
  } catch (error) {
    console.log("data not sent to the database"); // corrected message
    res.status(500).json({ message: "data not sent to the database" }); // corrected message
  }
});

router.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetchef from the database");

    res.status(200).json(data);
  } catch (error) {
    console.log("data not fetched from the database", error);
    res.status(500).json({ message: "internal server error" });
  }
});

router.get("/person/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      res.status(200).json(response); // Send the response back
    } else {
      res.status(404).json({ message: "work type not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

//  update operation

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedData = req.body;
    const response = await Person.findByIdAndUpdate(personId, updatedData);

    if (!response) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error("Error updating person data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.status(200).json({ message: "successfully deleted the person" });
  } catch (error) {
    console.error("Error updating person data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
