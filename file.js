
const express = require("express");
const app= express();
const fs  = require("fs");
app.get("/", (req, res)=>{
 var a;
 var D;

var file = fs.readFile("offers (2).csv" ,(err, data)=>{
	if(err){console.log(err);}
	
	else{
	
	var Ndata = data.toString().split("\r\n");	
	
	
var rows = Ndata[0].split("\n");
var offers= [];
for(let i=1; i<rows.length; i++){
	var offer = rows[i].split(",");
	offers.push(offer);
	
	}
	var allCards =[];
	
	for(let i =0; i<offers.length; i++){

		var card ={
		"Id" : offers[i][0],
		"Title" : rows[i].split(",")[1],
		"Merchant" : rows[i].split(",")[2],
		"Categories" : rows[i].split(",")[3],
		"Description" : rows[i].split(",")[4],
		"Terms" : rows[i].split(",")[5],
		"CoupenCode" : rows[i].split(",")[6],
		"Url"  : rows[i].split(",")[7],
		"Status" : rows[i].split(",")[8],
		"StartDate"  :rows[i].split(",")[9],
		"EndDate" : rows[i].split(",")[10],
	 "OfferAddedAt": rows[i].split(",")[11],
	 "ImageUrl": rows[i].split(",")[12],
	 "CampaignId": rows[i].split(",")[13],
	"CampaignName": rows[i].split(",")[14]
	}
	
	allCards.push(card);
	
	}
	
	
}
var D = allCards;

var a = JSON.stringify(D)


res.end(a);	

	});


});
app.listen({address:'http://152.57.206.66', port:'3600'});
