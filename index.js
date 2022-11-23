// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    
    let distance = 0;
    if (someValue >= 42) {
        distance = someValue - 42;
    } else {
        distance = 42 - someValue;
    }
    return distance;
    }


function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let distanceInFeet = 0;
        distanceInFeet = distanceFromHqInBlocks(someValue) * 264;
    
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {

    if (start > destination) {
        let distanceInFeet = (start - destination) * 264;
        return distanceInFeet; 
    } else {
        let distanceInFeet = (destination - start) * 264;
        return distanceInFeet;
    }
}

function calculatesFarePrice(start, destination) {
    
    let distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) { 
    return 0;
    } else if 
        (distanceInFeet > 400 && distanceInFeet < 2000) { 
            return (distanceInFeet - 400) * 0.02;
    } else if 
        (distanceInFeet > 2000 && distanceInFeet < 2500) { 
            return 25;
    } else if 
        (distanceInFeet > 2500) {
            return "cannot travel that far"
        }
    }

  