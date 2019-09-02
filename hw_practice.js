// episode 10

const scenario = {
  murderer: 'Boab',
  room: 'Sauna',
  weapon: 'Paper clip',
  reason: 'Revenge'
};

const declareMurderer = function() {
  let murderer = scenario.murderer
  return `The murderer is ${murderer}.`;
}

const changeReason = function() {
  scenario.reason = 'Greed';
}

const plotTwist = function() {
  scenario.murderer = 'Betty';
}

const shockTwist = function() {
   scenario.murderer = '... It was all a hoax!';
  }

shockTwist();
const verdict = declareMurderer();
console.log(verdict);
