$(document).ready(function() {

    let hrStart     = 16;
    let hrEnd       = 23;
    let now         = moment();

    /****************************** FUNCTIONS *******************************/

    const getCurrentHour = function() {

        let currentHour = now.hour();
    };

    // clone basic time block with nothing extra
    const initTimeInfo = function() {

        // get current day
        $("#currentDay").html(now.format("ddd, MMMM Do YYYY"));

        // runs for each hour of the day
        for (var i = hrStart; i < hrEnd; i++) {

            let clone = $(".time-block:last").clone();

            // append time blocks
            $(".container").append(clone);
            
        }
    }

    // fill information for each time block
    const displayTimeInfo = function() {

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
                eventArea.addClass("past");
                
            } else if (hour.isAfter(now, "hour")) {
                eventArea.addClass("future");

            } else {
                eventArea.addClass("present");
            }

            // fill event information here, grabbed from local storage

            index++;
        });
    }


    /**************************** FUNCTION CALLS ****************************/

    initTimeInfo();
    displayTimeInfo();

});