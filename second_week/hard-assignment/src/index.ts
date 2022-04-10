import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.json());
app.use('/api', require('./api'));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('정아님 가르침을 주셔 감사합니다! 내 꿈은 채정아');
});

app.listen('8000', () => {
    console.log(`
        #############################################
              💩 Server Listening Port : 8000 💩
        #############################################
    `);
});