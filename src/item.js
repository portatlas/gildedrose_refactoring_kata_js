const MAX_QUAL_VAL = 50;

class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

Item.prototype.increaseQuality = function(amount) {
    if (this.quality < MAX_QUAL_VAL) {
        this.quality = this.quality + amount;
    }
}

Item.prototype.decreaseQuality = function(amount) {
    if (this.quality > 0) {
        this.quality = this.quality - amount;
    }
}

Item.prototype.decreaseSellIn = function() {
    this.sellIn--;
}

