
const express = require('express');
const app = express();
app.use(express.static('images'));
app.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});