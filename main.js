canvas = document.getElementById ('mycanvas');
ctx = canvas.getElementById("2d")

Greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
background_image = new Image ();
background_imgtag.onload = uploadBackground;
background_imgtag.src = background_image;

greencar_imgtag = new Image();
greencar_imgtag.onload = uploadgreencar;
greencar_imgtag.src = greencar_image;
}

function uploadBackground() {
ctx.drawimage(background_imgtag, 0, 0, canvas.width canvas.hight);

}

function uploadgreencar() {
ctx.drawimage(greencar_imgtag, greencar_x,greencar_y, Greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '36')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	greencar_y = greencar_y -10;
	console.log("when up arrow is pressed, x = " + greencar_x " | y = " +greencar_y);
	uploadBackground();
	uploadgreencar():
}

function down()
{
	if(greencar_y <=350)
	greencar_y = greencar_y +10;
	console.log("when up arrow is pressed, x = " + greencar_x " | y = " +greencar_y);
	uploadBackground();
	uploadgreencar():
}

function left()
{
	if(greencar_x >=0)
	greencar_x = greencar_x -10;
	console.log("when up arrow is pressed, x = " + greencar_x " | y = " +greencar_y);
	uploadBackground();
	uploadgreencar():
}

function right()
{
	if(greencar_x <=750)
	greencar_x = greencar_x +10;
	console.log("when up arrow is pressed, x = " + greencar_x " | y = " +greencar_y);
	uploadBackground();
	uploadgreencar():
}

}
