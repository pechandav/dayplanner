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

})