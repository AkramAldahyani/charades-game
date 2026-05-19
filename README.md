# مثّلها 🎭

**Arabic team-based charades party game** — fully static, works on GitHub Pages with zero setup.

One player acts out a word without speaking. Their team tries to guess it before the timer runs out. Most points wins!

---

## 🎮 How to Play

1. Enter both team names
2. Choose round duration (30 / 45 / 60 seconds) and number of rounds
3. Pick a category
4. One player reads the word secretly and acts it out — no talking!
5. Press **صح** when the team guesses correctly (+1 point)
6. Press **تخطي** to skip (no points)
7. When time is up, the other team takes their turn
8. Highest score after all rounds wins 🏆

---

## 📂 Project Structure

```
charades-game/
├── index.html   # All screens and layout
├── style.css    # RTL Arabic party-game UI
└── script.js    # Game logic + all word data
```

---

## 🚀 Running the Game

**Quickest way — open directly:**
```
Double-click index.html
```

**Local server (Windows):**
```powershell
python -m http.server 8080
# then open http://localhost:8080
```

**GitHub Pages:**
1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch, root `/`
4. Live at `https://<username>.github.io/<repo-name>`

---

## 🗂️ Categories

| Category | Arabic |
|----------|--------|
| 🎬 Movies | أفلام |
| 🦁 Animals | حيوانات |
| 👔 Jobs | وظائف |
| 🏠 Daily Objects | أشياء يومية |
| ⚽ Sports | رياضة |
| ⭐ Famous People | شخصيات مشهورة |

Each category has 50+ Arabic words/phrases.

---

## ✏️ Adding or Editing Words

Open `script.js` and find the `WORDS` object at the top of the file:

```js
const WORDS = {
    movies: ["تيتانيك", "الأسد الملك", ...],
    animals: ["أسد", "نمر", ...],
    // ...
};
```

Add, remove, or edit entries freely — no build step needed.

---

## ⌨️ Keyboard Shortcuts (during game)

| Key | Action |
|-----|--------|
| `Space` / `Enter` / `→` | صح (Correct) |
| `←` / `Backspace` | تخطي (Skip) |
| `Esc` | Close modal |

---

## 🛠️ Tech Stack

- Pure HTML, CSS, JavaScript — no frameworks, no dependencies
- Google Fonts: Cairo & Tajawal
- RTL layout throughout
- Mobile responsive
