console.log("Kill John Lennon");
var requests = 2;
var connections = 418;
var a = document.querySelector("#Todd");
var b = document.querySelector("#Phil");
var newConnection = document.querySelector("#requests > .header > .amount")
var total = document.querySelector("#known-connections > .header > .amount")
function ApproveDecline(element){
    console.log(element);
    if(element.alt == "approve"){
        console.log("accepted");
        connections += 1;
        total.innerText = connections;
        element.remove();
    }
    else if(element.alt == "decline"){
        console.log("declined");
    }
    else{
        console.log("Haha yeah right bitch");
    }
    requests -= 1;
    newConnection.innerText = requests;
}
function userTodd(){
    a.remove();
}
function userPhil(){
    b.remove();
}
function changeName(element){
    document.querySelector("#user-name").innerText = "Joshua Smith";
}
var arr = [2,4,6,8,-2,-5,4,9,-60]
function positiveNegative(){
      var positive = []
    var negative = []
  for(let i = 0; i< arr.length; i++){
    if(arr[i]<0){
      negative.push(arr[i])
    }
  }
  console.log(negative)
}
positiveNegative()     