import express from "express";

const app = express();
const jokes =
  [
    {
      key:1,
      title: "The Optimistic Server",
      content:
        "Why did the server go to therapy? Because it had too many unresolved requests!",
    },
    {
      key:2,
      title: "The Musical Canine",
      content:
        "What do you call a dog that does magic tricks? A labracadabrador!",
    },
    {
      Key:3,
      title: "The Breakfast Mystery",
      content: "Why did the coffee file a police report? It got mugged!",
    },
    {
      key:4,
      title: "The Astronomer's Dilemma",
      content: "How do you organize a space party? You planet!",
    },
    {
      key:5,
      title: "The Math Book's Lament",
      content: "Why was the math book sad? Because it had too many problems.",
    },
  ];

app.get("/", (req, res) => {
  res.send("server is ready ");
});

app.get("/jokes", (req, res) => {
  res.send(jokes);
});
const port = process.env.PORT || 5173;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})
