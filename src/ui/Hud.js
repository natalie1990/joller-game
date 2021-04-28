
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
 joller.ui.Hud = function() {
    this.score = 0;
    this.lives = 3;
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
     rune.display.DisplayObjectContainer.call(this, 0, 0, 1280, 100,"#000000");
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
    this.text = new rune.text.BitmapField("Joller!");
    this.text.autoSize = true;
    this.text.center = this.application.screen.center;

    this.addChild(this.text);
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