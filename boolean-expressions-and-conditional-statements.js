/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = false;
const hasArmor = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?: ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  console.log("You see a goblin: it is hard to tell if it is friend or foe.");
  const goblin = readline.question("Do you try to the 'fight' or the 'befriend' the goblin?: ");
  if (goblin === "fight" && !hasArmor) {
    console.log("You were not strong enough to fight the goblin unarmed, you fall to the ground hoping that the cleric is still nearby. GAME OVER");
  } else if (goblin === "fight" && hasArmor) {
    console.log("You easily defeated the Goblin. But you start to wonder if you're one of the good guys.");
  }
  else if (goblin === "befriend"){
    console.log("You find that the goblin is a trader wanting to discuss trinkets and treasures.");
} 
}else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  console.log("You are approached by a village guard asking if you will take up arms against bandits approaching.");  
  const raid = readline.question("Do you take up 'arms' or try to 'run' from the bandits?: ");
  if (raid === "arms" || hasSword) {
    console.log("You are expected to fight and protect the village!");
  } else if (raid === "run") {
    console.log("You fall back to a stone building near the gate. You have found the armory!");
  }
}else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.
*/