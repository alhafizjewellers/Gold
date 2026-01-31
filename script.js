let receipts = JSON.parse(localStorage.getItem("receipts")) || {};

function login(){
if(
document.getElementById("user").value=="Muhammad" &&
document.getElementById("pass").value=="Hafiz3537@"
){
document.getElementById("panel").style.display="block";
}else{
alert("Wrong Login");
}
}

function save(){
let code=document.getElementById("r_code").value;
receipts[code]={
Shop:"Al Hafiz Jewellers",
Name:document.getElementById("r_name").value,
Phone:document.getElementById("r_phone").value,
Weight:document.getElementById("r_weight").value,
Karat:document.getElementById("r_karat").value,
Rate:document.getElementById("r_rate").value,
Mazdori:document.getElementById("r_mazdori").value,
Polish:document.getElementById("r_polish").value
};
localStorage.setItem("receipts",JSON.stringify(receipts));
alert("Receipt Saved");
}

function verify(){
let c=document.getElementById("code").value;
document.getElementById("result").innerText=
receipts[c] ? JSON.stringify(receipts[c],null,2) : "Invalid Code";
}