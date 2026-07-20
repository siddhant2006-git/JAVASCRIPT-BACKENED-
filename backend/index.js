require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const Github = {
  login: "siddhant2006-git",
  id: 230009162,
  node_id: "U_kgDODbWpSg",
  avatar_url: "https://avatars.githubusercontent.com/u/230009162?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/siddhant2006-git",
  html_url: "https://github.com/siddhant2006-git",
  followers_url: "https://api.github.com/users/siddhant2006-git/followers",
  following_url:
    "https://api.github.com/users/siddhant2006-git/following{/other_user}",
  gists_url: "https://api.github.com/users/siddhant2006-git/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/siddhant2006-git/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/siddhant2006-git/subscriptions",
  organizations_url: "https://api.github.com/users/siddhant2006-git/orgs",
  repos_url: "https://api.github.com/users/siddhant2006-git/repos",
  events_url: "https://api.github.com/users/siddhant2006-git/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/siddhant2006-git/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 11,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2025-09-02T17:34:57Z",
  updated_at: "2026-05-24T18:27:07Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("hello krish");
})

app.get("/Github", (req, res) => {
  res.json(Github);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log(process.env.PORT)

