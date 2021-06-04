const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

// Interpolated

// Styled

// warning!

// Error :|

// Info

// Testing

// clearing

// Viewing DOM Elements

// Grouping together
//thisone is cool
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('foo');
console.count('bar');
console.count('bar');
console.count('bar');
console.count('bar');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data =>data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });