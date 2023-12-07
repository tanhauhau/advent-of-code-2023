const input = `Time:        44     80     65     72
Distance:   208   1581   1050   1102`;

const [time, distance] = input
  .split('\n')
  .map((line) => Number(line.slice(line.indexOf(':') + 1).replace(/\s+/g, '')));

let waysToWin = 0;
for (let timeToHold = 0; timeToHold <= time; timeToHold++) {
  const speed = timeToHold;
  const timeRemaining = time - timeToHold;
  const distanceTravelled = speed * timeRemaining;
  if (distanceTravelled > distance) {
    waysToWin++;
  }
}

console.log(waysToWin);
