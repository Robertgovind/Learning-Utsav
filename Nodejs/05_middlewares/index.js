import express from "express";
import data from "./test_data.json" with {type : "json"};
import router from './api.route.js';


const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

// Application level middlewares and validator
app.use(('/:apiId'),(req, res, next) => {
  console.log("Application level middleware ");
  if(req.params.apiId === '1234'){
    console.log("validated");
  }
  else {
    console.log("not validated");
    res.status(400).send({message : "Invalid api Id", status : "failed"});
  }
  next();
});


app.use('/:apiId/api',router);

app.get("/:apiId/users", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
