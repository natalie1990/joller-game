 
//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------
/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.display.Graphic
 *
 * @param {number} [x=0] ...
 * @param {number} [y=0] ...
 * @param {number} [width=0] ...
 * @param {number} [height=0] ...
 * @param {number} [fillColor=""] ...
 * @param {string} [texture] ...
 *
 * @class
 * @classdesc Handles the text-tween for score of the toy
 *
 * ...
 */
 joller.ui.Bubble = function() {
     this.tweens = null;
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    rune.display.Graphic.call(this, 300,300,50,50,"","bubble1");
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
joller.ui.Bubble.prototype = Object.create(rune.display.Graphic.prototype);
joller.ui.Bubble.prototype.constructor = joller.ui.Bubble;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
joller.ui.Bubble.prototype.init = function() {
    rune.display.Graphic.prototype.init.call(this);

    this.tweens = new rune.tween.Tweens();
    this.tweens.add(this,{
        duration: 2000,
        alpha: 0,
        y: this.y - 20,
        scope: this
    });
    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.ui.Bubble.prototype.update = function(step) {
    rune.display.Graphic.prototype.update.call(this, step);

    this.tweens.update(step);

    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.ui.Bubble.prototype.dispose = function() {
    rune.display.Graphic.prototype.dispose.call(this);
    //@TODO: Write app code.

};