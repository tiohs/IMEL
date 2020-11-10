const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send("Hello World !");
});
app.get('/c', (req, res) => {
  res.send("Hello World ! 1");
});
app.get('/d', (req, res) => {
  res.send("Hello World ! 4");
});
app.use((req, res) => {
  res.send('Hello Wordl Pai');
})
app.listen(3000, ()=> {
  console.log('servidor está on ! ')
});



// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "img")));

// const usersRoutes = require("./routes/alunos.routes");

// app.use(usersRoutes);
