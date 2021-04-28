/**
 * Constructor
 * Ärver från rune.scene.Scene
 * Game state.
 */
 joller.scene.Game = function() {
	
	this.m_player = null; //Avatar - bebis
	this.placeToy = null; //Objekt för fallande objekt/leksak
	this.hud = null; //Objekt för HUD
    this.toy = null;


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

this.cameras.getCamera(0).debug = true;

const backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
//this.stage.addChild(backroundImg);

this.timers.create({
	duration: 3000,
	onTick: this.addToy,
	repeat: Infinity,
	scope: this
});

this.cameras.getCamera(0).debug = true;

this.m_initPlayer();
this.initHud();

this.generateToy();

};




/**
 * UPDATE
 * 
 * Det mesta styrs utifrån update 
 */
joller.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);


	if (this.placeToy){
		this.placeToy.y += 3;
	}


	if (this.m_player.hitTestObject(this.placeToy)){
	this.looseLife();
	}


	if (this.keyboard.pressed("right"))
	{
	this.m_player.x += 5;
	this.m_player.flippedX = false;
	//x-värdet flyttas med 5
	this.m_player.animations.gotoAndPlay("walk");
	}
	else if(this.keyboard.pressed("left")) {
	this.m_player.x -= 5;
	this.m_player.flippedX = true;
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
	
	this.m_player.dispose();
	this.m_player = null;
	
    rune.scene.Scene.prototype.dispose.call(this);
};

/**
 * Initierar HUD
 * FRÅGA - Varför syns den ej?
 */
joller.scene.Game.prototype.initHud = function(){
	this.hud = new joller.ui.Hud();
		this.stage.addChild(this.hud);
};

/**
 * prototype m_initPlayer
 * Skapar avataren - bebisen
 */

joller.scene.Game.prototype.m_initPlayer = function(){
	this.m_player = new rune.display.Sprite(
	160,
	600,
	92,
	60,
	"",
	"baby2"
	);

	this.m_player.hitbox.set(5,5,60,50);

	this.m_player.animations.add("idle", [0], 6, true);
	this.m_player.animations.add("walk", [1,2,3,4,5], 8, true);
	this.m_player.animations.gotoAndPlay("walk");
	//finns även animations.stop
	this.stage.addChild(this.m_player);
};



joller.scene.Game.prototype.generateToy = function(){
		// Slumpar fram en x-koordinat
			var randX = rune.util.Math.random(0, 1280);

			//Slumpar fram leksak ur array
			var toyArray = ["skallra","horse","kloss"];
			var randName = toyArray[Math.floor(Math.random()*toyArray.length)];
			var toyName = "toy_" + randName;
		
			//Skapar ett nytt FallingObj-objekt (leksak)
			this.toy = new joller.entity.FallingObj(randX,toyName);
			this.placeToy = this.toy.generateToySprite();
			this.stage.addChild(this.placeToy);
	};

	joller.scene.Game.prototype.addToy = function(){
		var toys = [joller.entity.Horse, joller.entity.Kloss];
		var toy = new toys[rune.util.Math.randomInt(0,1)]();
		toy.x = rune.util.Math.random(0,1232);
		this.stage.addChild(toy);
		//console.log(toy.score);
	};

joller.scene.Game.prototype.looseLife = function(){
	this.text = new rune.text.BitmapField("You died!");
    this.text.autoSize = true;
    this.text.center = this.application.screen.center;
	this.stage.addChild(this.text);
};
