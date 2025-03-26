function getRoomPrice(type, isWeekend, hasDiscount) {
    let price;

    switch (type) {
        case "Standard":
            price = isWeekend ? 120 : 100;
            break;
        case "Deluxe":
            price = isWeekend ? 180 : 150;
            break;
        case "Suite":
            price = isWeekend ? 250 : 200;
            break;
        default:
            
            return "Invalid room type"
    }

    if (hasDiscount) {
        price *= 0.9; 
    }

    return price;
}

 console.log(getRoomPrice("Standard", true, true)); 
 console.log(getRoomPrice("Deluxe", false, false));
 console.log(getRoomPrice("Suit", true, true)); 