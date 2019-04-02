var proxy, url, q;

var spaceP;
function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(600,600);
  proxy = "http://cors-anywhere.herokuapp.com/";
  url="https://swapi.co/api/"
  q="people/1/";
  spaceP=[];
  fill(255);
  setInterval(sendAPIrequest,8000);

}

function draw() {
  background(0);
  // put drawing code here
  for(var i = 0 ; i < spaceP.length; i++){
    text(spaceP[i],50,50*(i+1),width-100,height);
  }

}

function getData (data) {
  //console.log(data.people[0].name);
  spaceP=[];
  //if (data.type == "success") {
  //for (var i = 0 ; i < parseInt (data.length,10); i++){
    //text(data.people[i].name.toString(),10,10*i);
    spaceP.push(data.name);
    spaceP.push(data.height);

  //}
}
function sendAPIrequest (){
 loadJSON (proxy+url+q,getData);
}
