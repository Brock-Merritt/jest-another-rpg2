const Potion = require("./potion");

function Player(name = ''){
    this.name = name;

    this.health = Math.floor(Math.random()* 10 + 95);
    this.strength = Math.floor(Math.random()* 5 + 7);
    this.agility = Math.floor(Math.random()* 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

   Player.prototype.getStats = function() {
       return{
           potions: this.inventory.length,
           health: this.health,
           strength: this.strength,
           agility: this.agility
       };
   };
   Player.prototype.getInventory = function() {
       if (this.inventory.length){
           return this.inventory;
       }
       return false;
   };
   Player.prototype.getHealth = function(){
       return `${this.name}'s health is now ${this.health}'`;
   };
   Player.prototype.isAlive = function(){
       if (this.health === 0) {
           return false;
       }
       return true;
   };
   Player.prototype.reduceHealth = function(health){
       this.health -= health;

       if (this.health < 0) {
           this.health = 0;
       }
   };
   Player.prototype.getAttackValue = function(){
       const min = this.strength - 5;
       const manx = this.strength + 5;

       return Math.floor(Math.random() * (max-min) + min);
   };
};
test(" gets player's health value", () =>{
    const player = new Player('dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});
test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;
  
    player.reduceHealth(5);
  
    expect(player.health).toBe(oldHealth - 5);
  
    player.reduceHealth(99999);
  
    expect(player.health).toBe(0);
  });

module.exports = Player;