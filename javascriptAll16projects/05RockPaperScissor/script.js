const results = document.querySelector(".result"),
    user = results.querySelector("#user"),
    comp = results.querySelector("#com"),
    win = results.querySelector("#win");

const choices = document.querySelectorAll(".choice img");
let userScoreVal = document.querySelector("#userScoreVal");
let compScoreVal = document.querySelector("#compScoreVal");

// --- Array for choices -----
const arrChoices = ["Rock", "Paper", "Scissors"];
// ---- Array for winningSituation ----
const winningSituation = [
    {
        user: "Rock",
        comp: "Scissors",
        win: "User win"
    },
    {
        user: "Scissors",
        comp: "Paper",
        win: "User win"
    },
    {
        user: "Paper",
        comp: "Rock",
        win: "User win"
    },
    {
        user: "Scissors",
        comp: "Rock",
        win: "Computer win"
    },
    {
        user: "Paper",
        comp: "Scissors",
        win: "Computer win"
    },
    {
        user: "Rock",
        comp: "Paper",
        win: "Computer win"
    },
];

let userCount = 0;
let compCount = 0;

// ------ checkWinner function here ----
function checkWinner(userChoice, computerChoice) {
    user.textContent = userChoice;
    comp.textContent = computerChoice;
    if (userChoice === computerChoice) {
        win.textContent = "Game Draw";
    }

    for (const situation of winningSituation) {
        if (situation.user === userChoice && situation.comp === computerChoice) {
            if (situation.win === "User win") {
                userCount += 1;
            } else if (situation.win === "Computer win") {
                compCount += 1;
            }
            userScoreVal.textContent = userCount;
            compScoreVal.textContent = compCount;
            win.textContent = situation.win;
            break;
        }
    }

}

// ---- for of loop ----
for (const choice of choices) {
    choice.addEventListener("click", (e) => {
        userChoice = e.target.id;
        computerChoice = arrChoices[Math.floor(Math.random() * 3)];
        checkWinner(userChoice, computerChoice);
    });
}