import * as express from 'express'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import { Express } from 'express'
import { login } from './routes/login';
import { authorization } from './routes/authorization';
import { project } from './routes/project';


const app: Express = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', login)

app.use('/projects', authorization)
app.get('/projects', project)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const uri: string = 'mongodb://127.0.0.1:27017/finatec';
mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Succesfully Connected!')
    }
});
