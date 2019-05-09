'use strict'

class GameObject {
    constructor(attributes) {
        Object.assign(this, attributes)
    }
    
    destroy() {
        return `${this.name} was removed from the game.`
    }
}

class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes)
        Object.assign(this, attributes)
    }

    takeDamage() {
        return `${this.name} took damage.`
    }
}

class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes)
        Object.assign(this, attributes)
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }

    takeDamage() {
        return `${this.name} took damage.`
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

const runLog = () => {
    // Today's date
    console.log(mage.createdAt)

    // { length: 1, width: 2, height: 4 }
    console.log(archer.dimensions)

     // 15
    console.log(swordsman.healthPoints)

    // Bruce
    console.log(mage.name)

    // The Round Table
    console.log(swordsman.team)

    // Staff of Shamalama
    console.log(mage.weapons)

    // Elvish
    console.log(archer.language)

    // Lilith offers a greeting in Elvish.
    console.log(archer.greet())

    // Bruce took damage.
    console.log(mage.takeDamage())

    // Sir Mustachio was removed from the game.
    console.log(swordsman.destroy())
}

runLog()