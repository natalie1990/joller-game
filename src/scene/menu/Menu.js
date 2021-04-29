// JavaScript Document//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Game state.
 */
joller.scene.Menu = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * ...
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

joller.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
joller.scene.Menu.prototype.constructor = joller.scene.Menu;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */ //Förbereder scenen
joller.scene.Menu.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    
	var backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
    this.stage.addChild(backroundImg);

    var logo = new rune.display.Graphic(300,280,800,200,"","logo");
    logo.scaleX = 0.9;
    logo.scaleY = 0.9;
    logo.flicker(1500,200);
    this.stage.addChild(logo);

};

/**
 * @inheritDoc
 */
joller.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
	if (this.keyboard.justPressed("space")){
		this.application.scenes.load([new joller.scene.Game()]);
	}
};

/**
 * @inheritDoc
 */
joller.scene.Menu.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};
