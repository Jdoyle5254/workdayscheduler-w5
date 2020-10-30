// GIVEN I am using a daily planner to create a schedule
    // HTML Page with a bootstrap grid layout 
    // banner for headline should display the date and time upon opening 


// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// each block is a column and a row 1st column is the hour 2nd column is the data, 3rd column is the save button
// need to add grinlines and time lables to each row. 
// this is about the style and layout of page



// WHEN I refresh the page
// THEN the saved events persist
// using a for loop to grab all the items for each time block and .getItem and load them on the page for the appropriate time block

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// function that runs on opening of page to display the day and time

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
   colorChange()
   showNotes()
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
//function that would run upon page opening and change colors of time block using 
//moment.js gives the current time 

function colorChange() {
    // var = timeBlocks[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] 
    for (var i = 7; i < 20; i++ ) {
         
         if (i < moment().get("hour")) {
            $(".row.hour-"+ i +">.note").addClass("past");
         }
         else if (i > moment().get("hour")) {
            $(".row.hour-"+ i +">.note").addClass("future");
         }
         else if (i == moment().get("hour")) {
            $(".row.hour-"+ i +">.note").addClass("present");
         }
    }
}

// WHEN I click into a time block
// THEN I can enter an event
//make each box for user input 

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage 
//click event listening to the saved button.  when clicked the input is saved to local storage. associated with that block number
//use class to label each button 
// window.localStorage.setItem("highscores", JSON.stringify(highScores) sample code for local storage 
$("button").click(function(){
   
   window.localStorage.setItem($(this).parent().children(".note").attr("name"), $(this).parent().children(".note").val());
  });


   function showNotes() {
      for (var i = 7; i < 20; i++ ) {
        
            $(".row.hour-"+ i +">.note").val(window.localStorage.getItem("textarea-" + i));
      }

      
   }