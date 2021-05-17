 
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
 joller.entity.Umbrella = function() {
     this.powerUp = true;
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    joller.entity.Thing.call(this, "umbrella");
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
joller.entity.Umbrella.prototype = Object.create(joller.entity.Thing.prototype);
joller.entity.Umbrella.prototype.constructor = joller.entity.Umbrella;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
joller.entity.Umbrella.prototype.init = function() {
    joller.entity.Thing.prototype.init.call(this);
    this.score = 50;
    
};

/**
 * @inheritDoc
 */
joller.entity.Umbrella.prototype.update = function(step) {
    joller.entity.Thing.prototype.update.call(this, step);
};

/**
 * @inheritDoc
 */
joller.entity.Umbrella.prototype.dispose = function() {
    joller.entity.Thing.prototype.dispose.call(this);
};