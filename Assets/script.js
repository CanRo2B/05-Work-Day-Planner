
// Created the current time to place at heading of Day Planner
var currentTime = moment();
var currentHr = moment();
//Links the time in the HTML place
$("#currentDay").text(currentTime.format("dddd, MMM Do, YYYY"));
$("#currentHour").text(currentHr.format("HH:mm"));


var hrArray = JSON.parse(localStorage.getItem("task"))
var task= $("task");

// localStorage.getItem("tasks", JSON.parse());

// Begin a function focused on entire document
$(document).ready(function(){
// Listen for saveBtn clicks
$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".task").val();
    var key = $(this).parent().attr("id");
    
   
    console.log(key, value);

    localStorage.setItem(key, value);
    localStorage.getItem(key, value);
})




function animateTask(){
var currentHour = parseInt(moment().format("H"));
// Loop over timeblocks
$(".time-block").each(function() {
// create function to loop over time blocks
var timeBlock = parseInt($(this).attr("id"));


// conditional statement to check the hours and apply correct time
    if(timeBlock < currentHour) {
        $(".task").addClass("past");
     } else 
        if (timeBlock === currentHour) {
            $(".task").addClass("present");
     } else 
           {
            $(".task").addClass("future");
         } 
     })
}
 

animateTask();

var interval = setInterval(animateTask, 15000);

// $("").val(localStorage.getItem(""));
$("#9 .task").val(localStorage.getItem("9"));
$("#10 .task").val(localStorage.getItem("10"));
$("#11 .task").val(localStorage.getItem("11"));
$("#12 .task").val(localStorage.getItem("12"));
$("#13 .task").val(localStorage.getItem("13"));
$("#14 .task").val(localStorage.getItem("14"));
$("#15 .task").val(localStorage.getItem("15"));
$("#16 .task").val(localStorage.getItem("16"));
$("#17 .task").val(localStorage.getItem("17"));

// $("#0").children(".task").val(localStorage.getItem("0"));
// $("#1").children(".task").val(localStorage.getItem("1"));
// $("#2").children(".task").val(localStorage.getItem("2"));
// $("#3").children(".task").val(localStorage.getItem("3"));
// $("#4").children(".task").val(localStorage.getItem("4"));
// $("#5").children(".task").val(localStorage.getItem("5"));
// $("#6").children(".task").val(localStorage.getItem("6"));
// $("#7").children(".task").val(localStorage.getItem("7"));
// $("#8").children(".task").val(localStorage.getItem("8"));


$("#currentDay").text(moment().format("MMM Do YYYY"));
 
});
