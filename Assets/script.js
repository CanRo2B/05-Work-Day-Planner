
// Created the current time to place at heading of Day Planner
var currentTime = moment();
var currentHr = moment();
//Links the time in the HTML place
$("#currentDay").text(currentTime.format("dddd, MMM Do, YYYY"));
$("#currentHour").text(currentHr.format("hh:mm"));

var hrArray = JSON.parse(localStorage.getItem("task")) || []
var currentHour;
var task= $("task");
// var plannerTask= $("textarea");


// Begin a function focused on entire document
$(document).ready(function(){
// Listen for saveBtn clicks
$(".saveBtn").on("click", function(event) {
    var key = $(this).parent().attr("id")
    var value = $(this).siblings(".task").val()
    console.log(key, value)
    localStorage.setItem(key, value);
    localStorage.getItem(key, value);
})
});

$("#0").children(".task").val(localStorage.getItem("0"));
$("#1").children(".task").val(localStorage.getItem("1"));
$("#2").children(".task").val(localStorage.getItem("2"));
$("#3").children(".task").val(localStorage.getItem("3"));
$("#4").children(".task").val(localStorage.getItem("4"));
$("#5").children(".task").val(localStorage.getItem("5"));
$("#6").children(".task").val(localStorage.getItem("6"));
$("#7").children(".task").val(localStorage.getItem("7"));
$("#8").children(".task").val(localStorage.getItem("8"));


// // Animate the times with past, present and current colors by tapping into CSS
// function updateCurrentSchedule(e) {
//     $.each(task, function (scheduleHr){

//         if(scheduleHr < currentTime.hour()) {
//             $(this).addClass("past");
//         } else if (scheduleHr == currentTime.hour()) {
//             $(this).addClass("present");
//         } else {$(this).addClass("future");
//     }
//     });
//     currentHour=currentTime.hour();
// };

function animateTask(){
// Loop over timeblocks
$(".time-block").each(function() {
// create function to loop over time blocks
// var currentHr = moment().format("h");
var timeBlock = parseInt($(this).attr("id"));
var currentHour = currentHr;
// conditional statement to check the hours and apply correct time
    if(timeBlock < currentHour) {
        $(".task").addClass("past");
     } else 
        if (timeBlock === currentHour) {
            $(".task").addClass("present");
     } else 
        if (timeBlock > currentHour) {
            $(".task").addClass("future");
         } else {}
     })
}
   

animateTask();
 

// .removeClass(["present", "future"])
// .removeClass(["past", "future"])
// .removeClass(["present", "past"])

// setInterval(function() {
//     currentTime=moment();
//     if (currentHour < currentTime.hour()){
//         updateCurrentSchedule();
//     } else if (currentHour > currentTime.hour()) {
//         updateCurrentSchedule();
//         $("#currentDay").text(`${currentTime.format("dddd, MMM Do")}`);
//     }
// }, 1000);
// })
// // updateCurrentSchedule();

// Update the hour of the localStorage 
// function updateLocalStorage(e) {
//     e.preventDefault();
//     let btnIndex = Number($(this).attr("id"));
//     if (plannerTask[btnIndex].value.trim() != "") {
//         hrArray[btnIndex] = {
//             time: $(".hour")[btnIndex].textContent.trim(),
//             task: plannerTask[btnIndex].value
//         };
//         localStorage.setItem("hrTasks", JSON.stringify(hrArray));
//     };
// };
// writeTasks();
// $("btn").click(updateLocalStorage);
// function writeTasks(){
//     $.each(hrArray, function(i) {
//         if (hrArray[i]) {
//             plannerTask[i].value=hrArray[i].task;
//         };
//     });
// };

// // Begin a function focused on entire document
// $(document).ready(function(){
//     // Listen for saveBtn clicks
//     $(".saveBtn").on("click", function() {
//        var value = $(this).siblings(".information").val();
//        var time = $(this).parent().attr("id");
//         // Show notification that the item was saved in localStorage
//         localStorage.setItem(time, value);
//         localStorage.getItem(time, value);
//     })
    
//     // Item styling

//     

//     //  obtain saved data from localStorage
//     $("#hour-nine.information").val(localStorage.getItem("hour-nine"));

//     $("#currentDay").text(moment().format("MMM Do YYYY"));
// });
