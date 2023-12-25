
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  console.log(this.eyeColor)
  this.nationality = "English";
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

document.write(
"The nationality of my father is " + myFather.nationality + ". The nationality of my mother is " + myMother.nationality);
