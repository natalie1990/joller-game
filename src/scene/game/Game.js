/**
 * Constructor
 * Ärver från rune.scene.Scene
 * Game state.
 */
 joller.scene.Game = function() {
	
	this.m_player = null; //Avatar - bebis
	this.hud = null; //Objekt för HUD
	this.selectedToyArray = []; // Array med skapade leksaker
	this.totalScore = null; // Spelarens totala poäng
	this.lives = null; // Spelarens totala liv
	this.createTimer = null; // Timer för fallande objekt
	this.music = null;	// Bakgrundsmusiken
	this.point = new joller.ui.Point(); // Visar poäng vid fångad leksak
	this.bubble = null;  // Visar bubbla vid missad leksal
	this.powerUpMode = false; // Flagga för att visa om paraply power-up är aktiv
	this.candyPower = false; // Flagga för att visa om godis power-up är aktiv

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

/**
 * Hantering för bakgrundsmusik
 */
this.application.sounds.music.volume = 0.1;
this.music = this.application.sounds.music.get("bgmusic");
//this.music.play();

/**
 * Skapar timer för fallande objekt
 */
 this.createTimer = this.timers.create({
	duration: 3000,
	onTick: this.addToy,
	repeat: Infinity,
	scope: this
});

/**
 * Bakgrundsbild
 */
var backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
this.stage.addChild(backroundImg);


/**
 * Intierar spelarens liv, spelaren och HUD:en
 */
this.lives = 3;

this.m_initPlayer();
this.initHud();

}; //End of init


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
		if (this.selectedToyArray[i].y < 640){
			if (this.m_player.hitTestObject(this.selectedToyArray[i])){

				// Kontrollerar om paraply-mode ska aktiveras och startar timer
				if (this.selectedToyArray[i].powerUp == true){
					this.powerUpMode = true;
					var powerUpTimer = this.timers.create({
						duration: 10000,
						onComplete: this.umbrellaPower,
						scope: this
					});
				}

				// Kontrollerar om godis-mode ska aktiveras och startar timer
				if (this.selectedToyArray[i].isCandy == true){
					this.candyPower = true;
					var candyTimer = this.timers.create({
						duration: 10000,
						onComplete: this.candyMode,
						scope: this
					});
				}
				
				this.selectedToyArray[i].parent.removeChild(this.selectedToyArray[i]);
				
				// Kontrollerar om det är en poänggivare leksak eller droppe
				if (this.selectedToyArray[i].looseOneLife == true){
					this.looseLife(this.selectedToyArray[i],"drop");
				} else {
					this.getPoints(this.selectedToyArray[i].score);
				}
				this.selectedToyArray.splice(i,1); 
			}

		} else { // Kontrollerar om objektet är en vanlig leksak
			if (this.selectedToyArray[i].isNormalToy){
				this.looseLife(this.selectedToyArray[i],"toy");
			}
			this.stage.removeChild(this.selectedToyArray[i]);
			this.selectedToyArray.splice(i,1);
		}
	}

/**
 * Kontroll för att spelaren ej ska kunna gå utanför skärm
 */
if (this.m_player.x < 0){
	this.m_player.x = 0;
} else if (this.m_player.right > this.application.screen.width){
	this.m_player.right = this.application.screen.width;
}


/**
 * Kontroller för styrning
 */

// Animation för walk right
if (this.lives > 0) {
	if (this.keyboard.pressed("right")){
		if (this.candyPower == false) {
			this.m_player.x += 5;
		} else {
			this.m_player.x += 8;
		}
	this.m_player.flippedX = false;
	if (this.powerUpMode){
		this.m_player.animations.gotoAndPlay("walk_u");
	} else if (this.candyPower){
		this.m_player.animations.gotoAndPlay("walk_c");
	} else {
		this.m_player.animations.gotoAndPlay("walk");
	}

	} // End of right

// Animation för walk left
	else if(this.keyboard.pressed("left")) {
	if (this.candyPower == false) {
		this.m_player.x -= 5;
	} else {
		this.m_player.x -= 8;
	}

	this.m_player.flippedX = true;
	if (this.powerUpMode){
		this.m_player.animations.gotoAndPlay("walk_u");
	} else if (this.candyPower){
		this.m_player.animations.gotoAndPlay("walk_c");
	} else {
		this.m_player.animations.gotoAndPlay("walk");
	}
			  } // End of left

// Animation för idle
	else {
		if (this.powerUpMode){
			this.m_player.animations.gotoAndPlay("idle_u");
		} else {
			this.m_player.animations.gotoAndPlay("idle");
		}
	}
}

