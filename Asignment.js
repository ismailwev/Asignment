// creating a feetToMile converter---------------------------------------------------------------------->
function feetToMile( feet ) {

    var mile = feet / 5280;
    return mile;
  
  }
  var result = feetToMile(88);
          result = result.toFixed(5);
          console.log(result);
  
  
  
  
  
  // creating a WoodCalculator-------------------------------------------------------------------------->
  
  
  function woodCalculator(Chair, Table, Bed){
      Total = Chair*1 + Table*3 + Bed*5 ;
      return Total ;
  }
  var totalWoodNeed = woodCalculator(5, 3, 9);
  console.log(totalWoodNeed);
  
  
  
  
  
  //asignment-Tinyfriends--------------------------------------------------------------------------------->
  
  function tinyFriend(friends){
      var tiny=friends[0];
  
      for (var i=0; i<friends.length; 
          i++ ){
        var currentFriends=friends [i];
  
      if  (currentFriends<tiny){
       tiny=currentFriends;
      }}
  
  
     return tiny;
  
  
    }
    var tinyFriend=tinyFriend ([ "anju", "proma", "tanbin" ]);
    console.log(tinyFriend);
  
  
  
  
  
  
    //creating a brickCalclator----------------------------------------------------------------------------------------->
  
  function brickCalculator(numberOfFloor){
    if (numberOfFloor <0) {
        return "floor number can't be a negative value"
    }  else {
        if (numberOfFloor <= 10) {
            firstTenFloor = numberOfFloor;
          return firstTenFloor * 15 * 1000;
        } else if ((numberOfFloor > 10) && (numberOfFloor <= 20)) {
            firstTenFloor = 10 
            tenToTwentyFloor = numberOfFloor - firstTenFloor;
            return ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor *12 * 1000));
        } else if (numberOfFloor > 20) {
            firstTenFloor = 10
            twentyToMore = numberOfFloor -20;
            return ((firstTenFloor * 15 * 1000) + (firstTenFloor *12 * 1000) +  (twentyToMore * 10 * 1000));
        }
    }
    
  }
  console.log(brickCalculator(-22));
  console.log(brickCalculator(2));
  console.log(brickCalculator(8));
  console.log(brickCalculator(15));
  console.log(brickCalculator(26));
  console.log(brickCalculator(28));
  
  
  
  