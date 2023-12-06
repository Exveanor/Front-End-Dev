function vacation (groupOfPeople, type, day) {
    let price = 0;
    if (type === "Students") {
        if(day === "Friday") {
            price = groupOfPeople * 8.45;
        } else if (day === "Saturday") {
            price = groupOfPeople * 9.80;
        } else if (day === "Sunday") {
            price = groupOfPeople * 10.46;
        }
    } else if (type === "Business") {
        if(day === "Friday") {
            price = groupOfPeople * 10.90;
        } else if (day === "Saturday") {
            price = groupOfPeople * 15.60;
        } else if (day === "Sunday") {
            price = groupOfPeople * 16.00;
        }
    } else {
        if(day === "Friday") {
            price = groupOfPeople * 15.00;
        } else if (day === "Saturday") {
            price = groupOfPeople * 20.00;
        } else if (day === "Sunday") {
            price = groupOfPeople * 22.50;
        }
    }
}