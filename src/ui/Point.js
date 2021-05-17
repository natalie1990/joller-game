 
//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------
/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.text.BitmapField
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
 joller.ui.Point = function() {
     this.tweens = null;
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    rune.text.BitmapField.call(this, "test");
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
joller.ui.Point.prototype = Object.create(rune.text.BitmapField.prototype);
joller.ui.Point.prototype.constructor = joller.ui.Point;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
joller.ui.Point.prototype.init = function() {
    rune.text.BitmapField.prototype.init.call(this);

    this.alpha = 1.0;

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
joller.ui.Point.prototype.update = function(step) {
    rune.text.BitmapField.prototype.update.call(this, step);

    this.tweens.update(step);

    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.ui.Point.prototype.dispose = function() {
    rune.text.BitmapField.prototype.dispose.call(this);
    //@TODO: Write app code.

};