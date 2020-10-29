// GIVEN I am using a daily planner to create a schedule
    // HTML Page with a bootstrap grid layout 
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// function that runs on opening of page to display the day and time

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// this is about the style and layout of page


// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
//function that would run upon page opening and change colors of time block using 
//moment.js gives the current time 
// for loop through the blocks 
// its noon and looking at 9am: current time (12) - 9 = 3 --> Gray 
// its noon and looking at 12 current time (12) - 12  = 0 --> Red
// its noon and looking at 3pm: current time (12) - 15 = -3 --> Green 
//   current time - time block (army time)  
// if positive = gray     else if 0 = red    else if negative = green (jquery color change)

// WHEN I click into a time block
// THEN I can enter an event
//make each box for user input 

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
//click event listening to the saved button.  when clicked the input is saved to local storage. associated with that block number
//use class to label each button  

// WHEN I refresh the page
// THEN the saved events persist
// using a for loop to grab all the items for each time block and .getItem and load them on the page for the appropriate time block