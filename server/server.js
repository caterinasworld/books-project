const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// const corsOptions = {
//   origin: 'http://localhost:5173/',
// };

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome page');
});

app.get('/api', (req, res) => {
  res.json({
    books: [
      'The Fellowship of the Ring',
      'The Two Towers',
      'The Return of the King',
      'The Hobbit, or There and Back Again',
      'The Silmarillion',
    ],
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
