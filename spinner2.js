process.stdout.write('hello from spinner1.js... \rheyyy\n');


let string = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   "];

for (let i in string) {
  setTimeout(() => {
    process.stdout.write(string[i])
  },i*300);
}





