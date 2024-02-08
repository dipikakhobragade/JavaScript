
var gradeSystem = function (marks) {

    
if (marks<0 || marks >100 || marks==undefined || isNaN(marks)){ // invalid input
    console.log(`${marks} ===> invalid`);
} else {
    if (marks<35) { // fail
        console.log(`${marks} u r failed`);
        
    } else {
        if (marks>= 35 && marks <50) {
            console.log(`${marks} u r passed grade ===> C`);
            
        } else 
            if (marks>=50 && marks<75) {
                console.log(`${marks} u r passed grade ===> B`);
                
            } else {
                console.log(`${marks} u r passed grade ===>  A`);
            }
            
        
    }
    
}
    
}
gradeSystem(68);
gradeSystem(100);
gradeSystem(89);
gradeSystem(-10);
gradeSystem(110);
gradeSystem(undefined);
gradeSystem(null);
gradeSystem(NaN);
gradeSystem('60%');

