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

        if (groupOfPeople >= 30) {
            price *= 0.85;
        }
    } else if (type === "Business") {
        let pricePerTicket = 0;
        if(day === "Friday") {
            price = groupOfPeople * 10.90;
            pricePerTicket = 10.90;
        } else if (day === "Saturday") {
            price = groupOfPeople * 15.60;
            pricePerTicket = 15.60;
        } else if (day === "Sunday") {
            price = groupOfPeople * 16.00;
            pricePerTicket = 16.00;
        }

        if (groupOfPeople >= 100) {
            price -= pricePerTicket * 10;
        }
    } else {
        if(day === "Friday") {
            price = groupOfPeople * 15.00;
        } else if (day === "Saturday") {
            price = groupOfPeople * 20.00;
        } else if (day === "Sunday") {
            price = groupOfPeople * 22.50;
        }

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            price *= 0.95;
        }
    }

    console.log (`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday")