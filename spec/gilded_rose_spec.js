describe("Gilded Rose", function() {

    describe("Item", function() {

        var testItem = new Item("Item Name", 10, 5);

        it("has a Name", function() {
            expect(testItem.name).toEqual("Item Name");
        });
        it("has a SellIn value", function() {
            expect(testItem.sellIn).toEqual(10);
        });
        it("has a Quality value", function() {
            expect(testItem.quality).toEqual(5);
        });
    });

    describe("Shop", function() {
        const gilgedRose = new Shop(
            [new Item("foo", 10, 5),
             new Item("expiredItem", 0, 10),
             new Item("zeroQualityItem", 2, 0),
             new Item("Aged Brie", 10, 25),
             new Item("Aged Brie", 10, 50),
             new Item("Sulfuras, Hand of Ragnaros", 10, 25),
             new Item("Backstage passes to a TAFKAL80ETC concert", 15, 29),
             new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30),
             new Item("Backstage passes to a TAFKAL80ETC concert", 5, 35),
             new Item("Backstage passes to a TAFKAL80ETC concert", 0, 35),
             new Item("Backstage passes to a TAFKAL80ETC concert", 2, 50)
            ]);

        const items = gilgedRose.updateQuality();

        describe("SellIn Value", function() {
            it("decreases for a standard item", function() {
                expect(items[0].sellIn).toEqual(9);
            });
            it("never changes for Sulfuras as it never has to be sold", function(){
                expect(items[5].sellIn).toEqual(10);
            });
        });

        describe("Quality Value", function() {
            describe("decreases", function() {
                it("by one for a standard item", function() {
                    expect(items[0].quality).toEqual(4);
                });
                it("twice as fast when SellIn has passed", function() {
                    expect(items[1].quality).toEqual(8);
                });
                it("but never to a negative Quality value", function() {
                    expect(items[2].quality).toEqual(0);
                });
                it("to zero for Backstage Passes after the concert", function() {
                    expect(items[9].quality).toEqual(0);
                });
            });

            describe("increases", function() {
                describe("Aged Brie", function() {
                    it("by one for Aged Brie", function() {
                       expect(items[3].quality).toEqual(26);
                    });
                    it("but never greater than 50", function() {
                        expect(items[4].quality).toEqual(50);
                    });
                });
                describe("Backstage Passes", function() {
                    it("by one for Backstage Passes where SellIn value is greater than 10 ", function() {
                        expect(items[6].quality).toEqual(30);
                    });
                    it("by two for Backstage Passes where SellIn value is between 10 and 6 days", function() {
                        expect(items[7].quality).toEqual(32);
                    });
                    it("by three for Backstage Passes where SellIn value is between 5 and 1 days", function() {
                        expect(items[8].quality).toEqual(38);
                    });
                    it("but never greater than 50", function() {
		        expect(items[10].quality).toEqual(50); 
		    });
                 });
            });

            describe("remains the same", function(){
                it("for Sulfuras", function(){
                    expect(items[5].quality).toEqual(25);
                });
            });
        });
    });
});
