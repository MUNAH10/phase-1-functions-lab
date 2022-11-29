    function distanceFromHqInBlocks(start) {
    let numOfBlocks = ''
        if (start < 42) {
            numOfBlocks = 42 - start
        }
        else {
            numOfBlocks = start - 42
        }
        return numOfBlocks
    }
    
    function distanceFromHqInFeet(start) {
        return distanceFromHqInBlocks(start) * 264
    }
    
    function distanceTravelledInFeet(start, end) {
        let distanceTravelled
        if (start < end) { 
            distanceTravelled = (end-start)*264
        }
        else {
            distanceTravelled = (start-end)*264
        }
        return distanceTravelled
    }
    
    function calculatesFarePrice(start, destination) {
        let fare
        const distance = distanceTravelledInFeet(start, destination)
        if (distance < 400) {
            fare = 0
        }
        else if (distance > 400 && distance <= 2000) {
            fare = (distance - 400) * 0.02
        }
        else if(distance > 2000 && distance < 2500) {
            fare = 25
        }
        else if (distanceTravelledInFeet(start, destination) > 2500) {
            return 'cannot travel that far'
        }
        return fare
    }