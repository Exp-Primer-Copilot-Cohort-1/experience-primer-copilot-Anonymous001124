// Create web server
// 1. Install express
// 2. Import express
// 3. Create an instance of express
// 4. Create a route
// 5. Start the server

const express = require('express');
const app = express();

const comments = [
  { username: 'Tam', comment: 'Hello' },
  { username: 'Tuan', comment: 'Hi there' },
  { username: 'Hieu', comment: 'How are you' },
];

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 1. Create a route
// 2. Return all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// 1. Create a route
// 2. Create a comment
app.post('/comments', (req, res) => {
  const newComment = {
    username: req.body.username,
    comment: req.body.comment,
  };
  comments.push(newComment);
  res.send('Comment is added');
});

// 1. Create a route
// 2. Update a comment
app.put('/comments/:id', (req, res) => {
  const comment = comments[req.params.id];
  comment.username = req.body.username;
  comment.comment = req.body.comment;
  res.send('Comment is updated');
});

// 1. Create a route
// 2. Delete a comment
app.delete('/comments/:id', (req, res) => {
  comments.splice(req.params.id, 1);
  res.send('Comment is deleted');
});

app.listen(3000, () => console.log('Server is listening on port 3000'));