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
	this.okLet = null;
	this.arrow = null;
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



var backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
this.stage.addChild(backroundImg);

this.lives = 0;

this.initHud(this.totalScore);

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
		if (this.letters[this.letterIndex].id != "ok"){
			this.letters[this.letterIndex].flicker();
		}
		if (this.letters[this.letterIndex].id == "ok"){
			this.arrow.visible = true;
		} else {
			this.arrow.visible = false;
		}
	}

	if (this.keyboard.justPressed("left")){
		this.letterIndex--;
		if (this.letterIndex <= -1) {
			this.letterIndex = this.letters.length - 1;
		}
		if (this.letters[this.letterIndex].id != "ok"){
		this.letters[this.letterIndex].flicker();
		}
		if (this.letters[this.letterIndex].id == "ok"){
			this.arrow.visible = true;
		} else {
			this.arrow.visible = false;
		}
	}

	if (this.keyboard.justPressed("space") && this.letters[this.letterIndex].id == "ok"){
		var name = this.letterOne.text + "" + this.letterTwo.text + "" + this.letterThree.text;
		this.application.highscores.send(this.totalScore,name);
		this.application.scenes.load([new joller.scene.GameOverMenu(this.totalScore)]);
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
	
/**
 * Sprite for Game Over-image
 */
	this.cryBaby = new rune.display.Sprite(
		310,
		90,
		660,
		420,
		"",
		"baby_gameover"
		);
	
		this.cryBaby.animations.add("idle", [0,1,2,3], 6, true);
		this.cryBaby.animations.gotoAndPlay("idle");
		this.stage.addChild(this.cryBaby);

/**
 * Instructions to the player (later replace with image)
 */
 var newHi = new rune.display.Graphic(475,470,350,110,"","hi");
 newHi.scaleX = 0.95;
 newHi.scaleY = 0.95;
this.stage.addChild(newHi);

var enter = new rune.text.BitmapField("Enter your name","font");
enter.autoSize = true;
enter.scaleX = 0.25;
enter.scaleY = 0.25;
enter.x = 445;
enter.y = 540;
this.stage.addChild(enter);


	
/**
 * The letters for typing the player's name
 */
		this.letterOne = new rune.text.BitmapField("A","new");
		this.letters.push(this.letterOne);
		this.letterTwo = new rune.text.BitmapField("B","new");
		this.letters.push(this.letterTwo);
		this.letterThree = new rune.text.BitmapField("C","new");
		this.letters.push(this.letterThree);
		this.okLet = new rune.display.Graphic(710,600,75,50,"","ok");
		this.letters.push(this.okLet);
		this.okLet.scaleX = 0.75;
		this.okLet.scaleY = 0.75;
		this.okLet.id = "ok";
		this.letterOne.autoSize = true;
		this.letterTwo.autoSize = true;
		this.letterThree.autoSize = true;
		this.letterOne.x = 510;
		this.letterTwo.x = 560;
		this.letterThree.x = 610;
		this.letterOne.y = 600;
		this.letterTwo.y = 600;
		this.letterThree.y = 600;

		this.letterOne.scaleX = 0.35;
		this.letterOne.scaleY = 0.35;
		this.letterTwo.scaleX = 0.35;
		this.letterTwo.scaleY = 0.35;
		this.letterThree.scaleX = 0.35;
		this.letterThree.scaleY = 0.35;

		this.arrow = new rune.display.Graphic(680,605,75,50,"","arrow");
		this.arrow.scaleX = 0.70;
		this.arrow.scaleY = 0.70;
		this.arrow.visible = false;

		this.stage.addChild(this.letterOne);
		this.stage.addChild(this.letterTwo);
		this.stage.addChild(this.letterThree);
		this.stage.addChild(this.okLet);
		this.stage.addChild(this.arrow);



};