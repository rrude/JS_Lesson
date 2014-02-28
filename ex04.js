// Create an object that represents a cat with properties for 
//      * tiredness
//      * hunger
//      * loneliness
//      * happiness

var cat = {
    tiredness: 50,
    hunger: 60,
    loneliness: 30,
    happiness: 105,
    sleep: function(){
        console.log("Zzzzz");
        this.tiredness = this.tiredness - 5;
    },
    lazerPointer: function(){
        console.log("LAZERS");
        this.tiredness = this.tiredness + 15;
        this.happiness = this.happiness + 15/2;
    },
    feed: function(){
        console.log("Nom Nom");
        this.hunger = this.hunger - 5;
    },
    lovin: function(){
        if (this.happiness <= 100) {
            console.log("xoxoxoxo...purrrrrr");
            this.loneliness = this.loneliness -10;
        }
        else {
            console.log("mmmeoeno this love is taking it's toll on meow");
            this.loneliness = this.loneliness + 10;
        }
    },
    catNip: function(servings){
        console.log("MEEEOOOW");
        this.happiness = this.happiness + servings;
    },
};


cat.lovin();
// cat.catNip();
console.log(cat.happiness);
// console.log(cat.tiredness);