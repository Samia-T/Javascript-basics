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

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve('Yes! resolved the promise');
    } else {
        reject('No! rejected the promise');
    }
})

const myNextProm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('next promise resolved');
    }, 0);
})

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