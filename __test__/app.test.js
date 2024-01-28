const {Pokemon,Fire,Grass,Water,Normal} = require('../app')

describe('Pokemon', () => {
    test('Should return name property when instance is created', () => {
        const result = new Pokemon('pikachu')
        expect(result.name).toBe('pikachu')
    });
    test('HitPoints should return 100', () => {
        const result = new Pokemon('pikachu')
        expect(result.health).toBe(100)
    });
    test('AttackDamage should return 80', () => {
        const result = new Pokemon('pikachu',80)
        expect(result.attackDamage).toBe(80)
    });
    test('AttackDamage should return 80', () => {
        const result = new Pokemon('pikachu',80)
        expect(result.attackDamage).toBe(80)
    });
    test('Move should return tackle', () => {
        const result = new Pokemon('pikachu',80)
        expect(result.move).toBe('tackle')
    });
    test('takeDamage should return 95', () => {
        const result = new Pokemon('pikachu', 80);
        result.takeDamage(5)
        expect(result.health).toBe(95)
    });
    test('useMove should return pokemons attackDamage', () => {
        const result = new Pokemon('pikachu', 80)
        expect(result.useMove()).toBe(80)
    });
    test('hasFainted when pokemons health is reduced to 0 return true else false', () => {
        const result = new Pokemon('pikachu', 80);
        result.takeDamage(40)
        expect(result.hasFainted()).toBe(false)
        const result2 = new Pokemon('raichu', 60);
        result2.takeDamage(110);
        expect(result2.hasFainted()).toBe(true);
    })
});

describe('Fire class', () => {
    test('Name should return charmander', () => {
        const result = new Fire('charmander',40);
        expect(result.name).toBe('charmander')
    });
    test('isStrongAgainst should return true for grass', () => {
        const result = new Fire('charmander',40);
        const isGrass = result.isEffectiveAgainst('grass')
        const isFire = result.isEffectiveAgainst('fire')
        expect(isGrass).toBe(true)
        expect(isFire).toBe(false)
    });
    test('isWeakAgainst should return true for water', () => {
        const result = new Fire('charmander',40);
        const isWater = result.isWeakAgainst('water')
        expect(isWater).toBe(true)
    });
});
describe('Grass class', () => {
    test('Name should return charmander', () => {
        const result = new Grass('bulbasaur',40);
        expect(result.name).toBe('bulbasaur')
    });
    test('isStrongAgainst should return true for water', () => {
        const result = new Grass('bulbasaur',40);
        const isWater = result.isEffectiveAgainst('water')
        const isNormal = result.isEffectiveAgainst('normal')
        expect(isWater).toBe(true)
        expect(isNormal).toBe(false)
    });
    test('isWeakAgainst should return true for fire', () => {
        const result = new Grass('bulbasaur',40);
        const isFire = result.isWeakAgainst('fire')
        expect(isFire).toBe(true)
    });
});
describe('Water class', () => {
    test('Name should return charmander', () => {
        const result = new Water('squirtle',40);
        expect(result.name).toBe('squirtle');
    });
    test('isStrongAgainst should return true for fire', () => {
        const result = new Water('squirtle',40);
        const isGrass = result.isEffectiveAgainst('fire')
        const isWater = result.isEffectiveAgainst('water')
        expect(isGrass).toBe(true)
        expect(isWater).toBe(false)
    });
    test('isWeakAgainst should return true for grass', () => {
        const result = new Water('squirtle',40);
        const isGrass = result.isWeakAgainst('grass')
        expect(isGrass).toBe(true)
    });
});
describe('Normal class', () => {
    test('Name should return charmander', () => {
        const result = new Normal('Eevee',40);
        expect(result.name).toBe('Eevee')
    });
    test('isStrongAgainst should return false for fire and water', () => {
        const result = new Normal('Eevee', 30);
        const isFire = result.isEffectiveAgainst('fire');
        const isWater = result.isEffectiveAgainst('water')
        expect(isFire).toBe(false)
        expect(isWater).toBe(false)
    });
    test('isWeakAgainst should return false for water', () => {
        const result = new Normal('Eevee',40);
        const isWater = result.isWeakAgainst('water')
        expect(isWater).toBe(false)
    });
});