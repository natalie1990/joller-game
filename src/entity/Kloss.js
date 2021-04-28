 
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
 joller.entity.Kloss = function() {
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    joller.entity.Thing.call(this, "toy_kloss");
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
joller.entity.Kloss.prototype = Object.create(joller.entity.Thing.prototype);
joller.entity.Kloss.prototype.constructor = joller.entity.Kloss;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
joller.entity.Kloss.prototype.init = function() {
    joller.entity.Thing.prototype.init.call(this);
    this.score = 20;
    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.entity.Kloss.prototype.update = function(step) {
    joller.entity.Thing.prototype.update.call(this, step);



    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.entity.Kloss.prototype.dispose = function() {
    joller.entity.Thing.prototype.dispose.call(this);
    //@TODO: Write app code.
    console.log("hej");
};