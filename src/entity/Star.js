 
//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------
/**
 * Creates a new object.
 *
 * @constructor
 * @extends joller.entity.Thing
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
 joller.entity.Star = function() {
     this.blink = true;
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    joller.entity.Thing.call(this, "star_40x40");
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
joller.entity.Star.prototype = Object.create(joller.entity.Thing.prototype);
joller.entity.Star.prototype.constructor = joller.entity.Star;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
joller.entity.Star.prototype.init = function() {
    joller.entity.Thing.prototype.init.call(this);
    this.score = 50;
    
};

/**
 * @inheritDoc
 */
joller.entity.Star.prototype.update = function(step) {
    joller.entity.Thing.prototype.update.call(this, step);
};

/**
 * @inheritDoc
 */
joller.entity.Star.prototype.dispose = function() {
    joller.entity.Thing.prototype.dispose.call(this);
};