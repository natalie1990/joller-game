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
joller.scene.Menu = function(music) {
    this.music = music;
    this.selectedIndex = 0;
    this.options = [];
    this.playBtn = null;
    this.hiscoreBtn = null;
    this.rulesBtn = null;
    this.creditsBtn = null;
    this.arrow = new rune.display.Graphic(500,346,600,100,"","arrow");
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

joller.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
joller.scene.Menu.prototype.constructor = joller.scene.Menu;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */ //Förbereder scenen
joller.scene.Menu.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);

    this.options.push("A","B","C","D");

	var backroundImg = new rune.display.Graphic(0,0,1280,720,"","background");
    this.stage.addChild(backroundImg);

    if (this.music == null) {
        this.application.sounds.music.volume = 0.1;
        this.music = this.application.sounds.music.get("bgmusic");
        //this.music.play();
    }

    this.viewLogo();

    this.showBtns();

    this.stage.addChild(this.arrow);

};

/**
 * @inheritDoc
 */
joller.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

    if (this.keyboard.justPressed("up")){
        this.selectedIndex--;
        if (this.selectedIndex < 0) {
            this.selectedIndex = this.options.length - 1;
        }
        switch(this.options[this.selectedIndex]) {
            case "B":
                this.arrow.x = 450;
                this.arrow.y = 416;
              break;
            case "C":
                this.arrow.x = 485;
                this.arrow.y = 488;
                break;
            case "D":
                this.arrow.x = 460;
                this.arrow.y = 553;
                break;
            default:
                this.arrow.x = 501;
                this.arrow.y = 346;
          }
        //console.log(this.options[this.selectedIndex]);
    } else if (this.keyboard.justPressed("down")) {
        this.selectedIndex++;
        if (this.selectedIndex >= this.options.length){
            this.selectedIndex = 0;
        }
        switch(this.options[this.selectedIndex]) {
            case "B":
                this.arrow.x = 450;
                this.arrow.y = 416;
              break;
            case "C":
                this.arrow.x = 485;
                this.arrow.y = 488;
                break;
            case "D":
                this.arrow.x = 460;
                this.arrow.y = 553;
                break;
            default:
                this.arrow.x = 501;
                this.arrow.y = 346;
          }
    }

	if (this.keyboard.justPressed("space")){

        if (this.options[this.selectedIndex] == "A"){
            console.log(this.music);
            this.music.stop();
            this.application.scenes.load([new joller.scene.Game()]);
        }
        else if (this.options[this.selectedIndex] == "B"){
            this.application.scenes.load([new joller.scene.Hiscore(this.music)]);
        }
        else if (this.options[this.selectedIndex] == "C"){
            this.application.scenes.load([new joller.scene.Rules(this.music)]);
        }
        else if (this.options[this.selectedIndex] == "D"){
            this.application.scenes.load([new joller.scene.Credits(this.music)]);
        }
	}
};

/**
 * @inheritDoc
 */
joller.scene.Menu.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

joller.scene.Menu.prototype.viewLogo = function(){
    var logo = new rune.display.Graphic(300,120,800,200,"","logo");
    logo.scaleX = 0.9;
    logo.scaleY = 0.9;
    logo.flicker(1500,200);
    this.stage.addChild(logo);
};

joller.scene.Menu.prototype.showBtns = function(){
    this.playBtn = new rune.display.Graphic(540,340,600,100,"","play");
    this.stage.addChild(this.playBtn);
    this.hiscoreBtn = new rune.display.Graphic(490,410,600,100,"","hiscore");
    this.stage.addChild(this.hiscoreBtn);
    this.rulesBtn = new rune.display.Graphic(525,480,600,100,"","rules");
    this.stage.addChild(this.rulesBtn);
    this.creditsBtn = new rune.display.Graphic(500,545,600,100,"","credits");
    this.stage.addChild(this.creditsBtn);
};