const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

class MiniRegexEngine {
  constructor(pattern) {
    this.patterns = pattern.split("|");
  }

  match(string) {
    let matches = [];

    this.patterns.forEach(pattern => {
      let startIndex = 0;
      let matchIndex;

      while ((matchIndex = string.indexOf(pattern, startIndex)) !== -1) {
        matches.push(string.substring(matchIndex, matchIndex + pattern.length));
        startIndex = matchIndex + pattern.length;
      }
    });

    return matches;
  }
}

app.post('/regex', (req, res) => {
  const { pattern, string } = req.body;
  const engine = new MiniRegexEngine(pattern);
  const matches = engine.match(string);
  res.json({ matches });
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
