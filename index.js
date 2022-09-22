const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let intialBattery = 0
const totalBatteries = batteryBatches.reduce(function(previousValue, currentValue){
return previousValue + currentValue
}, intialBattery)
