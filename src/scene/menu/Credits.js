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
joller.scene.Credits = function() {

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

joller.scene.Credits.prototype = Object.create(rune.scene.Scene.prototype);
joller.scene.Credits.prototype.constructor = joller.scene.Credits;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */ //Förbereder scenen
joller.scene.Credits.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);

	var backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
    this.stage.addChild(backroundImg);

    this.viewLogo();

    var nameText = new rune.text.BitmapField("");
    nameText.text = "Created by:\n" + "Natalie & Monika\n" + "Interaktiva medier och webbteknologier VT-21";
    nameText.x = 250;
    nameText.y = 400;
    nameText.autoSize = true;
    nameText.scaleX = 3.5;
    nameText.scaleY = 3.5;
    this.stage.addChild(nameText);

};

/**
 * @inheritDoc
 */
joller.scene.Credits.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

	if (this.keyboard.justPressed("space")){
		this.application.scenes.load([new joller.scene.Menu()]);
	}
};

/**
 * @inheritDoc
 */
joller.scene.Credits.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

joller.scene.Credits.prototype.viewLogo = function(){
    var logo = new rune.display.Graphic(400,180,750,200,"","logo");
    logo.scaleX = 0.6;
    logo.scaleY = 0.6;
    this.stage.addChild(logo);
};