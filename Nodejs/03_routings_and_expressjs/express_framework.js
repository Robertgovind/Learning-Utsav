import express from "express";
import aboutRoute from "./about.route.js";
import contactsRoute from "./contacts.route.js";

const app = express();

app.get("/:about/more/:type", (req, res) => {
  res.status(200).send("Home Page");
  console.log(req.query); //?id=11
  console.log(req.params); // parameters /:about/:type
});

// app.get('/about', (req,res) => {
//     res.status(200).send("About page");
// });
// app.get('/about/author', (req,res) => {
//     res.status(200).send("About page for author");
// });
// app.get('/about/team', (req,res) => {
//     res.status(200).send("About page for team");
// });

// Better way
app.use("/about", aboutRoute);

// app.get("/contacts");

// app.get("/contacts", (req, res) => {
//   res.status(200).send("Contacts page");
// });
// app.get("/contacts/facebook", (req, res) => {
//   res.status(200).send("Facebook contacts");
// });
// app.get("/contacts/linkedin", (req, res) => {
//   res.status(200).send("Linkedin contacts page");
// });
// app.get("/contacts/github", (req, res) => {
//   res.status(200).send("Github contacts page");
// });
// app.get("/contacts/instagram", (req, res) => {
//   res.status(200).send("Instagram contacts page");
// });

app.use("/contacts", contactsRoute);

app.listen(3000, () => {
  console.log("server is running on port 3000 ");
});
