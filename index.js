const array = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(array){
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(){
        return integer * 4
    }
}

const fareDoubler = function(integer){
    return integer * 2
}