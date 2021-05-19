/**
 * Constructor
 * Ärver från rune.scene.Scene
 * Game state.
 */
 joller.scene.Game = function() {
	
	this.m_player = null; //Avatar - bebis
	this.hud = null; //Objekt för HUD
	this.selectedToyArray = []; // Array med skapade leksaker
	this.totalScore = null;
	this.lives = null;
	this.createTimer = null;
	this.music = null;
	this.point = new joller.ui.Point();
	this.powerUpMode = false;

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
joller.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
joller.scene.Game.prototype.constructor = joller.scene.Game;

/**
 * INIT
 * Körs en gång när objektet skapas ***
 */
joller.scene.Game.prototype.init = function() {
	rune.scene.Scene.prototype.init.call(this);

this.application.sounds.music.volume = 0.1;
this.music = this.application.sounds.music.get("bgmusic");
//this.music.play();

this.createTimer = this.timers.create({
	duration: 1500,
	onTick: this.addToy,
	repeat: Infinity,
	scope: this
});

//this.cameras.getCamera(0).debug = true;

const backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
this.stage.addChild(backroundImg);

this.lives = 1;

this.m_initPlayer();
this.initHud();

this.application.highscores.clear();
};


/**
 * UPDATE
 * 
 * Det mesta styrs utifrån update 
 */
joller.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);


/**
 * Loop för att kontrollera kollision med leksak
 */
	for (var i=0; i<this.selectedToyArray.length; i++){
		if (this.selectedToyArray[i].y < 710){
			if (this.m_player.hitTestObject(this.selectedToyArray[i])){
				
				if (this.selectedToyArray[i].powerUp == true){
					this.powerUpMode = true;
					this.powerUpTimer = this.timers.create({
						duration: 10000,
						onComplete: this.umbrellaPower,
						scope: this
					});
				}
				
				this.selectedToyArray[i].parent.removeChild(this.selectedToyArray[i]);
				
				if (this.selectedToyArray[i].looseOneLife == true){
					this.looseLife();
				} else {
					this.getPoints(this.selectedToyArray[i].score);
				}
				this.selectedToyArray.splice(i,1); 
			}
		} else {
			this.stage.removeChild(this.selectedToyArray[i]);
			this.selectedToyArray.splice(i,1);
		}
	}

/**
 * Kontroller för styrning
 */

if (this.lives > 0) {
	if (this.keyboard.pressed("right")){
	this.m_player.x += 5;
	this.m_player.flippedX = false;
	if (this.powerUpMode){
		this.m_player.animations.gotoAndPlay("walk_u");
	} else {
		this.m_player.animations.gotoAndPlay("walk");
	}

	}
	else if(this.keyboard.pressed("left")) {
	this.m_player.x -= 5;
	this.m_player.flippedX = true;
	if (this.powerUpMode){
		this.m_player.animations.gotoAndPlay("walk_u");
	} else {
		this.m_player.animations.gotoAndPlay("walk");
	}
			  }
	else {
		if (this.powerUpMode){
			this.m_player.animations.gotoAndPlay("idle_u");
		} else {
			this.m_player.animations.gotoAndPlay("idle");
		}
	}
}
//else {
//	if (this.powerUpMode){
//		this.m_player.animations.gotoAndPlay("idle_u");
//	}
//	else {
//		this.m_player.animations.gotoAndPlay("idle");
//	}
//}

};


/**
 * DISPOSE
 */
// Ta bort allt som init skapar, men vissa saker måste man aktivt peka på
joller.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
	this.m_player.dispose();
	this.m_player = null;
};

/**
 * Initierar HUD
 */
joller.scene.Game.prototype.initHud = function(){
	this.hud = new joller.ui.Hud(this.totalScore, this.lives);
		this.cameras.getCamera(0).addChild(this.hud);
};

/**
 * Skapar avataren - bebisen
 */
joller.scene.Game.prototype.m_initPlayer = function(){
	this.m_player = new rune.display.Sprite(
	160,
	600,
	90,
	70,
	"",
	"baby_sprite"
	);

	this.m_player.hitbox.set(5,5,60,50);
	this.m_player.animations.add("idle", [0], 6, true);
	this.m_player.animations.add("walk", [1,2,3,4,5], 8, true);
	this.m_player.animations.gotoAndPlay("walk");
	this.m_player.animations.add("idle_u", [6], 6, true);
	this.m_player.animations.add("walk_u", [7,8,9,10,11], 8, true);
	this.stage.addChild(this.m_player);
};



/**
 * Skapar nya instanser av leksaker och sparar i array samt lägger ut på scen
 */
	joller.scene.Game.prototype.addToy = function(){
			var chance = [0,0,0,0,0,1,1,2,3,3,4,4,5,6];
			var i = chance[Math.floor(Math.random()*chance.length)];
			var toys = [joller.entity.Drop, joller.entity.Duck, joller.entity.Star, joller.entity.Bear, joller.entity.Car, joller.entity.Umbrella, joller.entity.Rattle];
			var toy = new toys[i]();
			toy.x = rune.util.Math.random(0,1232);
			this.selectedToyArray.push(toy);
			this.stage.addChild(toy);

	};

/**
 * Vid kollision med leksak erhålles poäng och HUD uppdateras
 */
joller.scene.Game.prototype.getPoints = function(scoreOfSelectedToy){
	this.application.sounds.music.volume = 0.1;
	var laughSound = this.application.sounds.music.get("sound_skratt");
	laughSound.play();
	this.totalScore += scoreOfSelectedToy;
	this.hud.updateScore(this.totalScore);

	this.point.autoSize = true;
	this.point.text = "+" + scoreOfSelectedToy;
	this.point.centerX = this.m_player.centerX;
	this.point.bottom = this.m_player.top;
	this.stage.addChild(this.point);
};

joller.scene.Game.prototype.looseLife = function(){
	if (this.powerUpMode){
		console.log("You didn't loose a life");
	} else {
		this.application.sounds.music.volume = 0.1;
		var crySound = this.application.sounds.music.get("sound_cry");
		crySound.play();
		this.lives -= 1;
		if (this.lives == 0){
			this.gameOver();
		}
		this.hud.updateLives(this.lives);
	}
};


joller.scene.Game.prototype.gameOver = function(){
	var ranking = this.application.highscores.send(this.totalScore,"Monika");
	this.music.stop();

	// Stoppar timern och inaktiverar leksakerna
	this.createTimer.stop();
	for (var i=0; i<this.selectedToyArray.length; i++){
		this.selectedToyArray[i].active = false;
	}

	// Laddar in olika scener beroende på om spelaren slagit hi-score
	if (ranking == -1){
		this.application.scenes.load([new joller.scene.GameOverNo(this.totalScore)]);
	} else {
		this.application.scenes.load([new joller.scene.GameOverYes(this.totalScore)]);
	}
};

joller.scene.Game.prototype.umbrellaPower = function(){
	this.powerUpMode = false;
};