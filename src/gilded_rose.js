class Shop {

    constructor(items=[]) {
        this.items = items;
    }

    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
                null;
            } else if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
                updateBackstagePasses(this.items[i]);
            } else if (this.items[i].name == "Aged Brie") {
                updateAgedBrie(this.items[i]);
            } else if (this.items[i].name == "Conjured") {
                updateConjured(this.items[i]);
            } else {
                updateStdItem(this.items[i]);
            }
            decreaseQualityExpiredItem(this.items[i]);
        }
        return this.items;
    }
}

function updateStdItem(item) {
    item.decreaseQuality(1);
    item.decreaseSellIn();
}

function updateAgedBrie(item) {
    item.increaseQuality(1);
    item.decreaseSellIn();
}

function updateConjured(item) {
    item.decreaseQuality(2);
    item.decreaseSellIn();
}

function updateBackstagePasses(item) {
    if (item.sellIn > 10) {
        item.increaseQuality(1);
    } else if (item.sellIn <= 10 && item.sellIn > 5) {
        item.increaseQuality(2);
    } else if (item.sellIn <= 5 && item.sellIn > 0) {
        item.increaseQuality(3);
    } else if (item.sellIn < 1) {
      item.quality = 0;
    }
    item.decreaseSellIn();
}

function decreaseQualityExpiredItem (item) {
    if (item.sellIn < 0) {
        item.decreaseQuality(1);
    }
}

