import express, { Request, Response } from 'express';
import cors from 'cors';
import candidateRouter from './routes/candidates/router';
import jobsRouter from './routes/jobs/router';
import healthCheckRouter from './routes/health/router';
import logRequest from './middleware/logRequest';
import notFoundHandler from './handlers/notFound';
import errorHandler from './handlers/error';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(logRequest);
app.use('/candidates', candidateRouter);
app.use('/jobs', jobsRouter);
app.use('/', healthCheckRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Api is listening on ${port}`);
});
