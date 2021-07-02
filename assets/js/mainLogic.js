// Global variables
var currentHour;
var descriptions = $(".description");
var saveBtn = $(".saveBtn");
var hourElements = [];

// Event listener
saveBtn.on("click", SaveCurrentQuestion);

// Initiate Time & row status
initiateClock();
RenderScheduleStatus();
renderSchedule();

// Renders the current Date on the Page
function initiateClock() {
  $("#clockDiv").html(moment().format("dddd, MMM Do"));
}

// Get the current Time and format it as the current hour
function getCurrenthour() {
  currentHour = moment().format("H");
}

// Get all hours on the scheduler by selecting the ID attr
function getArrayOfHours(){
  rowId = $(".row");
  $.each(rowId, function(){
    hourElements.push(rowId.attr("id"));
  });
}

// Display the status of the hours (gray Past), (Red Present), (green future)
function RenderScheduleStatus(){
 getCurrenthour();
 getArrayOfHours();

  for(var i = 0; i < hourElements.length; i++){
    let rowHr = hourElements[i];

    if(rowHr == currentHour){
      $(descriptions[i]).addClass("present");
    }
    else if(rowHr > currentHour){
      $(descriptions[i]).addClass("future");
    }
    else{
      $(descriptions[i]).addClass("past");     
    }
  }
}

// Save to local storage
function SaveCurrentQuestion(event){

  let inputText = $(event.target).prev().val();
  let saveToHour = $(event.target).parent().attr("id");
  
  localStorage.setItem(saveToHour, inputText);
}

// Display results on screen
function renderSchedule(){
  $("#09 .description").val(localStorage.getItem("09"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
}