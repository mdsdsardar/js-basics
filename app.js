let age = 70;
let new_var = "Hi I'm Saad";
let new_array = ["Saad", "Mohammed", "NCS"];
let new_job = {
  title: "Web Development",
  place: "Pune",
  year: 50,
};
// alert(new_array);
// alert(new_array[0]);
// alert(new_job.title);
let adultYears;
function calculateAdultYears() {
  return age - 18;
}
adultYears = calculateAdultYears();
// alert(adultYears);
age = 50;
adultYears = calculateAdultYears();
console.log(adultYears);
// alert(adultYears);
let person = {
  name: "max",
  greet() {
    console.log("Hi there");
  },
};

person.greet();
