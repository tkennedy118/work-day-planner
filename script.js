$(document).ready(function() {

    let dayStart    = 7;
    let dayEnd      = 17;
    let now         = moment();

    $("#currentDay").html(now.format("ddd, MMMM Do YYYY"));

    /****************************** FUNCTIONS *******************************/

    const getCurrentHour = function() {

        let currentHour = now.hour();
        console.log(currentHour);
    };

    // run through loop to set hours of each time block
    const setHour = function() {

        let hour = now.hour(7);
        console.log(hour.format("hh:mm a"));

        $("#hour").html(hour.format("h:00 a"));
    }

    // clone basic time block with nothing extra
    const makeTimeBlocks = function() {

        // runs for each hour of the day
        for (var i = dayStart; i < dayEnd; i++) {

            let clone = $(".time-block:last").clone();

            // append time blocks
            $(".container").append(clone);
            
        }
    }

    // fill information for each time block
    const fillTimeBlocks = function() {

        // array of time blocks elements
        let blocks = $(".time-block").toArray();

        console.log(blocks);
    }




    // const setHours = function() {
        
    //     // work day length
    //     let dayLength = dayEnd - dayStart;
    //     let hour = 

    //     // set hours 7:00am - 5:00pm
    //     for (var i = dayStart; i <= dayLength; i++) {
            

    //     }
    // }

    /**************************** FUNCTION CALLS ****************************/
    getCurrentHour();
    setHour();
    makeTimeBlocks();
    fillTimeBlocks();

    // // parsing date time strings *****************************************/
    // let m = moment();

    // // create from ISO 8601 string
    // m = moment("2019-05-19");

    // // using a format
    // m = moment("14/06/2019 4:50PM", "DD/MM/YYYY h:mmA");

    // console.log(m.toString());



    // // getters, setters, min/max *****************************************/

    // m = moment();

    // // getting units
    // console.log(m.minutes());
    // console.log(m.hour());
    // console.log(m.get("week"));

    // // setting unites
    // m.minutes(52);
    // console.log(m.minutes());
});