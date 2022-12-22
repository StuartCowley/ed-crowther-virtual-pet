const MAXIMUM_FITNESS = 10;
const AGE_INCREMENT = 1;
const HUNGER_INCREMENT = 5;
const FITNESS_INCREMENT = 3;
const FEED_INCREMENT = 3;
const MINIMUM_HUNGER =0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype ={
    get isAlive () {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0
    }
}

Pet.prototype.growUp=function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += AGE_INCREMENT;
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_INCREMENT;
};

Pet.prototype.play=function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.fitness +FITNESS_INCREMENT) <=MAXIMUM_FITNESS) {
        this.fitness += FITNESS_INCREMENT;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    };
};

Pet.prototype.feed=function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if((this.hunger -FEED_INCREMENT) >=MINIMUM_HUNGER) {
        this.hunger -=FEED_INCREMENT;
    } else {
        this.hunger = MINIMUM_HUNGER;
    };    
};

Pet.prototype.checkUp=function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if((this.fitness) <=3) {
        return "I need a 10 second play"
    };
    if((this.hunger) >=5) {
        return "I want some pouch"
    };
    if((this.fitness) <=3 && (this.hunger) >=5) {
        return "Crying non-stop"
    };
    if((this.fitness) >=3 && (this.hunger) <=5) {
        return "Deep rumbles"
    };
};

module.exports = Pet;