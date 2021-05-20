
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
 joller.ui.Hud = function(totalScore,lives) {
    this.score = totalScore;
    this.lives = lives;
    this.pointsText = null;
    this.livesText = null;
    this.bathtub = null;
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
    //this.addChild(hudCont);

    var logo = new rune.display.Graphic(100,30,750,200,"","logo_small");
    this.addChild(logo);

    this.pointsText = new rune.text.BitmapField("","font_1");

    if (this.score == null) {
        this.pointsText.text = "Score\n  0";
    } else {
        this.pointsText.text = "Score\n  " + this.score;
    }
    this.pointsText.autoSize = true;
    this.pointsText.x = 500;
    this.pointsText.y = 20;
    this.addChild(this.pointsText);

    this.livesText = new rune.text.BitmapField("Lives\n  " + this.lives,"font_1");
    this.livesText.autoSize = true;
    this.livesText.x = 750;
    this.livesText.y = 20;
    this.addChild(this.livesText);

    this.bathtub = new rune.display.Graphic(920,30,170,60,"","tub3");
    this.addChild(this.bathtub);
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
    this.pointsText = new rune.text.BitmapField("","font_1");
    this.pointsText.text = "Score\n  " + newScore;
    this.pointsText.autoSize = true;
    this.pointsText.x = 500;
    this.pointsText.y = 20;
    this.addChild(this.pointsText);
};

joller.ui.Hud.prototype.updateLives = function(newLives){
    this.removeChild(this.livesText);
    this.removeChild(this.bathtub);

    switch(newLives) {
        case 2:
            this.bathtub = new rune.display.Graphic(870,30,170,60,"","tub2");
          break;
        case 1:
            this.bathtub = new rune.display.Graphic(870,30,170,60,"","tub1");
            break;
        case 0:
            this.bathtub = new rune.display.Graphic(870,30,170,60,"","tub0");
            break;
        default:
            this.bathtub = new rune.display.Graphic(870,30,170,60,"","tub3");
      }
    this.addChild(this.bathtub);
    this.livesText = new rune.text.BitmapField("Lives\n  " + newLives,"font_1");
    this.livesText.autoSize = true;
    this.livesText.x = 700;
    this.livesText.y = 20;
    this.addChild(this.livesText);
};