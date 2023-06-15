const express = require("express");
const { Agent } = require("./model");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

//! Get all agents
app.get("/agents", async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

//! POST a new agent
app.post("/agents", async (req, res, next) => {
  try {
    console.log(req.body);
    const {
      firstName,
      lastName,
      photoUrl,
      agentLicence,
      address,
      practiceAreas,
      aboutMe,
    } = req.body;

    const newAgent = await Agent.create({
      firstName,
      lastName,
      photoUrl,
      agentLicence,
      address,
      practiceAreas,
      aboutMe,
    });

    return res.status(201).json(newAgent);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al agregar un nuevo agente" });
  }
});

//! DELETE an agent
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ error: "Wrong id !" });
    }

    const agent = await Agent.destroy({ where: { id } });

    if (!agent) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ deleted: agent });
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
