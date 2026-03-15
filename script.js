
function convertJSONtoCSV(){

const jsonInput = document.getElementById("jsonInput").value;

try{

const data = JSON.parse(jsonInput);

if(!Array.isArray(data)){
alert("JSON must be an array of objects");
return;
}

const headers = Object.keys(data[0]);

const csvRows = [];

csvRows.push(headers.join(","));

for(let row of data){
const values = headers.map(h => JSON.stringify(row[h] ?? ""));
csvRows.push(values.join(","));
}

document.getElementById("csvOutput").value = csvRows.join("\n");

}catch(e){
alert("Invalid JSON");
}

}



function encodeBase64(){

const text = document.getElementById("base64Input").value;

const encoded = btoa(text);

document.getElementById("base64Output").value = encoded;

}



function decodeBase64(){

try{

const text = document.getElementById("base64Input").value;

const decoded = atob(text);

document.getElementById("base64Output").value = decoded;

}catch(e){

alert("Invalid Base64 string");

}

}



function testRegex(){

const pattern = document.getElementById("regexPattern").value;

const text = document.getElementById("regexText").value;

try{

const regex = new RegExp(pattern, "g");

const matches = text.match(regex);

document.getElementById("regexResult").textContent =
matches ? matches.join("\n") : "No matches";

}catch(e){

document.getElementById("regexResult").textContent =
"Invalid Regex";

}

}



function convertTimestamp(){

const ts = document.getElementById("timestampInput").value;

if(!ts){
return;
}

const date = new Date(Number(ts) * 1000);

document.getElementById("timestampResult").textContent =
date.toString();

}
