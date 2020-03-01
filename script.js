$(document).ready(function() {

    var now = moment();

    $("#currentDay").html(now.format("ddd, MMMM Do YYYY"));

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