//Switch

let friend = 'Alecx';
switch(friend) {
    case 'Autumn':
        console.log('Hey Autumn, when are we going rock wall climbing?'); 
        break;
    case 'Dave':
        console.log('Hey Dave, how is Cooper?');
        break;
    case 'Alecx':
        console.log('Hey Alecx, when are we playing DnD?');
        break;
        defualt:
        console.log(`Im sorry, ${friend}, but do i know you?`);
        console.log('I\'m sorry,', friend, 'but do i know you?')
};

//Challenge

let dessert ='Pie'
switch(dessert) {
    case 'Pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'Cake':
        console.log('Cake is great!');
        break;
    case 'Ice Cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log('Not on the menu.')
};

//Challenge
let age = 26
switch (true) {
    case (age >= 25):
        console.log('Yay! You can rent a car!');
        break;
    case (age >= 21):
        console.log('Yay! You can drink!');
        break;
    case (age >= 18):
        console.log('Yay! You can vote!');
        break;
    case (age <= 17):
        console.log('Sorry you are too young to do anything.');
        break;
    default:
        console.log('That is not an age.')
};