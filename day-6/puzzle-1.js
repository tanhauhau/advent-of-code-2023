const input = `Time:        44     80     65     72
Distance:   208   1581   1050   1102`;

const [times, distances] = input
  .split('\n')
  .map((line) => [...line.matchAll(/\d+/g)].map(([number]) => Number(number)));

let answer = 1;
for(let i = 0; i < times.length; i++) {
  const time = times[i];
  const distance = distances[i];

  let waysToWin = 0;
  for(let timeToHold = 0; timeToHold <= time; timeToHold++) {
    const speed = timeToHold;
    const timeRemaining = time - timeToHold;
    const distanceTravelled = speed * timeRemaining;
    if (distanceTravelled > distance) {
      waysToWin++;
    }
  }
  answer *= waysToWin;
}

console.log(answer);
