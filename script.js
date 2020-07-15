$(document).ready(function() {
    const test = false;
    const now=moment().format("MMMM Do YYYY");

    let nowHour24 = moment().format('H');
    let nowHour12= moment().format("h");

    if (test) {
        nowHour= 13;
        nowHour=1;
    }

    let $dateHeading= $('#navbar-subtitle');
    $dateHeading.text(now);

    const saveIcon="./images/save-regular.svg";
    let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
    if (test) {console.log(storedPlans);}
    if (storedPlans !== null) {
        planTextArr = storedPlans;
        planTextArr= new Array(9);
        planTextArr[4]="Buy more garlic";
        if (test) {console.log("full array of plan text", planTextArr);}
    }
    let $plannerDiv= $('#plannerContainer');
    $plannerDiv.empty();

    if (test) {console.log("current time", nowHour12);}
    for(let hour =9; hour <=17; hour++) {
        let index = hour-9;
        let $rowDiv= $('<div>');
        $rowDiv.addClass('plannerRow');
        $rowDiv.attr('hour-index', hour);

        let $col2TimeDiv= $('<div>');
        $col2TimeDiv.addClass('col-md-2');

        const $timeBoxSpn = $('<span>');
        $timeBoxSpn.attr('class', 'timeBox');

        let displayHour = 0;
        let ampm = "";
        if (hour>12) {
            displayHour = hour-12;
            ampm="pm"; }
            else {
                displayHour = hour;
                ampm ="am";
            }
        }

    }

});