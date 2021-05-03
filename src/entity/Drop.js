 
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
 joller.entity.Drop = function() {
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    joller.entity.Thing.call(this, "droppe");
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
joller.entity.Drop.prototype = Object.create(joller.entity.Thing.prototype);
joller.entity.Drop.prototype.constructor = joller.entity.Drop;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
joller.entity.Drop.prototype.init = function() {
    joller.entity.Thing.prototype.init.call(this);
    this.looseOneLife = true;
    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.entity.Drop.prototype.update = function(step) {
    joller.entity.Thing.prototype.update.call(this, step);



    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.entity.Drop.prototype.dispose = function() {
    joller.entity.Thing.prototype.dispose.call(this);
    //@TODO: Write app code.
};