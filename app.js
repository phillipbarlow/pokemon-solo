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
        console.log(`${this.name} used ${this.move}`)
        return this.attackDamage
    };
    hasFainted(){
        return this.health <= 0? true:false
    }
}

module.exports = {Pokemon}