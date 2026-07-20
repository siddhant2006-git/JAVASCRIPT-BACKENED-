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
      title: "The Breakfast Mystery",
      content: "Why did the coffee file a police report? It got mugged!",
    },
    {
      title: "The Astronomer's Dilemma",
      content: "How do you organize a space party? You planet!",
    },
    {
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
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})
