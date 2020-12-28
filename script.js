// function checkDriverAge(age) {

//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }


// var  checkDriverAge2 = function() {
//     var age = prompt("What is your age?");

//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }


var database = [{
        username: "john",
        password: "1234",
    },
    {
        username: "saly",
        password: "secret",
    },
    {
        username: "tomas",
        password: "qwerty",
    }
];

var newsTab = [{
        username: "Tommas",
        news: "This was horrible year"
    },
    {
        username: "Reeaves",
        news: "Someone wanna hang out"
    },
    {
        username: "Sarah",
        news: "I need money"
    }
];








function validation(username, password) {
    for (let i = 0,  j=database.length; i<j; i++) {
        if (userNamePrompt === database[i].username && userPasswordPrompt === database[i].password) {
            return true;
        }
    }
    return false;
};


function signIn(username, password) {
    if (validation(username, password) === true) {
        console.log(newsTab);
    } else {
        alert("Sorry, wrong username or password");
    }

};


var userNamePrompt = prompt("What\'s your name?")
var userPasswordPrompt = prompt("What\'s your password?")




signIn(userNamePrompt, userPasswordPrompt);