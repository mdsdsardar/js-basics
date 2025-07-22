// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
let online_course = "web_dev";
let course_price = 5000;
let main_goals = ["learn_frontend", "learn_backend", "learn_java"];
// alert(online_course);
// alert(course_price);
// alert(main_goals);

// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
let group = {
  online_course: "web_dev",
  course_price: 5000,
  main_goals: ["learn_frontend", "learn_backend", "learn_java"],
};
// alert(group.online_course);
// alert(group.course_price);
// alert(group.main_goals);

// 4) Also output the second element in your "main goals" variable
// alert(group.main_goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function get_goals(array, index_array) {
  let my_goal = array[index_array];
  return my_goal;
}
// 6) Execute your custom command from (5) and output ("alert") the result
let first_goal = get_goals(group.main_goals, 0);
alert(first_goal);
