// ## Instantiate

const map = new Map([
  [1, 'one'],
  [2, 'two'],
]);

const obj = {
  1: 'one',
  2: 'two',
};

console.log(`~~~~~~~~~~~~~~Instantiate~~~~~~~~~~~~~~`);
console.log({ map, obj });

// a key in map can be anything
// a key in a object can be only a string

// ## Set

map.set(3, 'three');
obj[3] = 'three';

// ## Get
console.log(`~~~~~~~~~~~~~~Get~~~~~~~~~~~~~~`);
console.log('map get:', map.get(3));
console.log('obj get:', obj[3]);

// ## Delete

map.delete(3);
delete obj[3];

// ## Keys
console.log(`~~~~~~~~~~~~~~Keys~~~~~~~~~~~~~~`);
console.log('map keys:', map.keys());
console.log('obj keys:', Object.keys(obj));

// ## Has
console.log(`~~~~~~~~~~~~~~Has~~~~~~~~~~~~~~`);
console.log('map has key 1:', map.has(2));
console.log('obj has key 1:', 2 in obj);
console.log('obj has key 1:', obj.hasOwnProperty(2));

// ## Values
console.log(`~~~~~~~~~~~~~~Values~~~~~~~~~~~~~~`);
console.log('map values', map.values());
console.log('obj values', Object.values(obj));

// ## Entries
console.log(`~~~~~~~~~~~~~~Entries~~~~~~~~~~~~~~`);
console.log('map entries', map.entries());
console.log('obj entries', Object.entries(obj));

// ## Length
console.log(`~~~~~~~~~~~~~~Length~~~~~~~~~~~~~~`);
console.log('map size', map.size);
console.log('obj size', Object.keys(obj).length);

// ## Iteration
console.log(`~~~~~~~~~~~~~~Iteration~~~~~~~~~~~~~~`);
for (const [key, value] of map) {
  console.log(`map:`, { key, value });
}

for (const [key, value] of Object.entries(obj)) {
  console.log(`obj:`, { key, value });
}

// ## Iteration forEach
console.log(`~~~~~~~~~~~~~~Iteration forEach~~~~~~~~~~~~~~`);

map.forEach((value, key) => {
  console.log(`map`, { key, value });
});

Object.entries(obj).forEach(([key, value]) => {
  console.log(`obj`, { key, value });
});

// ## Swap key & values
console.log(`~~~~~~~~~~~~~~Swap key & values~~~~~~~~~~~~~~`);
const swapMap = Array.from(map).reduce(
  (acc, [key, value]) => acc.set(value, key),
  new Map()
);

const swapObj = Object.entries(obj).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [value]: key,
  }),
  {}
);

console.log({ swapMap, swapObj });
