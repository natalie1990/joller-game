//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * ...
 *
 * @constructor
 * 
 * @class
 * @classdesc
 * 
 * ...
 */
 joller.system.Main = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
   
	
    /**
     * ...
     */
    rune.system.Main.call(this, {
        id: "com.vectorpanic.template",
        name: "joller",
        scene: joller.scene.Menu,
        resources: joller.data.Resources,
		useKeyboard: true,
		debug: true,
        screenResolutionX: 1280,
        screenResolutionY: 720,
        framerate: 30
    });
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

joller.system.Main.prototype = Object.create(rune.system.Main.prototype);
joller.system.Main.prototype.constructor = joller.system.Main;