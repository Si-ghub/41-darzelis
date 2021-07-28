class Kindergarden {
    constructor(kindergardenName) {
        this.name = kindergardenName;
        this.maxKidsnumber = 5;
        this.kidsList = [];
        //this.kidName = '';
    }

    intro() {
        console.log(`"${this.name}" can accept 3 kids.`);
    }

    updateKidsLimit(newMaxKidsNumber) {
        this.maxKidsnumber = newMaxKidsNumber;
        console.log(`"${this.name}" can accept ${newMaxKidsNumber} kids now.`);
    }

    addKid(kidName) {
        this.kidsList.push({ kidName });
        if (this.kidsList.length <= this.maxKidsnumber) {
            console.log(`${kidName} has entered "${this.name}" kindergarden.`);
        } else {
            console.log(`${kidName} can not enter "${this.name}" kindergarden - it's at a full capacity of 5 kids.`);
        }
    }

    updateKidsLimit(newMaxKidsNumber) {
        if (this.kidsList.length > newMaxKidsNumber) {
            console.log(`"${this.name}" can not update kids limit right now.`);
        } else {
            console.log(`"${this.name}" can accept ${newMaxKidsNumber} kids now.`);

        }

    }

    sayHi() {
        console.log(`"${this.name}" is visited by: ${this.kidsList[0].kidName}, ${this.kidsList[1].kidName}, ${this.kidsList[2].kidName}, ${this.kidsList[3].kidName} and ${this.kidsList[4].kidName}.`);
    }

    removeKid(kidName) {
        const updatedKidsList = [];
        for (let i = 0; i < this.kidsList.length; i++) {
            if (i === kidName) {
                updatedList.push(this.list[i]);
            }
        }

        this.kidsList = updatedKidsList;

        console.log(`${kidName} has left "${this.name}" kindergarden.`);
    }
}





module.exports = Kindergarden;