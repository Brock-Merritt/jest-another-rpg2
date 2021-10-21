const Potion = require('../lib/potion');

jest.mock('../lib/potion');

console.log(new Potion());


const Player = require('../lib/player');

test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
    this.inventory = [new Potion('health'), new Potion()];
  });

  test("gets players stats as an object", () =>{
      const player = new Player('dave');

      expect(player.getStats()).toHaveProperty('potions');
      expect(player.getStats()).toHaveProperty('health');
      expect(player.getStats()).toHaveProperty('strength');
      expect(player.getStats()).toHaveProperty('agility');
  });

  test('gets invtory from player or returns flase',()=>{
    const player = new Player('dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
  });
  
  test('checks if player is alive or not', () =>{
      const player = new Player('dave');

      expect(player.isAlive()).toBeTruthy();

      player.health = 0;

      expect(player.isAlive()).toBeFalsy();
  });


