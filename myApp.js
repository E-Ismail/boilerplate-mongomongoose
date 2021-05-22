require('dotenv').config();
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const DB_URI = process.env.MONGO_URI;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connection to MongoDB established!')
  });


const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: { type: String, require: true },
  age: Number,
  favoriteFoods: [String]
})

//Create Person model from the schema.
const Person = mongoose.model("Person", personSchema);




const createAndSavePerson = (done) => {
  var newPerson = new Person({ name: "Ismailovic", age: 30, favoriteFoods: ["Spaguetti", "Fish", "Baken"] });
  newPerson.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  })

};
var arrayOfPeople = [
  { name: "Ismailovic", age: 30, favoriteFoods: ["Spaguetti", "Fish", "Baken"] },
  { name: "Maria", age: 26, favoriteFoods: ["Pancakes", "Coffee and Cruasan", "Fish"] },
  { name: "Victoria", age: 52, favoriteFoods: ["Lazana", "Meatballs", "tomato sauce"] },
  { name: "Ahmed", age: 14, favoriteFoods: ["Merka", "Bakbouka", "Couscous"] },
  { name: "Aziz", age: 86, favoriteFoods: ["Harira with Msemen", "Sardines", "Tagine"] },
];
const createManyPeople = (arrayOfPeople, done) => {

  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.error(err);
    done(null, people);
  });
};

var findPeopleByName = function (personName, done) {
  Person.find({ name: personName }, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  Person.findOne({ _id: personId }, function (err, person) {
    if (err) return console.log(err);
    done(null, person);
  })
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
