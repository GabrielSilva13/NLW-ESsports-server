import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json([
    {
      id: 1,
      name: "Eita",
    },
    {
      id: 2,
      name: "Eita 2",
    },
    {
      id: 3,
      name: "Eita 3",
    },
    {
      id: 4,
      name: "Eita 4",
    },
  ]);
});

app.listen(3333);
