// Code your solution in this file!
const returnFirstTwoDrivers = (array)=>{
  return array.slice(0,2)
}

const returnLastTwoDrivers = (array)=>{
  return array.slice(-2)
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (fare)=>{
  return function (multiplier = 2){
    return fare * multiplier;
  }
}

const fareDoubler =(fare)=> createFareMultiplier(fare)()
const fareTripler =(fare)=> createFareMultiplier(fare)(3)


const selectDifferentDrivers = (drivers, returnFirstTwoDrivers)=> {
  return returnFirstTwoDrivers(drivers)
}
