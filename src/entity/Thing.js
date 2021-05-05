 
//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------
/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.display.Sprite
 *
 * @param {number} [x=0] ...
 * @param {number} [y=0] ...
 * @param {number} [width=0] ...
 * @param {number} [height=0] ...
 * @param {number} [fillColor=""] ...
 * @param {string} [texture] ...
 *
 * @class
 * @classdesc
 *
 * ...
 */
joller.entity.Thing = function(texture) {
    this.score = 0;

    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    rune.display.Sprite.call(this, 0, 0, 38, 38, "",texture);
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
joller.entity.Thing.prototype = Object.create(rune.display.Sprite.prototype);
joller.entity.Thing.prototype.constructor = joller.entity.Thing;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
joller.entity.Thing.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);

    if (this.blink){
        this.flicker(Infinity,175);
    }
};

/**
 * @inheritDoc
 */
joller.entity.Thing.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);

        this.y += 3;

};

/**
 * @inheritDoc
 */
joller.entity.Thing.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};