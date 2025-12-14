const movies = [
 {title: 'a', year: 2018, rating: 4.5},
 {title: 'b', year: 2018, rating: 4.7},
 {title: 'c', year: 2018, rating: 3},
 {title: 'd', year: 2017, rating: 4.5},
];

const res = movies
    .filter(m => m.rating >= 4 && m.year === 2018)
    // .sort(function(a,b) {
    //     if (a.rating < b.rating) return 1;
    //     if (a.rating > b.rating) return -1;
    //     else return 0;
    // })

    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(res);