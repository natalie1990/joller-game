// JavaScript Document//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Game state.
 */
joller.scene.Rules = function(music) {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    this.m_player = null;
    this.cryBaby = null;
    this.umbrella = null;
    this.star = null;
    this.candy = null;
    this.music = music;

    /**
     * ...
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

joller.scene.Rules.prototype = Object.create(rune.scene.Scene.prototype);
joller.scene.Rules.prototype.constructor = joller.scene.Rules;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */ //Förbereder scenen
joller.scene.Rules.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);

	var backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
    this.stage.addChild(backroundImg);

    //this.viewLogo();

    var cont = new rune.display.DisplayObjectContainer(100,150,1050,400,"#FFFFFF");
    cont.alpha = 0.4;
    this.stage.addChild(cont);

    var rulesHeader = new rune.display.Graphic(520,60,400,200,"","rules");
    rulesHeader.scaleX = 1.2;
    rulesHeader.scaleY = 1.2;
    this.stage.addChild(rulesHeader);


    var charText = new rune.text.BitmapField("Your\nCharacter","rules_font");
    charText.autoSize = true;
    charText.x = 140;
    charText.y = 270;
    this.stage.addChild(charText);
 
    var kText = new rune.text.BitmapField("Use to move","rules_font");
    kText.autoSize = true;
    kText.x = 160;
    kText.y = 460;
    this.stage.addChild(kText);

    var kLeft = new rune.display.Graphic(190,500,55,50,"","tangent_left");
    this.stage.addChild(kLeft);

    var kRight = new rune.display.Graphic(260,500,55,50,"","tangent_right");
    this.stage.addChild(kRight);

    this.initSprites();

    var catchText = new rune.text.BitmapField("Catch toys","rules_font");
    catchText.autoSize = true;
    catchText.x = 370;
    catchText.y = 190;
    this.stage.addChild(catchText);

    var car = new rune.display.Graphic(340,230,55,50,"","rules_car");
    this.stage.addChild(car);

    var bear = new rune.display.Graphic(400,230,55,50,"","rules_nalle");
    this.stage.addChild(bear);

    var anka = new rune.display.Graphic(460,230,55,50,"","rules_anka");
    this.stage.addChild(anka);

    var skallra = new rune.display.Graphic(520,230,55,50,"","rules_skallra");
    this.stage.addChild(skallra);


    /**
     * POWER UPS
     */

     var power = new rune.text.BitmapField("Power Ups","rules_font");
     power.autoSize = true;
     power.x = 460;
     power.y = 320;
     this.stage.addChild(power);
 
     this.umbrella = new rune.display.Graphic(430,360,50,50,"","rules_paraply");
     this.stage.addChild(this.umbrella);

     var umbText = new rune.text.BitmapField("Immunity\n  10 s","rules_font");
     umbText.autoSize = true;
     umbText.x = 400;
     umbText.y = 420;
     this.stage.addChild(umbText);

     this.star = new rune.display.Graphic(600,365,40,40,"","star_40x40");
     this.stage.addChild(this.star);

     var starText = new rune.text.BitmapField("50 p","rules_font");
     starText.autoSize = true;
     starText.x = 590;
     starText.y = 420;
     this.stage.addChild(starText);

     this.candy = new rune.display.Graphic(530,465,50,40,"","rules_karamell");
     this.stage.addChild(this.candy);

     var sugar = new rune.text.BitmapField("Sugar Rush 10 s","rules_font");
     sugar.autoSize = true;
     sugar.x = 430;
     sugar.y = 508;
     this.stage.addChild(sugar);



/**
 *
 * DROPPAR
 * 
 */
    var wOut = new rune.text.BitmapField(" Watch\nout for","rules_font");
    wOut.autoSize = true;
    wOut.x = 730;
    wOut.y = 400;
    this.stage.addChild(wOut);

    var drop1 = new rune.display.Graphic(790,440,40,40,"","droppe");
    drop1.scaleX = 1.3;
    drop1.scaleY = 1.3;
    this.stage.addChild(drop1);

    var drop2 = new rune.display.Graphic(750,440,40,40,"","droppe");
    drop2.scaleX = 1.3;
    drop2.scaleY = 1.3;
    this.stage.addChild(drop2);

    var drop3 = new rune.display.Graphic(830,440,40,40,"","droppe");
    drop3.scaleX = 1.3;
    drop3.scaleY = 1.3;
    this.stage.addChild(drop3);


/**
 * 
 * SOUND
 * 
 */

 var press = new rune.text.BitmapField("Press","rules_font");
 press.autoSize = true;
 press.x = 710;
 press.y = 190;
 this.stage.addChild(press);

 var keyM = new rune.display.Graphic(820,182,55,50,"","tangent_m");
 this.stage.addChild(keyM);

 var to = new rune.text.BitmapField("to","rules_font");
 to.autoSize = true;
 to.x = 880;
 to.y = 190;
 this.stage.addChild(to);

 var sOn = new rune.display.Graphic(940,182,55,50,"","sOn");
 this.stage.addChild(sOn);

 var andText = new rune.text.BitmapField("and","rules_font");
 andText.autoSize = true;
 andText.x = 1000;
 andText.y = 190;
 this.stage.addChild(andText);

 var sOff = new rune.display.Graphic(1070,182,55,50,"","sOff");
 this.stage.addChild(sOff);

/**
 * BACK BUTTON
 */
    var arrow = new rune.display.Graphic(525,575,80,30,"","arrow");
    this.stage.addChild(arrow);

	var backBtn = new rune.display.Graphic(565,570,180,60,"","back");
    this.stage.addChild(backBtn);

};

/**
 * @inheritDoc
 */
joller.scene.Rules.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

	if (this.keyboard.justPressed("space")){
		this.application.scenes.load([new joller.scene.Menu(this.music)]);
	}

    this.m_player.animations.gotoAndPlay("walk");

    this.umbrella.rotation += 5;
};

/**
 * @inheritDoc
 */
joller.scene.Rules.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

joller.scene.Rules.prototype.viewLogo = function(){
    var logo = new rune.display.Graphic(400,100,750,200,"","logo");
    logo.scaleX = 0.6;
    logo.scaleY = 0.6;
    this.stage.addChild(logo);
};

joller.scene.Rules.prototype.initSprites = function(){

	this.m_player = new rune.display.Sprite(
	150,
	330,
	90,
	70,
	"",
	"baby_sprite"
	);

	this.m_player.animations.add("walk", [1,2,3,4,5], 8, true);
    this.stage.addChild(this.m_player);

    this.cryBaby = new rune.display.Sprite(
		905,
		400,
		250,
		150,
		"",
		"rules_go_sprite"
		);

		this.cryBaby.animations.add("idle", [0,1,2,3,4], 6, true);
		this.cryBaby.animations.gotoAndPlay("idle");
		this.stage.addChild(this.cryBaby);

    };