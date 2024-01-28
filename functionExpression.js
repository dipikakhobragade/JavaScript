

var maleMarriageEligibility = function(gender,age,boyName){
var result = gender=='male' && age>=21 ? ` ${boyName} Eligible for Marriage`: 'Not Eligible for marriage';
console.log(result);
}
maleMarriageEligibility('male',25,'Bhushan Bhele');
maleMarriageEligibility('male', 20 , 'Elon Musk');