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
    this.tweens = null;

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

    var cont = new rune.display.DisplayObjectContainer(100,150,1050,400,"#FFFFFF");
    cont.alpha = 0.4;
    this.stage.addChild(cont);

    var rulesHeader = new rune.display.Graphic(520,60,400,200,"","rules");
    rulesHeader.scaleX = 1.2;
    rulesHeader.scaleY = 1.2;
    this.stage.addChild(rulesHeader);


 /**
  * Your character
  */   
    var charText = new rune.text.BitmapField("Your\nCharacter","rules_font");
    charText.autoSize = true;
    charText.x = 140;
    charText.y = 190;
    this.stage.addChild(charText);

    this.initSprites();

/**
 * Kontroller
 */
    var kText = new rune.text.BitmapField("Use to move","rules_font");
    kText.autoSize = true;
    kText.x = 140;
    kText.y = 370;
    this.stage.addChild(kText);

    var kLeft = new rune.display.Graphic(170,410,55,50,"","tangent_left");
    this.stage.addChild(kLeft);

    var kRight = new rune.display.Graphic(240,410,55,50,"","tangent_right");
    this.stage.addChild(kRight);


/**
 * Leksaker
 */
    var catchText = new rune.text.BitmapField("Catch toys","rules_font");
    catchText.autoSize = true;
    catchText.x = 420;
    catchText.y = 190;
    this.stage.addChild(catchText);

    var car = new rune.display.Graphic(390,230,55,53,"","rules_car");
    this.stage.addChild(car);

    var bear = new rune.display.Graphic(450,230,55,53,"","rules_nalle");
    this.stage.addChild(bear);

    var anka = new rune.display.Graphic(510,230,55,53,"","rules_anka");
    this.stage.addChild(anka);

    var skallra = new rune.display.Graphic(570,230,55,53,"","rules_skallra");
    this.stage.addChild(skallra);


/**
 * Power ups
 */
     var power = new rune.text.BitmapField("Power Ups","rules_font");
     power.autoSize = true;
     power.x = 430;
     power.y = 340;
     this.stage.addChild(power);
 
     this.umbrella = new rune.display.Graphic(570,425,50,50,"","rules_paraply");
     this.stage.addChild(this.umbrella);

     var umbText = new rune.text.BitmapField("Immunity\n  10s","rules_font");
     umbText.autoSize = true;
     umbText.x = 520;
     umbText.y = 490;
     this.stage.addChild(umbText);

     this.star = new rune.display.Graphic(480,380,55,55,"","rules_star");
     this.star.flicker(Infinity,175);
     this.stage.addChild(this.star);

     var starText = new rune.text.BitmapField("50 p","rules_font");
     starText.autoSize = true;
     starText.x = 470;
     starText.y = 450;
     this.stage.addChild(starText);

     this.candy = new rune.display.Graphic(380,442,50,40,"","rules_karamell");
     this.stage.addChild(this.candy);

     var sugar = new rune.text.BitmapField("Sugar Rush\n   10s","rules_font");
     sugar.autoSize = true;
     sugar.x = 320;
     sugar.y = 490;
     this.stage.addChild(sugar);

     this.tweens = new rune.tween.Tweens();
     this.tweenIn();

/**
 * Badkar
*/
      var livesBath = new rune.text.BitmapField("Lives","rules_font");
      livesBath.autoSize = true;
      livesBath.x = 830;
      livesBath.y = 245;
      this.stage.addChild(livesBath);

     var bath1 = new rune.display.Graphic(670,285,170,60,"","rules_tub0");
     this.stage.addChild(bath1);

     var threeText = new rune.text.BitmapField("3","rules_font");
     threeText.autoSize = true;
     threeText.x = 707;
     threeText.y = 333;
     this.stage.addChild(threeText);

     var bath2 = new rune.display.Graphic(780,285,170,60,"","rules_tub1");
     this.stage.addChild(bath2);

     var twoText = new rune.text.BitmapField("2","rules_font");
     twoText.autoSize = true;
     twoText.x = 820;
     twoText.y = 333;
     this.stage.addChild(twoText);

     var bath3 = new rune.display.Graphic(890,285,170,60,"","rules_tub2");
     this.stage.addChild(bath3);

     var oneText = new rune.text.BitmapField("1","rules_font");
     oneText.autoSize = true;
     oneText.x = 933;
     oneText.y = 333;
     this.stage.addChild(oneText);

     var bath4 = new rune.display.Graphic(1000,285,170,60,"","rules_tub3");
     this.stage.addChild(bath4);

     var zeroText = new rune.text.BitmapField("0","rules_font");
     zeroText.autoSize = true;
     zeroText.x = 1040;
     zeroText.y = 333;
     this.stage.addChild(zeroText);

/**
 * Droppar
 */
    var wOut = new rune.text.BitmapField(" Watch\nout for","rules_font");
    wOut.autoSize = true;
    wOut.x = 730;
    wOut.y = 402;
    this.stage.addChild(wOut);

    var drop1 = new rune.display.Graphic(780,460,40,52,"","rules_droppe");
    this.stage.addChild(drop1);

    var drop2 = new rune.display.Graphic(740,460,40,52,"","rules_droppe");
    this.stage.addChild(drop2);

    var drop3 = new rune.display.Graphic(820,460,40,52,"","rules_droppe");
    this.stage.addChild(drop3);

    var goText = new rune.text.BitmapField("Game Over","rules_font");
    goText.autoSize = true;
    goText.x = 940;
    goText.y = 380;
    this.stage.addChild(goText);

/**
 * Mute / unmute
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
 * Tillbaka-knapp
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
	153,
	250,
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

    joller.scene.Rules.prototype.tweenIn = function() {
        this.tweens.add(this.candy,{
            scaleX: 0.8,
            scaleY: 0.8,
            duration: 500,
            oncomplete: this.tweenOut,
            scope: this
        });
    };
    
    joller.scene.Rules.prototype.tweenOut = function() {
        this.tweens.add(this.candy,{
            scaleX: 1.0,
            scaleY: 1.0,
            duration: 500,
            oncomplete: this.tweenIn,
            scope: this
        });
    };
    