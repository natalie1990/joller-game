/**
 * Constructor
 * Ärver från rune.scene.Scene
 * GameOverMenu state.
 */
 joller.scene.GameOverMenu = function(totalScore) {

	this.menuArray = ["play","menu"];
	this.selectedIndex = 0;

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
joller.scene.GameOverMenu.prototype = Object.create(rune.scene.Scene.prototype);
joller.scene.GameOverMenu.prototype.constructor = joller.scene.GameOverMenu;

/**
 * INIT
 * Körs en gång när objektet skapas ***
 */
joller.scene.GameOverMenu.prototype.init = function() {
	rune.scene.Scene.prototype.init.call(this);



const backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
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
joller.scene.GameOverMenu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);


	if (this.keyboard.justPressed("right")){
		this.selectedIndex++;
		if (this.selectedIndex >= this.menuArray.length) {
			this.selectedIndex = 0;
		}
		if (this.menuArray[this.selectedIndex] == "play"){
			this.arrow.x = 465;
		}
		if (this.menuArray[this.selectedIndex] == "menu"){
			this.arrow.x = 650;
		}
	}

	if (this.keyboard.justPressed("left")){
		this.selectedIndex--;
		if (this.selectedIndex <= -1) {
			this.selectedIndex = this.menuArray.length - 1;
		}
		if (this.menuArray[this.selectedIndex] == "play"){
			this.arrow.x = 465;
		}
		if (this.menuArray[this.selectedIndex] == "menu"){
			this.arrow.x = 650;
		}
	}

	if (this.keyboard.justPressed("space")){
		if (this.menuArray[this.selectedIndex] == "play"){
			this.application.scenes.load([new joller.scene.Game]);
		}
		if (this.menuArray[this.selectedIndex] == "menu"){
			this.application.scenes.load([new joller.scene.Menu]);
		}
	}

};


/**
 * DISPOSE
 */
// Ta bort allt som init skapar, men vissa saker måste man aktivt peka på
joller.scene.GameOverMenu.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

/**
 * Initierar HUD
 */
joller.scene.GameOverMenu.prototype.initHud = function(){
	this.hud = new joller.ui.Hud(this.totalScore, this.lives);
		this.cameras.getCamera(0).addChild(this.hud);
};



joller.scene.GameOverMenu.prototype.GameOver = function(){
	
/**
 * Sprite for Game Over-image
 */
	this.cryBaby = new rune.display.Sprite(
		310,
		90,
		660,
		420,
		"",
		"game_over"
		);
	
		this.cryBaby.animations.add("idle", [0,1,2,3], 6, true);
		this.cryBaby.animations.gotoAndPlay("idle");
		this.stage.addChild(this.cryBaby);

/**
 * Buttons for play again or back to menu
 */
 this.arrow = new rune.display.Graphic(465,500,75,50,"","arrow");
 this.arrow.scaleX = 0.8;
 this.arrow.scaleY = 0.8;
 this.stage.addChild(this.arrow);

 var playBtn = new rune.display.Graphic(500,490,130,90,"","play_again2");
 playBtn.scaleX = 0.9;
 playBtn.scaleY = 0.9;
 this.stage.addChild(playBtn);

 var menuBtn = new rune.display.Graphic(690,490,130,90,"","to_menu");
 menuBtn.scaleX = 0.9;
 menuBtn.scaleY = 0.9;
 this.stage.addChild(menuBtn);

};