const express = require('express');
const bodyPaser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res) => {
    res.send([
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '123456',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '전상규',
    'birthday' : '930613',
    'gender' : '남자',
    'job' : '프로그래머'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '아무개',
    'birthday' : '987654',
    'gender' : '남자',
    'job' : '디자이너'
  }
]);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});