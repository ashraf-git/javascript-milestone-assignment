  function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
  }
  var totalMile = feetToMile(10000);
  console.log(totalMile);



  function woodCalculator(chairNumber, tableNumber, bedNumber){
    var chairQueFeet = chairNumber * 1;
    var tableQueFeet = tableNumber * 3;
    var bedQueFeet = bedNumber * 5;
    var result = chairQueFeet + tableQueFeet + bedQueFeet;
    return result;
  }
  var totalQueFeet = woodCalculator(16, 2, 4);
  console.log(totalQueFeet);

function brickCalculator(tala){
  if(tala <= 10){
    var brickAmount = tala * 1500;
    return brickAmount;
  }else if(tala > 10 && tala <= 20){
    var brickAmount = (10*1500) + (tala-10)*1200;
    return brickAmount;
  }else if(tala > 20 && tala <= 200){
    var brickAmount = (10*1500) + (10*1200) + (tala-20)*1000;
    return brickAmount;
  } else{
    return "this is not correct number";
  }
}
var totalBrickAmout = brickCalculator(25)
console.log(totalBrickAmount);