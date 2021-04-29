
//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------
/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.display.DisplayObjectContainer
 *
 * @param {number} [x=0] ...
 * @param {number} [y=0] ...
 * @param {number} [width=0] ...
 * @param {number} [height=0] ...
 * @param {number} [fillColor=""] ...
 *
 * @class
 * @classdesc
 *
 * ...
 */
 joller.ui.Hud = function(totalScore) {
    this.score = totalScore;
    this.lives = 3;
    this.pointsText = null;
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
     rune.display.DisplayObjectContainer.call(this, 0, 0, 1280, 100,"");
    };
    
    //------------------------------------------------------------------------------
    // Inheritance
    //------------------------------------------------------------------------------
    
    joller.ui.Hud.prototype = Object.create(rune.display.DisplayObjectContainer.prototype);
    joller.ui.Hud.prototype.constructor = joller.ui.Hud;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
joller.ui.Hud.prototype.init = function() {
    rune.display.DisplayObjectContainer.prototype.init.call(this);

    var hudCont = new rune.display.DisplayObjectContainer(0,0,1280,100,"#FFFFFF");
    hudCont.alpha = 0.2;
    this.addChild(hudCont);

    var logo = new rune.display.Graphic(100,30,750,200,"","logo");
    logo.scaleX = 0.25;
    logo.scaleY = 0.25;
    this.addChild(logo);

    this.pointsText = new rune.text.BitmapField("");

    if (this.score == null) {
        this.pointsText.text = "Score:\n0";
    } else {
        this.pointsText.text = "Score:\n" + this.score;
    }
    this.pointsText.autoSize = true;
    this.pointsText.x = 500;
    this.pointsText.y = 20;
    this.pointsText.scaleX = 3;
    this.pointsText.scaleY = 3;
    this.addChild(this.pointsText);

};

/**
 * @inheritDoc
 */
joller.ui.Hud.prototype.update = function(step) {
    rune.display.DisplayObjectContainer.prototype.update.call(this, step);

};

/**
 * @inheritDoc
 */
joller.ui.Hud.prototype.dispose = function() {
    rune.display.DisplayObjectContainer.prototype.dispose.call(this);

};

joller.ui.Hud.prototype.updateScore = function(newScore){
    this.removeChild(this.pointsText);
    this.pointsText = new rune.text.BitmapField("");
    this.pointsText.text = "Score:\n" + newScore;
    this.pointsText.autoSize = true;
    this.pointsText.x = 500;
    this.pointsText.y = 20;
    this.pointsText.scaleX = 3;
    this.pointsText.scaleY = 3;
    this.addChild(this.pointsText);
};