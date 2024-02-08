


var dayOfWeek = function(dayNum){
switch (dayNum) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
  
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
      case 7:
      console.log("Sunday");
      break;
  
    default:
      console.log("Invalid Input");
      break;
  }
  
}
dayOfWeek(2);
dayOfWeek(7);
dayOfWeek(9);
dayOfWeek(null);
dayOfWeek(undefined);
dayOfWeek(NaN);
dayOfWeek(-2);
dayOfWeek(0);

