let counter = 0
let spinner = "|/-\\"

for (let i = 0; i < 2; i ++) {
  for (let spin of spinner) {
    setTimeout(() => {
      process.stdout.write(`\r${spin}   `);
    }, counter);
      counter += 200
  } 
  setTimeout(() => {
    process.stdout.write(`\r|  `);
  }, 200 * spinner.length * 2)
}

// console.log(counter)
// console.log(200 * spinner.length * 2)

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, counter);
//   counter += 200
 
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, counter);
//   counter += 200
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, counter += 200);





// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   '); 
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   '); 
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 1700);
