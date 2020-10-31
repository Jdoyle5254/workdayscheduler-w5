

// When the page opens this method runs to display the date and time and update the notes and hourly color change.
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
   colorChange()
   showNotes()


// This is the function for the page to change color based on the hour of day.  

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
// this is the onclick function that will save the note to local storage
 ("button").click(function(){
   
   window.localStorage.setItem($(this).parent().children(".note").attr("name"), $(this).parent().children(".note").val());
  });

// this function is set to pull the notes from local storage to disply on the page upon refresh
   function showNotes() {
      for (var i = 7; i < 20; i++ ) {
        
            $(".row.hour-"+ i +">.note").val(window.localStorage.getItem("textarea-" + i));
      }

      
   }