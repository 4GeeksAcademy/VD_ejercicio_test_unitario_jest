const sum = (a,b) =>{
    return a+b
}
console.log(sum(7,3))


function fromEuroToDollar(euro){
    return euro*1.07;
}
function fromDollarToYen(dollar){
    let euro = dollar/1.07;
    return euro*156.5;
}
function fromYenToPound(yen){
    let euro = yen/156.5;
    return euro*0.87;
}
module.exports={sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};