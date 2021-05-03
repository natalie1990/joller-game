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

this.application.sounds.music.volume = 0.5;
var music = this.application.sounds.music.get("bgmusic");
//music.play();

this.timers.create({
	duration: 2000,
	onTick: this.addToy,
	repeat: Infinity,
	scope: this
});

//this.cameras.getCamera(0).debug = true;

const backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
this.stage.addChild(backroundImg);

this.lives = 3;

this.m_initPlayer();
this.initHud();
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
				//console.log(this.selectedToyArray[i].score);
				this.selectedToyArray[i].parent.removeChild(this.selectedToyArray[i]);
				this.selectedToyArray.splice(i,1);
				if (this.selectedToyArray[i].looseOneLife == true){
					this.looseLife();
				} else {
					this.getPoints(this.selectedToyArray[i].score);
				}
			}
		} else {
			this.stage.removeChild(this.selectedToyArray[i]);
			this.selectedToyArray.splice(i,1);
		}
	}

/**
 * Kontroller för styrning
 */
	if (this.keyboard.pressed("right"))
	{
	this.m_player.x += 5;
	this.m_player.flippedX = false;
	this.m_player.animations.gotoAndPlay("walk");
	}
	else if(this.keyboard.pressed("left")) {
	this.m_player.x -= 5;
	this.m_player.flippedX = true;
	this.m_player.animations.gotoAndPlay("walk");
			  }
	else {
	this.m_player.animations.gotoAndPlay("idle");	
	}
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
	92,
	60,
	"",
	"baby_sprite"
	);

	this.m_player.hitbox.set(5,5,60,50);

	this.m_player.animations.add("idle", [0], 6, true);
	this.m_player.animations.add("walk", [1,2,3,4,5], 8, true);
	this.m_player.animations.gotoAndPlay("walk");
	//finns även animations.stop
	this.stage.addChild(this.m_player);
};

/**
 * Skapar nya instanser av leksaker och sparar i array samt lägger ut på scen
 */
	joller.scene.Game.prototype.addToy = function(){
		var toys = [joller.entity.Horse, joller.entity.Kloss, joller.entity.Drop];
		var toy = new toys[rune.util.Math.randomInt(0,2)]();
		toy.x = rune.util.Math.random(0,1232);
		this.selectedToyArray.push(toy);
		this.stage.addChild(toy);
	};

/**
 * Vid kollision med leksak erhålles poäng och HUD uppdateras
 */
joller.scene.Game.prototype.getPoints = function(scoreOfSelectedToy){
	this.totalScore += scoreOfSelectedToy;
	this.hud.updateScore(this.totalScore);
};

joller.scene.Game.prototype.looseLife = function(){
	this.lives -= 1;
	this.hud.updateLives(this.lives);
	//console.log(this.lives);
};
