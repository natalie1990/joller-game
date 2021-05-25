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
joller.scene.Hiscore = function(music) {
    this.music = music;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * ...
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

joller.scene.Hiscore.prototype = Object.create(rune.scene.Scene.prototype);
joller.scene.Hiscore.prototype.constructor = joller.scene.Hiscore;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */ //Förbereder scenen
joller.scene.Hiscore.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);

	var backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
    this.stage.addChild(backroundImg);

    this.viewLogo();

    var hiscoreHeader = new rune.display.Graphic(505,260,400,170,"","hiscore");
    this.stage.addChild(hiscoreHeader);

    var hiscoreArray = [];
    var first = this.application.highscores.get(0);
    hiscoreArray.push(first);
    var second = this.application.highscores.get(1);
    hiscoreArray.push(second);
    var third = this.application.highscores.get(2);
    hiscoreArray.push(third);
    var four = this.application.highscores.get(3);
    hiscoreArray.push(four);
    var five = this.application.highscores.get(4);
    hiscoreArray.push(five);

    var listText = new rune.text.BitmapField("","font2");
    var rowText = "";
    //Lägg in datum här sen med?
    for (var i=0; i<hiscoreArray.length; i++){
        rowText += ": " + hiscoreArray[i].name + "  " + hiscoreArray[i].score + "\n";
    }

    var numText = new rune.text.BitmapField("1\n2\n3\n4\n5","font2");
    numText.autoSize = true;
    numText.x = 500;
    numText.y = 350;
    this.stage.addChild(numText);

    listText.text = rowText;
    listText.autoSize = true;
    listText.x = 530;
    listText.y = 350;
    this.stage.addChild(listText);

    var arrow = new rune.display.Graphic(538,550,80,30,"","arrow");
    this.stage.addChild(arrow);

	var backBtn = new rune.display.Graphic(578,545,180,60,"","back");
    this.stage.addChild(backBtn);
};

/**
 * @inheritDoc
 */
joller.scene.Hiscore.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

	if (this.keyboard.justPressed("space")){
		this.application.scenes.load([new joller.scene.Menu(this.music)]);
	}
};

/**
 * @inheritDoc
 */
joller.scene.Hiscore.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

joller.scene.Hiscore.prototype.viewLogo = function(){
    var logo = new rune.display.Graphic(400,100,750,200,"","logo");
    logo.scaleX = 0.6;
    logo.scaleY = 0.6;
    this.stage.addChild(logo);
};