const EventEmitter = require("events");

const celebrity = new EventEmitter();

//subscribe to celebrity observer 1
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("You are the best");
  }
});

//subscribe to celebrity observer 2
celebrity.on("race", (result) => {
  if (result === "lost") {
    console.log("I could have done better than that");
  }
});

process.on("exit", (code) => {
  console.log(`Process exit with code: ${code}`);
});

//celebrity.emit("race", "win");
celebrity.emit("race", "lost");
