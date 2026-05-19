# مثّلها / Act It Out! 🎭

**Bilingual team-based charades party game** — supports Arabic & English, fully static, works on GitHub Pages with zero setup.

🌐 **Live at: [https://akramaldahyani.github.io/charades-game/](https://akramaldahyani.github.io/charades-game/)**

One player acts out a word without speaking. Their team tries to guess it before the timer runs out. Most points wins!

---

## 🌍 Languages

Toggle between **Arabic (RTL)** and **English (LTR)** using the language switcher on the home screen. Each language has its own complete word bank — 50+ words per category.

---

## 🎮 How to Play

1. Choose your language (العربية / English) on the home screen
2. Enter both team names
3. Choose round duration (30 / 45 / 60 seconds) and number of rounds
4. Pick a category
5. One player reads the word secretly and acts it out — no talking!
6. Press **Correct** (✓) when the team guesses right (+1 point)
7. Press **Skip** (⏭) to pass (no points)
8. When time is up, the other team takes their turn
9. Highest score after all rounds wins 🏆

---

## 📂 Project Structure

```
charades-game/
├── index.html   # All screens and layout (bilingual)
├── style.css    # Party-game UI with RTL/LTR support
└── script.js    # Game logic + Arabic & English word data
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

| Category | Arabic | English |
|----------|--------|---------|
| 🎬 | أفلام | Movies |
| 🦁 | حيوانات | Animals |
| 👔 | وظائف | Jobs |
| 🏠 | أشياء يومية | Daily Objects |
| ⚽ | رياضة | Sports |
| ⭐ | شخصيات مشهورة | Famous People |

Each category has 50+ words in both Arabic and English.

---

## ✏️ Adding or Editing Words

Open `script.js`. Arabic words are in the `WORDS` object, English words in `WORDS_EN`:

```js
const WORDS = {
    movies: ["تيتانيك", "الأسد الملك", ...],  // Arabic
    animals: ["أسد", "نمر", ...],
};

const WORDS_EN = {
    movies: ["Titanic", "The Lion King", ...], // English
    animals: ["Lion", "Tiger", ...],
};
```

Add, remove, or edit entries freely — no build step needed.

---

## ⌨️ Keyboard Shortcuts (during game)

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Correct ✓ |
| `←` / `Backspace` | Skip ⏭ |
| `Esc` | Close modal |

---

## 🛠️ Tech Stack

- Pure HTML, CSS, JavaScript — no frameworks, no dependencies
- Google Fonts: Cairo & Tajawal
- RTL & LTR layout support
- Mobile responsive