/**
 * Tömmer hi-score för testning
 */
if (this.keyboard.justPressed("p")){
	this.application.highscores.clear();
}

/**
 * Mutar/un-mutar musiken
 */

if (this.keyboard.justPressed("m")){
	this.pauseMusic();
}

}; // End of update


/**
 * DISPOSE
 */
// Ta bort allt som init skapar, men vissa saker måste man aktivt peka på
joller.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
	this.m_player.dispose();
	this.m_player = null;
}; // End of dispose

/**
 * Initierar HUD
 */
joller.scene.Game.prototype.initHud = function(){
	this.hud = new joller.ui.Hud(this.totalScore, this.lives);
		this.cameras.getCamera(0).addChild(this.hud);
};

/**
 * Skapar spelaren - bebisen
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

// Animation för spelarens default-läge
	this.m_player.animations.add("idle", [0], 6, true);
	this.m_player.animations.add("walk", [1,2,3,4,5], 8, true);
	this.m_player.animations.gotoAndPlay("walk");

// Animation för spelaren när godis-mode är aktivt
	this.m_player.animations.add("walk_c", [1,2,3,4,5], 16, true);

// Animation för spelaren när paraply-mode är aktivt
	this.m_player.animations.add("idle_u", [6], 6, true);
	this.m_player.animations.add("walk_u", [7,8,9,10,11], 8, true);

	this.stage.addChild(this.m_player);
};



/**
 * Skapar nya instanser av leksaker och sparar i array samt lägger ut på scen
 */
	joller.scene.Game.prototype.addToy = function(){
			var chance = [0,0,0,0,0,1,1,2,3,3,4,4,5,6,6,7,7,7,7];
			//var chance = [7,7,7];
			var i = chance[Math.floor(Math.random()*chance.length)];
			var toys = [joller.entity.Drop, joller.entity.Duck, joller.entity.Star, joller.entity.Bear, joller.entity.Car, joller.entity.Umbrella, joller.entity.Rattle, joller.entity.Candy];
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
	var laughSound = this.application.sounds.sound.get("sound_skratt");
	laughSound.play();
	this.totalScore += scoreOfSelectedToy;
	this.hud.updateScore(this.totalScore);

	this.point.autoSize = true;
	this.point.text = "+" + scoreOfSelectedToy;
	this.point.centerX = this.m_player.centerX;
	this.point.bottom = this.m_player.top;
	this.stage.addChild(this.point);
};


joller.scene.Game.prototype.looseLife = function(obj,flag){

	this.m_player.flicker();

	if (flag == "toy"){
		this.bubble = new joller.ui.Bubble();
		this.bubble.centerX = obj.centerX;
		this.bubble.bottom = obj.top;
		this.stage.addChild(this.bubble);
	}


	if (this.powerUpMode == false){
		this.application.sounds.music.volume = 0.1;
		var crySound = this.application.sounds.sound.get("sound_cry");
		crySound.play();
		this.lives -= 1;
		if (this.lives == 0){
			this.gameOver();
		}
		this.hud.updateLives(this.lives);
	}
};


joller.scene.Game.prototype.gameOver = function(){
	var ranking = this.application.highscores.test(this.totalScore);
	this.music.stop();

	// Stoppar timern och inaktiverar leksakerna
	this.createTimer.stop();
	for (var i=0; i<this.selectedToyArray.length; i++){
		this.selectedToyArray[i].active = false;
	}

	// Laddar in olika scener beroende på om spelaren slagit hi-score
	if (ranking == -1){
		this.application.scenes.load([new joller.scene.GameOverMenu(this.totalScore)]);
	} else {
		this.application.scenes.load([new joller.scene.GameOverYes(this.totalScore)]);
	}
};

joller.scene.Game.prototype.umbrellaPower = function(){
	this.powerUpMode = false;
};

joller.scene.Game.prototype.candyMode = function(){
	this.candyPower = false;
};

joller.scene.Game.prototype.pauseMusic = function(){

	//console.log(this.music.paused);

	if (this.music.paused == false) {
		this.music.pause();
		this.hud.mute("yes");
	}

	else {
		this.music.resume();
		this.hud.mute("no");
	}
};