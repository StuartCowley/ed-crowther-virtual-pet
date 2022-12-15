const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Dexter')).toBeInstanceOf(Object);
    });
});
describe('naming pet', () => {   
    it('sets the name property', () => {
        const pet = new Pet('Dexter');
        expect(pet.name).toEqual('Dexter');
    });
});
describe('initial age', () => {
    it('has a initial age of 0', () => {
        const pet = new Pet('Dexter');
        expect(pet.age).toEqual(0);
    });
});
describe('growUp', () => {
    it('increases the age by 1, increases hunger by 5 and dcreases fitness by 3', () => {
        const pet = new Pet('Dexter');
        pet.growUp();
        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet ('Dexter');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
});
describe('initial hunger', () => {
    it('has a initial hunger of 0', () => {
        const pet = new Pet('Dexter');
        expect(pet.hunger).toEqual(0);
    });
});
describe('initial fitness', () => {
    it('has a initial fitness of 10', () => {
        const pet = new Pet('Dexter');
        expect(pet.fitness).toEqual(10);
    });
});
describe('play',() => {
    it('plays with the pet and increases the fitness by 4 to a maximum of 10', () => {
        const pet = new Pet('Dexter');
        pet.fitness = 8;
        pet.play();
        expect(pet.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet ('Dexter');
        pet.age = 30;
        expect(() => pet.play()).toThrow('Your pet is no longer alive :(');
    });
});
describe('feed', () => {
    it('feeds the pet and decreases the hunger level by 3 but not below 0', () => {
        const pet = new Pet('Dexter');
        pet.hunger = 5
        pet.feed();
        expect(pet.hunger).toEqual(2);
        pet.hunger = 1
        pet.feed();
        expect(pet.hunger).toEqual(0);
    }); 
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet ('Dexter');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');    
    });
});
describe('checkUp', () => {
    it('checks if the pet needs to play, or needs food, both, or feels great', () => {
        const pet = new Pet('Dexter');
        pet.fitness = 2
        expect("I need a 10 second play");
        pet.hunger = 3
        expect("I want some pouch");
        pet.hunger = 3
        pet.fitness = 2
        expect("Crying non-stop")
        pet.hunger = 3
        pet.fitness = 2
        expect("Deep rumbles")
    });
});
describe('isAlive', () => {
    it('checks if the pet is alive', () => {
        const pet = new Pet('Dexter');
        pet.age = 28
        pet.hunger = 8
        pet.fitness = 5
        expect(true)
        pet.age = 32
        pet.hunger = 12
        pet.fitness = 5
        expect(false)
    });
});     
