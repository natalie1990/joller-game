/**
 * Constructor
 * Ärver från rune.scene.Scene
 * GameOverNo state.
 * Sidan laddas när spelaren inte har slagit hi-score
 */
 joller.scene.GameOverNo = function(totalScore) {

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
joller.scene.GameOverNo.prototype = Object.create(rune.scene.Scene.prototype);
joller.scene.GameOverNo.prototype.constructor = joller.scene.GameOverNo;

/**
 * INIT
 * Körs en gång när objektet skapas ***
 */
joller.scene.GameOverNo.prototype.init = function() {
	rune.scene.Scene.prototype.init.call(this);



const backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
this.stage.addChild(backroundImg);

this.lives = 0;

this.initHud();

this.initGameOverBox();

};


/**
 * UPDATE
 * 
 * Det mesta styrs utifrån update 
 */
joller.scene.GameOverNo.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

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
		console.log("Spela igen");
	}

};


/**
 * DISPOSE
 */
// Ta bort allt som init skapar, men vissa saker måste man aktivt peka på
joller.scene.GameOverNo.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

/**
 * Initierar HUD
 */
joller.scene.GameOverNo.prototype.initHud = function(){
	this.hud = new joller.ui.Hud(this.totalScore, this.lives);
		this.cameras.getCamera(0).addChild(this.hud);
};

/**
 * Initierar Game Over-menyn
 */
joller.scene.GameOverNo.prototype.initGameOverBox = function(){
	this.cryBaby = new rune.display.Sprite(
		310,
		150,
		660,
		420,
		"",
		"baby_gameOver_sprite"
		);
	
		this.cryBaby.animations.add("idle", [0,1,2,3], 6, true);
		this.cryBaby.animations.gotoAndPlay("idle");
		this.stage.addChild(this.cryBaby);
};


