let fs = require("fs");
data = fs.readFileSync("employee.json");
dataString = data.toString();
jsArray = JSON.parse(dataString);
console.log(jsArray);
//response json
let express = require("express");
let app = express();
app.listen(1007, () => {
  console.log("Server is running on 1007");
});

app.get("/", (request, response) => {
  response.send(
    "Hello world this is Shubham and this is what is get from .get function ! "
  );
});
app.get("/employee", (request, response) => {
  response.json(jsArray);
});
