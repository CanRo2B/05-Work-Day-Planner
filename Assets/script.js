
// Created the current time to place at heading of Day Planner
var currentTime = moment();
var currentHr = moment();
//Links the time in the HTML place
$("#currentDay").text(currentTime.format("dddd, MMM Do, YYYY"));
$("#currentHour").text(currentHr.format("HH:mm"));

var task= $("task");

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



// Function to animate the planner
function animateTask(){
var currentHour = parseInt(moment().format("H"));
console.log(currentHour)
// Taking the time block to get the attributes and then use them for the conditional
$(".time-block").each(function() {
// create function to loop over time blocks
var timeBlock = parseInt($(this).attr("id"));
console.log(timeBlock)

// conditional statement to check the hours and apply correct time animations
    if(timeBlock < currentHour) {
        $(this).addClass("past");
        console.log("past")
     } else 
        if (timeBlock === currentHour) {
            // $(this).removeClass("past");
            $(this).addClass("present");
            console.log(currentHour)
     } else 
           {
            // $(this).removeClass("past");
            // $(this).removeClass("present");
            $(this).addClass("future");
         } 
     })
}


// Getting the planner task 
$("#9 .task").val(localStorage.getItem("9"));
$("#10 .task").val(localStorage.getItem("10"));
$("#11 .task").val(localStorage.getItem("11"));
$("#12 .task").val(localStorage.getItem("12"));
$("#13 .task").val(localStorage.getItem("13"));
$("#14 .task").val(localStorage.getItem("14"));
$("#15 .task").val(localStorage.getItem("15"));
$("#16 .task").val(localStorage.getItem("16"));
$("#17 .task").val(localStorage.getItem("17"));

animateTask();

$("#currentDay").text(moment().format("MMM Do YYYY"));
 
});

// var interval = setInterval(animateTask, 15000);