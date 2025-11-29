import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json(
    { message: "Hello from a container",
      service: "user-service",
      pod: process.env.POD_NAME || "unknown",
      time: new Date().toISOString() 



  });
});

app.get("/ready", (req, res) => {
    res.sendStatus(200).send("Ready");
})
app.get("/healthy", (req, res) => {
    res.sendStatus(200).send("OK");
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});