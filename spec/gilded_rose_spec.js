describe("Gilded Rose", function() {

    describe("Shop", function() {

        var stdItem = new Item("foo", 10, 5);
        var expiredItem =  new Item("expiredItem", 0, 10);
        var zeroQualityItem = new Item("zeroQualityItem", 2, 0);
        var agedBrie1025 = new Item("Aged Brie", 10, 25);
        var agedBrie1050 = new Item("Aged Brie", 10, 50);
        var sulfuras = new Item("Sulfuras, Hand of Ragnaros", 10, 25);
        var passes1529 = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 29);
        var passes1030 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30);
        var passes0535 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 35);
        var passes0035 = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 35);
        var passes0250 = new Item("Backstage passes to a TAFKAL80ETC concert", 2, 50);
        var conjured = new Item("Conjured", 2, 10);

        const gilgedRose = new Shop(
            [stdItem,
             expiredItem,
             zeroQualityItem,
             agedBrie1025,
             agedBrie1050,
             sulfuras,
             passes1529, 
             passes1030,
             passes0535,
             passes0035,
             passes0250,
             conjured		    
            ]);

        const items = gilgedRose.updateQuality();

        describe("SellIn Value", function() {
            it("decreases for a standard item", function() {
                expect(stdItem.sellIn).toEqual(9);
            });
            it("decreases for Aged Brie", function() {
                expect(agedBrie1025.sellIn).toEqual(9);
            });
            it("decreases for Backstage Passes", function() {
                expect(passes1529.sellIn).toEqual(14);
            });
            it("decreases for Conjured Items", function() {
	        expect(conjured.sellIn).toEqual(1); 
	    });
            it("never changes for Sulfuras as it never has to be sold", function() {
                expect(sulfuras.sellIn).toEqual(10);
            });
        });

        describe("Quality Value", function() {
            describe("decreases", function() {
                it("by one for a standard item", function() {
                    expect(stdItem.quality).toEqual(4);
                });
                it("twice as fast when SellIn has passed", function() {
                    expect(expiredItem.quality).toEqual(8);
                });
                it("but never to a negative Quality value", function() {
                    expect(zeroQualityItem.quality).toEqual(0);
                });
                it("to zero for Backstage Passes after the concert", function() {
                    expect(passes0035.quality).toEqual(0);
                });
                it("twice as fast for Conjured Items", function() {
                    expect(conjured.quality).toEqual(8);
                });
            });

            describe("increases", function() {
                describe("Aged Brie", function() {
                    it("by one for Aged Brie", function() {
                       expect(agedBrie1025.quality).toEqual(26);
                    });
                    it("but never greater than 50", function() {
                        expect(agedBrie1050.quality).toEqual(50);
                    });
                });
                describe("Backstage Passes", function() {
                    it("by one for Backstage Passes where SellIn value is greater than 10 ", function() {
                        expect(passes1529.quality).toEqual(30);
                    });
                    it("by two for Backstage Passes where SellIn value is between 10 and 6 days", function() {
                        expect(passes1030.quality).toEqual(32);
                    });
                    it("by three for Backstage Passes where SellIn value is between 5 and 1 days", function() {
                        expect(passes0535.quality).toEqual(38);
                    });
                    it("but never greater than 50", function() {
	                expect(passes0250.quality).toEqual(50);
		    });
                 });
            });

            describe("remains the same", function() {
                it("for Sulfuras", function() {
                    expect(sulfuras.quality).toEqual(25);
                });
            });

        });
    });
});

