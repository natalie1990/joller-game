
//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 *
 * 
 * Represents a falling object (toys).
 */
joller.entity.FallingObj = function(x, name) {
    this.x = x;
    this.y = -40;
    this.width = 38;
    this.height = 38;
    this.name = name;
}

joller.entity.FallingObj.prototype.generateToySprite = function(){
   console.log(this.name);
    this.generatedToySprite = new rune.display.Sprite(
        this.x,
        this.y,
        this.width,
        this.height,
        "",
        this.name
    );
    return this.generatedToySprite;
;}
