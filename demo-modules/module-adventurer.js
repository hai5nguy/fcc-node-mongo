/***********************
 * module exporting a function/class
 ***********************/

function Adventurer(name) {
    this.name = name
    this.profession = 'Adventurer'
    return this
}

module.exports = Adventurer