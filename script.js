$(document).ready(function() {

    let hrStart     = 10;
    let hrEnd       = 23;
    let now         = moment();

    $("#currentDay").html(now.format("ddd, MMMM Do YYYY"));

    /****************************** FUNCTIONS *******************************/

    const getCurrentHour = function() {

        let currentHour = now.hour();
    };

    // clone basic time block with nothing extra
    const makeTimeBlocks = function() {

        // runs for each hour of the day
        for (var i = hrStart; i < hrEnd; i++) {

            let clone = $(".time-block:last").clone();

            // append time blocks
            $(".container").append(clone);
            
        }
    }

    // fill information for each time block
    const fillTimeBlocks = function() {

        // index for hour of the day
        let index = hrStart;                      

        // loop through each time block
        $(".time-block").each(function() {

            // local variables
            let hour = moment().hour(index);
            let hourArea = $(this).find($(".hour-area"));
            let eventArea = $(this).find($(".event-area"));

            // display hour
            hourArea.html(hour.format("h:00 a"));

            // display past, present, or future class
            if (hour.isBefore(now, "hour")) {
                // assign past class
                eventArea.addClass("past");
                
            } else if (hour.isAfter(now, "hour")) {
                // assign future class
                eventArea.addClass("future");

            } else {
                // assign present class
                eventArea.addClass("present");
            }

            index++;
        });

        // fill event information here, grabbed from local storage

    }



    /**************************** FUNCTION CALLS ****************************/

    makeTimeBlocks();
    fillTimeBlocks();

});