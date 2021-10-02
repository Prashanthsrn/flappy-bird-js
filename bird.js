
class Bird {
	constructor(x, y, r, colour){
		this.x = x;
		this.y = y;
		this.r = r;
		this.colour = colour;
		this.velY = birdVelY;
		this.accY = birdAccY
	}

	draw(){
		//	Drawing player (bird) sprite
		colorCircle(this.x, this.y, this.r, this.colour);
	}
	
	// function to move the bird 
	move(){
		this.y += this.velY;
		this.velY += this.accY;
	}

	//Sets bird velocity to 0 and bird position to bottom of screen
	kill(){
		this.velY = 0;
		this.y = height - this.r;
		showEndScreen();
	}
}
