let fs =require('fs');
let data = fs.readFileSync('employee2.json');
let jsonString=data.toString();
let jsObject=JSON.parse(jsonString);
for(let i=0;i<jsObject.length;i++){
  let{name, id, salary}=jsObject[i];
    console.log(`Name: ${name}, Id: ${id}, Salary: ${salary}`)
}