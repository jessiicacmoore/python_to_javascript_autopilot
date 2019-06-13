// Convert the following pieces of Python code to JavaScript.

// apples = 14
// print(apples)

// print("I have {} apples.".format(apples))

let apples = 14;
console.log(apples);

console.log(`I have ${apples} apples.`);


// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant': "The world's largest land mammal.",
//   'school': 'A place of learning.',
//   'ice cream': 'A delicious milk-based dessert.',
// }
let materials = ["wood", "metal", "stone"]
let words = {
    "elephant": "The world's largest land mammal.",
    "school": "A place of learning.",
    "ice cream": "A delicious milk-based dessert."
};


// num = 16
// if num > 10:
//   print("{} is greater than 10.".format(num))
// elif num == 10:
//   print("{} is exactly 10.".format(num))
// else:
//   print("{} must be less than 10.".format(num))
let num = 16 ;

if (num > 10) {
    console.log(`${num} is greater than 10.`);
} else if (num === 10) {
    console.log(`${num} is exactly 10.`);
} else {
    console.log(`${num} must be less than 10`);
}


// for x in range(0,10):
//   print("Doing the same thing over and over.")

for (x = 0; x < 10; x++) {
    console.log("Doing the same thing over and over");
}


// base = 5
// for num in range(0,20):
//   print(num + base)
let base = 5;

for (num = 0; num < 20; num++) {
    console.log(num + base);
}


// total = 0
// for num in range(0,100):
//   total += num

// print(total)
let total = 0;

for (num = 0; num < 100; num++) {
    total += num;
}

console.log(total);


// for height in range(3,15):
//   if height > 9:
//     print("You can get on the rollercoaster!")
//   else:
//     print("You are too short to ride this rollercoaster.")
for (let height = 3 ; height < 16; height++) {
    if (height > 9) {
        console.log("You can get on the rollercoaster!");
    } else {
        console.log("You are too short to ride this rollercoaster.");
    }
}


// containers = ['purse', 'wallet', 'backback']
// for container in containers:
//   print(container)
let containers = ['purse', 'wallet', 'backpack'];

for (let x=0; x < containers.length; x++) {
    console.log(`${containers[x]}`);
}


// def hello_world():
//   return "Hello world!"

// hello_world()
let hello_world = function() {;
}

hello_world();


// def add(first_num, second_num):
//   return first_num + second_num

// amount = add(5, 7)
// print(amount)

function add(first_num, second_num) {
    return first_num + second_num;
}
amount = add(5, 7);
console.log(amount);
