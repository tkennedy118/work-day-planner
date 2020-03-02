$(document).ready(function() {

    let hrStart     = 16;
    let hrEnd       = 23;
    let now         = moment();

    /****************************** FUNCTIONS *******************************/

    // Function: clone basic time block with nothing extra
    const initTimeInfo = function() {

        // get current day
        $("#currentDay").html(now.format("ddd, MMMM Do YYYY"));

        // runs for each hour of the day
        for (var i = hrStart; i < hrEnd; i++) {

            let clone = $(".time-block:last").clone(true, true);

            // append time blocks
            $(".container").append(clone);
            
        }
    }

    // Function: fill information for each time block
    const displayTimeInfo = function() {

        // index for hour of the day
        let index = hrStart;                      

        // loop through each time block
        $(".time-block").each(function() {

            // local variables
            let hour = moment().hour(index);
            let hourArea = $(this).find($(".hour-area"));
            let eventArea = $(this).find($(".event-area"));

            // may or may not exist, null if it doesn't
            let local = localStorage.getItem(hour.format("h:00 a"));

            // display hour
            hourArea.html(hour.format("h:00 a"));

            // display past, present, or future class
            if (hour.isBefore(now, "hour")) {
                eventArea.addClass("past");
                
            } else if (hour.isAfter(now, "hour")) {
                eventArea.addClass("future");

            } else {
                eventArea.addClass("present");
            }

            // fill event information here, grabbed from local storage
            if (local !== null) {
                eventArea.val(local);
            }

            index++;
        });
    }

    // Function: save event information from textarea to local storage
    const saveEvents = function() {

        // time and text corresponding with selected save button
        let savedTime = $(this).parents(".time-block").find(".hour-area").text();
        let savedText = $(this).parents(".time-block").find(".event-area").val();

        // only delete if content exists
        if (savedText !== "") {

            // add to local storage
            localStorage.setItem(savedTime, savedText);
        }
    }

    // FUNCTION: delete event information from local storage and textarea
    const deleteEvents = function() {

        // time and text corresponsing with selected delete button
        let savedTime = $(this).parents(".time-block").find(".hour-area").text();
        let savedText = $(this).parents(".time-block").find(".event-area");

        // remove them
        localStorage.removeItem(savedTime);
        savedText.val("");
    }

    /**************************** EVENT HANDLERS ****************************/

    $(".btn-save").on("click", saveEvents);

    $(".btn-delete").on("click", deleteEvents);


    /**************************** FUNCTION CALLS ****************************/

    initTimeInfo();
    displayTimeInfo();
});