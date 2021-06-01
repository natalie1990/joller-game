 
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
 joller.entity.Candy = function() {
     this.tweens = null;
     this.isCandy = true;
     this.px = 0;
     this.py = 0;
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    joller.entity.Thing.call(this, "candy");
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
joller.entity.Candy.prototype = Object.create(joller.entity.Thing.prototype);
joller.entity.Candy.prototype.constructor = joller.entity.Candy;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
joller.entity.Candy.prototype.init = function() {
    joller.entity.Thing.prototype.init.call(this);
    this.score = 30;
    this.tweens = new rune.tween.Tweens();
    this.tweenIn();
    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.entity.Candy.prototype.update = function(step) {
    joller.entity.Thing.prototype.update.call(this, step);
    //console.log(step);
    this.tweens.update(step);

    //@TODO: Write app code.
};

/**
 * @inheritDoc
 */
joller.entity.Candy.prototype.dispose = function() {
    joller.entity.Thing.prototype.dispose.call(this);
    //@TODO: Write app code.
    //console.log("hej");
};

joller.entity.Candy.prototype.tweenIn = function() {
    this.tweens.add(this,{
        scaleX: 0.8,
        scaleY: 0.8,
        duration: 500,
        oncomplete: this.tweenOut,
        scope: this
    });
};

joller.entity.Candy.prototype.tweenOut = function() {
    this.tweens.add(this,{
        scaleX: 1.0,
        scaleY: 1.0,
        duration: 500,
        oncomplete: this.tweenIn,
        scope: this
    });
};
