const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res)=>{
	
	res.end('index.html');
	
	});
app.listen(3003, (err)=>{
	if(err) {console.log(err);}
	else{
		console.log("connected");
		}
	
	});
