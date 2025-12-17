//rewatch 84
const status = false; 

console.log('task 1');

// promise def
const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (status) {
            resolve('Task 2');
        } else {
            reject('failed');
        }
    }, 2000);
});

// promise call
promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    });

console.log('task 3')

/* 
enroll
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value)
    })
    .catch(function(err){
        console.log(err);
    })
*/