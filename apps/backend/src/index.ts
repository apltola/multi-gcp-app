import express, { Request, Response } from 'express';
import candidateRouter from './routes/candidates/router';
import jobsRouter from './routes/jobs/router';
import logRequest from './middleware/logRequest';
import notFoundHandler from './handlers/notFound';
import errorHandler from './handlers/error';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logRequest);
app.use('/candidates', candidateRouter);
app.use('/jobs', jobsRouter);

app.get('/', (req, res) => {
  res.send('server is alive');
});

// app.use('*', notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
