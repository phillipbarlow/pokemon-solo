class Pokemon{
    constructor(name, attackDamage){
        this.name = name;
        this.health =  100;
        this.attackDamage = attackDamage
        this.move = 'tackle'
    };
    takeDamage(attackValue){
        this.health -= attackValue
    };
    useMove(){
        // console.log(`${this.name} used ${this.move}`)
        return this.attackDamage
    };
    hasFainted(){
        return this.health <= 0? true:false
    }
}

class Fire extends Pokemon{
    constructor(name, attackDamage){
        super(name, attackDamage)
        this.type = 'fire'
    };
    isEffectiveAgainst(name){
        this.isStrongAgainst = 'grass'

    }
}
class Grass extends Pokemon{
    constructor(name, attackDamage){
        super(name, attackDamage)
        this.type = 'grass'
    };
    isEffectiveAgainst(name){
        this.isStrongAgainst = 'water'

    }
}
class Water extends Pokemon{
    constructor(name, attackDamage){
        super(name, attackDamage)
        this.type = 'water'
    };
    isEffectiveAgainst(name){
        this.isStrongAgainst = 'fire'

    }
}
class Normal extends Pokemon{
    constructor(name, attackDamage){
        super(name, attackDamage)
        this.type = 'normal'
    };
    isEffectiveAgainst(name){

    }
}

module.exports = {Pokemon,Fire,Grass,Water,Normal}