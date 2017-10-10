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

