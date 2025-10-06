const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/verify', (req, res) => {
  // Simple logic: always return not robot
  res.json({ isRobot: false });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
