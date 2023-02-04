let dieselPrice = 114;
let petrolPrice = 130;
let octanPrice = 135;

let dieselQuantity = 30;
let petrolQuantity = 20;
let octanQuantity =  10;
function oilPrice(dieselQuantity,petrolQuantity,octanQuantity){
    let totalDieselPrice = dieselPrice * dieselQuantity;
    let totalPetrolPrice = petrolPrice * petrolQuantity;
    let totalOctanPrice = octanPrice * octanQuantity;
    return (totalDieselPrice+totalOctanPrice+totalPetrolPrice);
}



console.log(oilPrice(dieselQuantity,petrolQuantity,octanQuantity));