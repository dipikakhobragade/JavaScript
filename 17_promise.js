

const isNotesAvailable = true;
const promise = new Promise(function(success,reject){
    if (isNotesAvailable) {
        success('Sharing the notes..here you go...')
    }

});
promiseNotes.then(function(success){
    console.log('thant you sir');
    console.log(success);
}).catch(function(failure){
    console.log(`${failure}`);
    console.log(`very khadus sir`);
}).finally(function(){
    console.log(`I must have my notes....`);
})