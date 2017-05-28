var url = 'http://api.open-notify.org/iss-now.json';//link API
//possisi Ellipse(Space Station)
var issX; 
var issY;
//variabel menyimpan gambar
var img;
function checkstatus()// test koneksi apakah user terhubung dengan internet atau tidak
{
	if(navigator.onLine)
	{
		setInterval(askISS, 1000);
	}
	else
	{
		var x = document.getElementById("koneksi");
		x.style.color = "red";
		x.innerHTML = "Harus connect ke internet !!!";
	}
}

function setup() // dari P5js Framework
{
	checkstatus();
	createCanvas(974, 491);
	img = loadImage("images/peta.png");
}

function askISS()//reload JSON file dari URL
{
	loadJSON(url, gotData, 'jsonp');
}

function gotData(data)//mendapatakan data dari JSON file
{
	var lat = data.iss_position.latitude;
	var long = data.iss_position.longitude;
	issX = map(lat, -180, 180, 0, width);
	issY = map(long, -180, 180, 0, height);
	var x = document.getElementById("koneksi");
		x.style.color = "Black";
		x.innerHTML = "Latitude : "+ lat + " Longitude : " + long;
}

function draw()//dari P5js Framework
{
	// Displays the image at point (0,0)
  	image(img, 0, 0);
	fill(255);	
	ellipse(issX, issY, 25, 25);
}