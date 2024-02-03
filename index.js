require('dotenv').config()
const express = require('express')
// import express from "express" same as the above
const app = express();
const port = 3000
const gitHubData =
  {
    "login": "Rohansunwar5",
    "id": 80083391,
    "node_id": "MDQ6VXNlcjgwMDgzMzkx",
    "avatar_url": "https://avatars.githubusercontent.com/u/80083391?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Rohansunwar5",
    "html_url": "https://github.com/Rohansunwar5",
    "followers_url": "https://api.github.com/users/Rohansunwar5/followers",
    "following_url": "https://api.github.com/users/Rohansunwar5/following{/other_user}",
    "gists_url": "https://api.github.com/users/Rohansunwar5/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Rohansunwar5/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Rohansunwar5/subscriptions",
    "organizations_url": "https://api.github.com/users/Rohansunwar5/orgs",
    "repos_url": "https://api.github.com/users/Rohansunwar5/repos",
    "events_url": "https://api.github.com/users/Rohansunwar5/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Rohansunwar5/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 16,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2021-03-05T03:24:15Z",
    "updated_at": "2024-01-17T14:47:53Z"
  }


app.get('/', (req, res) => {
  res.send("hello World")
})

app.get('/twitter', (req, res) => {
  res.send("https://twitter.com/fg_rohnn")
})

app.get('/login', (req, res) => {
  res.send ('<h1> please login at chai aur code </h1>')
})

app.get('/youtube', (req, res) => {
  res.send("<h2>Chai Aur code</h2>")
})

app.get('/github',(req,res) => {
  res.json(gitHubData)
} )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
})