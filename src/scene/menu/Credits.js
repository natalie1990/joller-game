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
joller.scene.Credits = function(music) {
    this.music = music; // Bakgrundsmusiken
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

    var creditsHeader = new rune.display.Graphic(505,260,400,200,"","credits");
    this.stage.addChild(creditsHeader);

    var natText = new rune.text.BitmapField("Natalie Silva-Kihlen","font");
    natText.autoSize = true;
    natText.x = 380;
    natText.y = 350;
    //natText.scaleX = 0.6;
    //natText.scaleY = 0.6;
    this.stage.addChild(natText);

    var monText = new rune.text.BitmapField("Monika Carmvall","font");
    monText.autoSize = true;
    monText.x = 430;
    monText.y = 412;
    this.stage.addChild(monText);

    var proText = new rune.text.BitmapField("IMWT VT-21","font");
    proText.autoSize = true;
    proText.x = 490;
    proText.y = 475;
    this.stage.addChild(proText);

    var arrow = new rune.display.Graphic(525,550,80,30,"","arrow");
    this.stage.addChild(arrow);

	var backBtn = new rune.display.Graphic(565,545,180,60,"","back");
    this.stage.addChild(backBtn);

};

/**
 * @inheritDoc
 */
joller.scene.Credits.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

	if (this.keyboard.justPressed("space")){
		this.application.scenes.load([new joller.scene.Menu(this.music)]);
	}
};

/**
 * @inheritDoc
 */
joller.scene.Credits.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

/**
 * Metod för att initera logotypen
 */
joller.scene.Credits.prototype.viewLogo = function(){
    var logo = new rune.display.Graphic(400,100,750,200,"","logo");
    logo.scaleX = 0.6;
    logo.scaleY = 0.6;
    this.stage.addChild(logo);
};