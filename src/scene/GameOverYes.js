/**
 * Constructor
 * Ärver från rune.scene.Scene
 * GameOverYes state.
 */
 joller.scene.GameOverYes = function(totalScore) {

	this.letterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	this.letters = [];
	this.selectedIndex = 0;
	this.letterIndex = 0;
	this.letterOne = null;
	this.letterTwo = null;
	this.letterThree = null;
	this.totalScore = totalScore;
	this.cryBaby = null;

    /**
     * Supercall
     */
    rune.scene.Scene.call(this);
};

/**
 * 
 * Arv
 * 
 */
joller.scene.GameOverYes.prototype = Object.create(rune.scene.Scene.prototype);
joller.scene.GameOverYes.prototype.constructor = joller.scene.GameOverYes;

/**
 * INIT
 * Körs en gång när objektet skapas ***
 */
joller.scene.GameOverYes.prototype.init = function() {
	rune.scene.Scene.prototype.init.call(this);



const backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
this.stage.addChild(backroundImg);

this.lives = 0;

this.initHud();

this.GameOver();

};


/**
 * UPDATE
 * 
 * Det mesta styrs utifrån update 
 */
joller.scene.GameOverYes.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

	if (this.keyboard.justPressed("up")){
		this.selectedIndex--;
		if (this.selectedIndex < 0) {
			this.selectedIndex = this.letterArray.length - 1;
		}
		this.letters[this.letterIndex].text = this.letterArray[this.selectedIndex];
		//console.log("Vald bokstav är " + this.letterArray[this.selectedIndex]);
	} else if (this.keyboard.justPressed("down")) {
		this.selectedIndex++;
		if (this.selectedIndex >= this.letterArray.length){
			this.selectedIndex = 0;
		}
		this.letters[this.letterIndex].text = this.letterArray[this.selectedIndex];
		//console.log("Vald bokstav är " + this.letterArray[this.selectedIndex]);
	}

	if (this.keyboard.justPressed("right")){
		this.letterIndex++;
		if (this.letterIndex >= this.letters.length) {
			this.letterIndex = 0;
		}
		this.letters[this.letterIndex].flicker();
	}

	if (this.keyboard.justPressed("left")){
		this.letterIndex--;
		if (this.letterIndex <= -1) {
			this.letterIndex = this.letters.length - 1;
		}
		this.letters[this.letterIndex].flicker();
	}

	if (this.keyboard.justPressed("space")){
		var name = this.letterOne.text + "" + this.letterTwo.text + "" + this.letterThree.text;
		this.application.highscores.send(this.totalScore,name);
		//this.letterOne.text = this.letterArray[this.selectedIndex];
	}

};


/**
 * DISPOSE
 */
// Ta bort allt som init skapar, men vissa saker måste man aktivt peka på
joller.scene.GameOverYes.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

/**
 * Initierar HUD
 */
joller.scene.GameOverYes.prototype.initHud = function(){
	this.hud = new joller.ui.Hud(this.totalScore, this.lives);
		this.cameras.getCamera(0).addChild(this.hud);
};




joller.scene.GameOverYes.prototype.GameOver = function(){
	var ranking = this.application.highscores.test(this.totalScore);
	console.log(ranking);
	var GameOverYesOverScore = new rune.text.BitmapField("Total Score: " + this.totalScore);

		var gameOverBox = new rune.display.DisplayObjectContainer(300,200,600,400,"#FFFFFF");
		gameOverBox.alpha = 0.6;
		//this.cameras.getCamera(0).addChild(gameOverBox);
		
		this.letterOne = new rune.text.BitmapField("A");
		this.letters.push(this.letterOne);
		this.letterTwo = new rune.text.BitmapField("B");
		this.letters.push(this.letterTwo);
		this.letterThree = new rune.text.BitmapField("C");
		this.letters.push(this.letterThree);


		this.letterOne.x = 450;
		this.letterTwo.x = 500;
		this.letterOne.scaleX = 4;
		this.letterOne.scaleY = 4;
		this.letterTwo.scaleX = 4;
		this.letterTwo.scaleY = 4;
		this.letterThree.scaleX = 4;
		this.letterThree.scaleY = 4;
		this.letterThree.x = 550;
		this.letterOne.y = 300;
		this.letterTwo.y = 300;
		this.letterThree.y = 300;
		this.cameras.getCamera(0).addChild(this.letterOne);
		this.cameras.getCamera(0).addChild(this.letterTwo);
		this.cameras.getCamera(0).addChild(this.letterThree);


	this.cryBaby = new rune.display.Sprite(
		310,
		150,
		660,
		420,
		"",
		"joller_go_baby"
		);
	
		this.cryBaby.animations.add("idle", [0,1,2,3], 6, true);
		this.cryBaby.animations.gotoAndPlay("idle");
		this.stage.addChild(this.cryBaby);

};