const express = require("express")
const fetch = require("node-fetch")

const app = express()

app.get('/ping', async (req, res) => {
  const requestOptions = {
  'metho': 'GET',
  'headers': {
    'x-api-key': 'u7ixv1qfxtw4stxdcu4qqj32',
  },
  };

  const response = await fetch(
    'https://api.etsy.com/v3/application/openapi-ping',
    requestOptions
  );

  if(response.ok){
    const data = await response.json();
    res.send(data);
  } else {
    res.send("oops");
  }
});

app.get('/', (req, res) => {
  res.send('Hello, WORLD!')
})


const port = 3003
app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
})
