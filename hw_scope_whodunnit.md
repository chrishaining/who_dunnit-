# Scope Homework: Who Dunnit

### Learning Objectives

- Understand function scope
- Know the difference in between the let and const keywords

## Brief

Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

### MVP

#### Episode 1

```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
```
<!-- should show that Miss Scarlet is the murderer.  -->


#### Episode 2

```js
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}
// I expect the code to break on line 39, as there is an attempt to change a constant, murderer.

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```

#### Episode 3

```js
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
```

<!-- i predict it will declare Mrs. Peacock then Professor Plum as the murderer. declareMurderer is making a change to the murderer, whilst secondVerdict is just going directly to the original let variable -->


#### Episode 4

```js
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
// will show Miss Scarlet, Professor Plum and Colonel Mustard. It's reading the original let statements, then making a change to suspectThree. since they are let statements, it's ok to change Colonel Mustard.

console.log(`Suspect three is ${suspectThree}.`);
// will show Mrs Peacock, as it's referring to the original let variable for suspectThree
```

#### Episode 5

```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
  // will this work? I think so, but I'm not sure
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;

}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
// The weapon is Revolver - changeWeapon function has been run just before the verdict, and because scenario.weapon is not changing the structure of scenario, it's okay to make the change.
```

#### Episode 6

```js
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// I expect the murderer is Mrs White. plotTwist has been called (changing the murderer to Mrs White), and it's okay to do this because the original variable was created using let. because Mrs White cannot be changed, the changeMurderer function won't work.
```

#### Episode 7

```js
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}
// at the moment it's Miss Scarlet
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// It could be Miss Scarlet or Mr Green. In changeMurderer and unexpectedOutcome, murderer is not the constant itself (the function is?). So, I'm going with Mr Green.
```

#### Episode 8

```js
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// declareWeapon - The weapon is Candle Stick. because we've used unexpectedOutcome
```

#### Episode 9

```js
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// it will be Professor Plum, as the code to make Mrs Peacock the murderer is trapped inside a block.
```

### Extensions

Make up your own episode!
