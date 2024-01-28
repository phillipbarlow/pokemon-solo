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
        return this.attackDamage
    };
    hasFainted(){
        return this.health <= 0? true:false
    }
    isEffectiveAgainst(pokemon){
        const isEffective = {
            fire:{
                grass:true,
                water:false,
                fire:false,
                normal:false
            },
            grass:{
                grass: false,
                water: true,
                fire: false,
                normal: false
            },
            water:{
                grass: false,
                water: false,
                fire: true,
                normal: false
            },
            normal:{
                grass:false,
                water:false,
                fire:false,
                normal:false
            }
        }
        if(isEffective[this.type]){return isEffective[this.type][pokemon]}
    };
    isWeakAgainst(pokemon){
        const isWeak = {
            fire:{
                grass:false,
                water:true,
                fire:false,
                normal:false
            },
            grass:{
                grass: false,
                water: true,
                fire: true,
                normal: false
            },
            water:{
                grass: true,
                water: false,
                fire: false,
                normal: false
            },
            normal:{
                grass:false,
                water:false,
                fire:false,
                normal:false
            }
        }
        if(isWeak[this.type]){return isWeak[this.type][pokemon]}
    };isWeak
};

class Fire extends Pokemon{
    constructor(name, attackDamage){
        super(name, attackDamage)
        this.type = 'fire'
    };
}
class Grass extends Pokemon{
    constructor(name, attackDamage){
        super(name, attackDamage)
        this.type = 'grass'
    };
}
class Water extends Pokemon{
    constructor(name, attackDamage){
        super(name, attackDamage)
        this.type = 'water'
    };
}
class Normal extends Pokemon{
    constructor(name, attackDamage){
        super(name, attackDamage)
        this.type = 'normal'
    };
}

module.exports = {Pokemon,Fire,Grass,Water,Normal}