Welcome to your assessment!  
This is a **40-minute timed test** covering **Python**, **Node.js (Express)**, and **React**.  
You’ll complete small tasks in each stack and push your code — the autograder will check your work.

---

## 🕒 Time Limit
You have **40 minutes** total.  
Focus on correctness and passing tests — partial credit is possible.

---

## 📂 Repository Structure

─ .github/workflows/classroom-autograde.yml # Autograding workflow
│
├─ python/ # Python task
│ ├─ task.py # implement here
│ ├─ app.py # runner
│ └─ tests/test_task.py
│
├─ node/ # Node.js task
│ ├─ app.js # implement here
│ ├─ server.js
│ ├─ tests/app.spec.js
│ ├─ jest.config.js
│ └─ package.json
│
├─ react/ # React task
│ ├─ src/Counter.jsx # implement here
│ ├─ src/App.jsx
│ ├─ src/main.jsx
│ ├─ src/tests/Counter.test.jsx
│ ├─ vite.config.js
│ └─ package.json
│
└─ README.md


---

## 🎯 Tasks

### 1. Python (30 pts) — `top_k_words`
**File:** `python/task.py`  

Implement:

```python
def top_k_words(text: str, k: int):
    """
    Return top-k most frequent words (case-insensitive).
    Ties: sort alphabetically.
    Ignore non-words.
    """


Input: string + integer k

Output: list of top-k words

Rules:

Case-insensitive

Ties broken alphabetically

If k <= 0 → return []

If no valid words → return []

Run tests:

cd python
pytest -q

Code Solution
import re
from collections import Counter

def top_k_words(text: str, k: int):
    
    if k <= 0:
        return []


    words = re.findall(r'\b[a-zA-Z]+\b', text.lower())

    if not words:
        return []

    # Count frequencies
    freq = Counter(words)

    # Sort first by frequency descending, then alphabetically
    sorted_words = sorted(freq.items(), key=lambda x: (-x[1], x[0]))

    # Extract the top-k words
    return [word for word, _ in sorted_words[:k]]


2. Node.js (40 pts) — POST /api/sum

File: node/app.js

Implement a POST endpoint:

Route: /api/sum

Input JSON: { "a": number, "b": number }

Output JSON: { "sum": a+b }

Validation: If invalid → status 400 + { "error": "Invalid input" }

Run tests:

cd node
npm install
npm test

Code Solution:
const express = require('express');
const app = express();

app.use(express.json());

// POST /api/sum
app.post('/api/sum', (req, res) => {
    const { a, b } = req.body;

    // Validate input
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    // Compute sum
    const sum = a + b;
    res.json({ sum });
});

// Start server (optional for testing)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


3. React (30 pts) — Counter Component

File: react/src/Counter.jsx

Implement:

Displays a count (data-testid="count")

Buttons: + and –

+ increments

– decrements, but never below 0

Disable the – button at 0

Accepts initial prop (default 0)

Run tests:

cd react
npm install
npm test

code solution

import React, { useState } from 'react';

function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div data-testid="count">{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={count === 0}>–</button>
    </div>
  );
}

export default Counter;

✅ How to Submit

Implement solutions in:

python/task.py

node/app.js

react/src/Counter.jsx

Run tests locally (optional but recommended).

Commit & push your changes:

git add .
git commit -m "Completed assessment"
git push


GitHub Classroom Autograder will run automatically.

📊 Scoring

Python: 30 points

Node.js: 40 points

React: 30 points

Passing threshold: 70/100

Each test passed = points earned.

⚠️ Rules

Do not modify test files or workflow files.

Only edit the files marked as implement here.

Work independently.

Manage your time — 40 minutes maximum.

🏁 Good Luck!

Focus on clean, working code. Passing tests = success 🚀
