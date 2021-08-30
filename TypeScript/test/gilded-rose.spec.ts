import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('In Gilded Rose - ', function () {

    // it('should foo', function() {
    //     const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].name).to.equal('fixme');
    // });

    describe('a standard item "foo" - ', function() {

        it('should have its value Decreased by one after one day', function() {
            const gildedRose = new GildedRose([ new Item('foo', 10, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(9);
        });

        it('should have its value Decreased by 2 after one day once its sellIn date is 0 or lower', function() {
            const gildedRose = new GildedRose([ new Item('foo', 0, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(8);
        });

        it('shouldn t have its value decreased bellow 0', function() {
            const gildedRose = new GildedRose([ 
                new Item('foo', 10, 0),
                new Item('foo', 0, 0) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
            expect(items[1].quality).to.equal(0);
        })
    })


    describe('"Aged Brie" - ', function() {
        it('should have its value increased by one after one day', function() {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(11);
        })

        it('should have its value increased by 2 after one day even after sellIn date', function() {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(12);
        })

        it('The Quality of an item is never more than 50', function() {
            const gildedRose = new GildedRose([ 
                new Item('Aged Brie', 10, 50),
                new Item('Aged Brie', 0, 50) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(50);
            expect(items[1].quality).to.equal(50);
        })
    })


    describe('"Sulfuras"', function() {
        it('never has to be sold or decreases in Quality', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(10);
        })
    })

    describe('Conjured items', function() {
        
        it('should have its value Decreased by 2 after one day', function() {
            const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 10, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(8);
        });

        it('should have its value Decreased by 4 after one day once its sellIn date is 0 or lower', function() {
            const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 0, 10) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(6);
        });
    })

});

