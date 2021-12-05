const SIZE = 10000000;
const holes = Array(SIZE).fill(false);

let rabbitPlace: number;

const setup = () => {
  rabbitPlace = Math.floor(Math.random() * SIZE);
  holes[rabbitPlace] = true;

  // console.log(`The rabbit starts at hole ${rabbitPlace}`);
};

const rabbitMove = () => {
  holes[rabbitPlace] = false;

  switch (rabbitPlace) {
    case 0:
      rabbitPlace = 1;
      break;
    case SIZE - 1:
      rabbitPlace = SIZE - 2;
      break;
    default:
      if (Math.random() > 0.5) {
        rabbitPlace = rabbitPlace + 1;
      } else {
        rabbitPlace = rabbitPlace - 1;
      }
  }
  holes[rabbitPlace] = true;

  // console.log(`The rabbit moved to hole ${rabbitPlace}`);
};

setup();
let found = false;
for (let i = 0; i < SIZE; i++) {
  // console.log(`We hit the hole ${i}`);
  if (holes[i]) {
    console.log(`Rabbit found at hole ${i}`);
    found = true;
    break;
  }

  rabbitMove();
}
if (!found) {
  for (let i = SIZE - 1; i >= 0; i--) {
    // console.log(`We hit the hole ${i}`);
    if (holes[i]) {
      console.log(`Rabbit found at hole ${i}`);
      found = true;
      break;
    }
  
    rabbitMove();
  }
}
