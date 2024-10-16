// Task
// GET /api/users -> return json data of all users
// GET /users -> return html page with list of user with SSR
// GET /users/1 -> first user
// GET /users/2 -> second user

// PATCH /users/id -> update users data with ID id
// DELETE /users/id -> delete users data with ID id

import express from "express";
import data from "./test_data.json" with {type : "json"};
import fs from "node:fs";

const app = express();
app.use(express.urlencoded({extended : false})); // for form type



app.get("/api/users", (req, res) => {
  return res.json(data);
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${data
      .map((user) => 
        `<li>${user.first_name}</li>`
      )
      .join('')} 
    </ul>
  `;
  res.send(html);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id == id);
  return res.json(user);
});
// Post route
app.post('/api/users',(req,res) => {
  const body = req.body;
  data.push({...body, id : data.length + 1});
  fs.writeFile("./test_data.json",JSON.stringify(data),(err,data) => console.log(err));
  res.json({status:"Success",id : data.length});
});
app.patch('/api/users/:id',(req,res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id == id);
  data.filter((user) => user.id != id);
  res.json(user);
});
app.delete('/api/users/:id',(req,res) => {
  const id = Number(req.params.id);
  const users = data.find((user) => user.id == id);
});

app.listen(4000, () => {
  console.log("Server is runnig on port 4000");
});
