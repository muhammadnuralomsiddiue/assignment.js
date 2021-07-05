/* kilometerToMeter */
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return `Kilometer can't be negative`
    } else {
        var meter = kilometer * 1000;    // 1 kilometer = 1000 meter
        return meter
    }
}


/* budgetCalculator */
function budgetCalculator(watch, phone, laptop) {
    if ((watch < 0) || (phone < 0) || (laptop < 0)) {
        return `Sorry. Items can't be negative`;     // watch, phone and laptop numbers cannot be negative
    } else {
        var watchPrize = watch * 50;
        var phonePrize = phone * 100;
        var laptopPrize = laptop * 500;
        var totalPrize = watchPrize + phonePrize + laptopPrize;
        return totalPrize;
    }
}


/* hotelCost */
function hotelCost(day) {
    var roomCost = 0;

    if (day < 0) {
        return `Day can't be negative`   //Day can't be negative
    } else {

        if (day <= 10) {
            roomCost = day * 100;        // First 10 day room cost per day 100 TK
        }
        else if (day <= 20) {
            var firstTenDayCost = 10 * 100;
            var remainingDay = day - 10;
            var secondTenDayCost = remainingDay * 80;      //Second 10 day room cost per day 80 TK
            roomCost = firstTenDayCost + secondTenDayCost;
        }
        else {
            var firstTenDayCost = 10 * 100;
            var secondTenDayCost = 10 * 80;
            var remainingDay = day - 20;
            var otherDayCost = remainingDay * 50;    // After 20 day room cost per day 50 tk
            roomCost = firstTenDayCost + secondTenDayCost + otherDayCost;
        }
        return roomCost;

    }
}

/* megaFriend */
function megaFriend(friends) {
    var mega = friends[0];

    if (friends.length == 0) {
        return 'Type name. Please ';
    }

    for (var i = 0; i < friends.length; i++) {
        var length = friends[i].length;
        if (length > mega.length) {
            mega = friends[i];
        }
    }
    return mega;

}

