
const exp=require("express")

const app=exp();
const cors = require('cors');
app.use(exp.json())

app.use(cors());
const axios = require('axios');




app.post("/text",async (req,resp)=>{


  const response = await axios.post(
    'https://api.openai.com/v1/completions',
    {
      model: 'text-davinci-002',
      prompt: req.body.k,
      max_tokens: 1000,
      
      temperature: 0,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${'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'}`,
      },
    }
  );

 resp.json({data:response.data.choices[0].text})
})
app.post("/image",async(req,resp)=>{

  const response = await axios.post(
    'https://api.openai.com/v1/images/generations',
    {
      model: 'image-alpha-001',
      prompt:req.body.k,
      size: '1024x1024',
      response_format: 'url'
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${'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'}`,
      },
    }
  );

 resp.json({data: response.data.data[0].url})
 
})


app.listen(1000,(req,resp)=>{
  console.log("server is running on 1000")
})

















