

const spinner = function() {
  
  let string = ['|', '/', '-', `\\`, '|', '/', '-', `\\`, '|'];

  let delay = 50;

  for (const item of string) {

    setTimeout(() => {

      process.stdout.write(`\r ${item}`);

    }, delay += 100);

  }

  setTimeout(() => {

    process.stdout.write(`\n`);

  }, 2000);

};

spinner();
