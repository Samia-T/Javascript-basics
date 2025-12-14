console.log(sum(10));

//mul of 3: 3, 6, 9
//mul of 5: 5, 10

function sum(limit){
    let total = 0;

    for (let i = 0; i <= 10; i++)
        if ((i % 3 === 0 )|| (i % 5 ===0))
            total += i;
        
    return total;
}