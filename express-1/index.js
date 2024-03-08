const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   res.send("We got your request! This is the response.");
// });

app.get("/", (req, res) => {
  res.send("This is the home page!");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!");
});

app.post("/cats", (req, res) => {
  res.send("This is a post request to /cats!!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the subreddit</h1>`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found if nothing searched");
  }
  res.send(`<h1>Search results for ${q}</h1>`);
}); //http://localhost:3000/search?q=dog vaka vo browser
//sekad mora na krajot da se stavi, posho nema da gi cita drugite
app.get("*", (req, res) => {
  res.send("I dont know that path ERROR 404!");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
