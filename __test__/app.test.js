const {Pokemon} = require('../app')

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