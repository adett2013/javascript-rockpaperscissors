# Rock, Paper, Scissors 🪨📄✂️

A clean, browser-based Rock, Paper, Scissors game built with vanilla HTML, CSS, and JavaScript. Play against the computer in a first-to-three-wins format.

## Demo

Open [arne-dettmer.de/arnetwork/rps](https://arne-dettmer.de/arnetwork/rps) directly in your browser.
> Or download the repo and open `index.html`

## Features

- **Player vs. Computer** — the computer picks randomly each round
- **Best-of-three scoring** — first to 3 wins takes the game
- **Live scoreboard** — appears after the first move and updates every round
- **Round & game results** — clear feedback for wins, losses, and draws
- **Buttons auto-disable** when the game ends so the final result stays visible
- **Dark UI** — easy on the eyes with a fixed credits bar at the bottom

## How to Play

1. Click **Rock**, **Paper**, or **Scissors** to make your move.
2. The computer picks simultaneously and the round result is shown.
3. The scoreboard tracks wins for both sides.
4. The first player to reach **3 wins** wins the game and the buttons are disabled.
5. Refresh the page to start a new game.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/adett2013/javascript-rockpaperscissors.git

# Open the game
cd javascript-rockpaperscissors
open index.html   # macOS
# or just double-click index.html in your file explorer
```

No dependencies, no build tools, no npm install — just open and play.

## Project Structure

```
javascript-rockpaperscissors/
├── index.html   # Game UI, layout, and styles
├── script.js    # Game logic (play, scoring, win detection)
└── README.md
```

## Tech Stack

| Technology | Role |
|------------|------|
| HTML5      | Page structure and markup |
| CSS3       | Styling, dark theme, hover effects, fixed footer |
| JavaScript | Game logic, DOM manipulation, event listeners |

## Game Logic Overview

- `play(userChoice)` — resolves a round against a random computer choice, updates the score, and checks for a game winner.
- `disableButtons()` — disables all three choice buttons once the game is decided.

## Credits

Created by **Arne Dettmer**

- Portfolio: [arne-dettmer.de](https://arne-dettmer.de)
- Impressum: [net.arne-dettmer.de/impressum](https://net.arne-dettmer.de/impressum)

