//this
//method = obj itself
//function = global (window, global)
const video = {
    title: 'a',
    tags: ['b', 'c', 'd'],
    //method
    play() {
        console.log(this);
        //this - references obj executing the current function
    },
    //method
    showTags() {
        //const self = this;

        //function(tag) - global func - this here refcerences the global obj
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); //self.title
        }, this) // this - references video (obj); 
        // without it, this.title wouldn't work (this would refer to global func, which doesn't have title) 

        // alternative-> self = this;

        //better alt - bind (see below) 
        // }.bind(this));

        //even better, use arrow function, inherits this from containing function
        //this.tags.forEach(tag => {
        //     console.log(this.title, tag);
        // })
    }
};

video.showTags();

function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video('V'); //new obj {}

function playVideo(a,b) {
    console.log(this);
}

playVideo.call({name: 'Mosh'}, 1, 2);
playVideo.apply({name: 'Mosh'}, [1, 2]);
playVideo.bind({name: 'Mosh'})();

playVideo();

// Arrow functions do not have their own this