// Created the current time to place at heading of Day Planner
var currentTime = moment();
//Links the time in the HTML place
$("#currentDay").text(currentTime.format("dddd, MMM Do, YYYY"));

var hrArray;
var currentHour;
var task= $("task");
var plannerTask= $("textarea");


// Get task info and put it in an array to put into localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault
$.each(plannerTask, function (){
    this.value="";
   
if (localStorage.getItem("task")) {
    hrArray = JSON.parse(localStorage.getItem("task"));
} else {
    hrArray = [];
};
});
});

console.log(plannerTask)
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

// Animate the times with past, present and current colors by tapping into CSS
function updateCurrentSchedule(e) {
    $.each(task, function (scheduleHr){
        e.preventDefault
        if(scheduleHr < currentTime.hour()) {
            $(this).addClass("past");
        } else if (scheduleHr == currentTime.hour()) {
            $(this).addClass("present");
        } else {$(this).addClass("future");
    }
    });
    currentHour=currentTime.hour();
};

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


// function writeTasks(){
//     $.each(hrArray, function(i) {
//         if (hrArray[i]) {
//             plannerTask[i].value=hrArray[i].task;
//         };
//     });
// };

setInterval(function() {
    currentTime=moment();
    if (currentHour < currentTime.hour()){
        updateCurrentSchedule();
    } else if (currentHour > currentTime.hour()) {
        updateCurrentSchedule();
        $("#currentDay").text(`${currentTime.format("dddd, MMM Do")}`);
    }
}, 1000);

updateCurrentSchedule();
// writeTasks();
$("btn").click(updateLocalStorage);

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

//     function colorUpdater(){
    
//         // // Loop over timeblocks
//         //     $(".time-block").each(function( {
//         //         // create function to loop over time blocks
//         //         var time-block= 
//         //     }))
//         // conditional statement to check the hours and apply correct time
//                 if(blockTime < currentTime) {

//                 } else if () {

//                 }
//     }
//     // call the function
//     colorUpdater ()

//     //  obtain saved data from localStorage
//     $("#hour-nine.information").val(localStorage.getItem("hour-nine"));

//     $("#currentDay").text(moment().format("MMM Do YYYY"));
// });

