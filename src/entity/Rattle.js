 
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
 joller.entity.Rattle = function() {
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    joller.entity.Thing.call(this, "toy_skallra");
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
joller.entity.Rattle.prototype = Object.create(joller.entity.Thing.prototype);
joller.entity.Rattle.prototype.constructor = joller.entity.Rattle;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
joller.entity.Rattle.prototype.init = function() {
    joller.entity.Thing.prototype.init.call(this);
    this.score = 10;
    this.isNormalToy = true;
    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.entity.Rattle.prototype.update = function(step) {
    joller.entity.Thing.prototype.update.call(this, step);



    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.entity.Rattle.prototype.dispose = function() {
    joller.entity.Thing.prototype.dispose.call(this);
    //@TODO: Write app code.

};