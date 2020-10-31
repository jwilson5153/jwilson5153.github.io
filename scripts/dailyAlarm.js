function dailyAlarm() {
    //DECLARE:
    let message;
    let holiday;
    //INPUT: The Date() getMonth() getDate() and getToday() functions are used as input
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
   // let dayOfWeek = now.getDay();
let dayOfWeek = 5;

    //PROCESSING: Determine if today is a holiday
    //PROCESSING: If today is a hoiday assign the variable "holiday" with the holiday name 
    //PROCESSING: If today is not a holiday set "holiday" to "not a holiday"
    if (month === 0 && dayOfMonth === 1) {
        holiday = "New Years Day";
    }
    else if (month === 6 && dayOfMonth === 4) {
        holiday = "Independance Day";
    }
    else if (month === 11 && dayOfMonth === 25) {
        holiday = "Christmas";
    }
    else {
        holiday = "Today is not a holiday";
    }
    //PROCESSING: If today is a weekend day or it is a holiday assign the "message" variable "Sleep in today"
    //PROCESSING: If is not a weekend or a holiday set the "message" to "Get up"
    if (holiday === ("New Years Day" || "Independance Day" || "Christmas")) {
        message = "Sleep in!";
    }
    else if (dayOfWeek === 0 || dayOfWeek === 6) {
        message = "Today is a weekend, Sleep in!"
    }
    else {
        message = "Today is a weekday, Get up!";
    }

    //OUTPUT 
    document.getElementById("output").innerHTML = holiday + " " + message;
    document.getElementById("random").innerHTML = Math.random() + " random #";
}
