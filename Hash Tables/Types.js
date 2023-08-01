// Hash Tables //

// Objects //

let kaizer = {
    name: "Kaizer",
    age: 21,
    isCool: true,
    friends: ["Dante", "Vivy"],
    say: () => console.log("I'm Kaizer!"),
};

console.log(kaizer);
console.log(kaizer.age);
console.log(kaizer.friends);
kaizer.say();

// Map //

let map = new Map();

map.set("name", "Vivy");
map.set("age", 22);
map.set("isCool", true);
map.set("friends", ["Dante", "Kaizer"]);
map.set("say", () => console.log("I'm Vivy!"));

console.log(map);
console.log(map.size);
console.log(map.get("age"));
console.log(map.get("friends"));
map.get("say")();

map.delete("age");
console.log(map);

// Set //

let set = new Set();

set.add("Dante");
set.add(23);
set.add(23);
set.add(false);
set.add(["Vivy", "Kaizer"]);

console.log(set);
console.log(set.has("Dante"));
set.delete(21);
console.log(set);
