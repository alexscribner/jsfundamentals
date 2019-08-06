let weather = 75;
if (weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket needed');
};

let weather = 50;
if (weather < 75 && weather > 55) {
    console.log('Wear a light jacket');
} else {
    console.log('Number is not in range.');
};

//Challenge #1

let name = 'Alex';
if (name == 'Alex') {
    console.log('Hello my name is Alex!');
} else {
    console.log('Hello, is your,', name,'?');
};

//Challenge #2

let name = 'aUTuMN';
if (name.charAt(0) === name.charAt(0).toUpperCase()) {
    firstLetter = name.charAt(0) + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
};