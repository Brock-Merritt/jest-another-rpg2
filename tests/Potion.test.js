const { TestWatcher } = require('@jest/core');
const Potion = require('../lib/potion');

test('creates a health potion object', () =>{
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0)
    expect(potion.value).toEqual(expect.any(Number));
});

