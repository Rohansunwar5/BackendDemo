import express from 'express';

const app = express();
app.use(express.static('dist'))


// app.get('/', (req, res) => {
//   res.send('Server is ready')
// })

// get a list of 5 jokes 

app.get('/api/jokes', (req,res) => {
  const jokes =[
    {
      id: 1,
      title: 'A joke',
      content: "Why don't scientists trust atoms? Because they make up everything."
  },
  {
      id: 2,
      title: 'Another joke',
      content: "I told my wife she was drawing her eyebrows too high. She looked surprised."
  },
  {
      id: 3,
      title: 'Joke of the day',
      content: "I'm on a whiskey diet. I've lost three days already."
  },
  {
      id: 4,
      title: 'Pun time',
      content: "I used to be a baker because I kneaded dough."
  },
  {
      id: 5,
      title: 'One-liner',
      content: "I used to play piano by ear, but now I use my hands and fingers."
  }
  ]
  res.send(jokes);
})

const port =  process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
}
);