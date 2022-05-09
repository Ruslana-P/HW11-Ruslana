
//Exercise 4
// Teacher's version
var name = 'Vic 2';
var user = {
    age: 5,
    name: 'Vic',
    getName: function() {
        return this.name;
    }
};

const getName = user.getName;
console.log(getName());

// my solution with bind
console.log(getName.bind(user)());

//my solution with apply
console.log(getName.apply(user));

//Exercise 5
// Teacher's version
const user1 = {
    age: 5,
    name: 'Vic',
    getNAme: function() {
        return this.name;
    }
};

const user2 = {
    name: 'Arni',
}

const getNAme = user1.getNAme;
console.log(getNAme());

 //my solution
const getNAmeFor2 = getNAme.bind(user2);
console.log(getNAmeFor2());

